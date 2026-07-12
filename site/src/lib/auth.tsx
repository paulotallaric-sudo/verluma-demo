"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { demoUser } from "@/lib/data/demo-user";
import { track } from "@/lib/analytics";

/**
 * Authentification simulée du site de démonstration.
 * La « session » vit dans localStorage — aucun serveur, aucune donnée
 * transmise. Deux chemins :
 *  - connexion avec les identifiants de démonstration (compte Sylvie, riche) ;
 *  - inscription libre (compte neuf, passe par l'onboarding).
 */

export type Session = {
  firstName: string;
  lastName: string;
  email: string;
  /** Compte de démonstration (Sylvie) ou compte créé à la volée. */
  kind: "demo" | "fresh";
  onboarded: boolean;
  language?: string;
  dailyGoal?: number;
};

type AuthContextValue = {
  session: Session | null;
  /** true tant que localStorage n'a pas été lu (évite les éclairs d'UI). */
  loading: boolean;
  login: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  signup: (data: { firstName: string; email: string; password: string }) => void;
  completeOnboarding: (data: { language: string; dailyGoal: number }) => void;
  logout: () => void;
};

const STORAGE_KEY = "verluma:session";

const AuthContext = createContext<AuthContextValue | null>(null);

function readSession(): Session | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

function writeSession(session: Session | null) {
  try {
    if (session) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // stockage indisponible (navigation privée stricte) : session en mémoire seulement
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSession(readSession());
    setLoading(false);
  }, []);

  const login = useCallback<AuthContextValue["login"]>((email, password) => {
    const normalized = email.trim().toLowerCase();
    if (normalized === demoUser.email && password === demoUser.password) {
      const next: Session = {
        firstName: demoUser.firstName,
        lastName: demoUser.lastName,
        email: demoUser.email,
        kind: "demo",
        onboarded: true,
      };
      writeSession(next);
      setSession(next);
      track("connexion", { kind: "demo" });
      return { ok: true };
    }
    return {
      ok: false,
      error:
        "Identifiants inconnus. Sur ce site de démonstration, utilisez le compte indiqué ci-dessous — ou créez un compte en un clic.",
    };
  }, []);

  const signup = useCallback<AuthContextValue["signup"]>((data) => {
    const next: Session = {
      firstName: data.firstName.trim(),
      lastName: "",
      email: data.email.trim().toLowerCase(),
      kind: "fresh",
      onboarded: false,
    };
    writeSession(next);
    setSession(next);
    track("inscription");
  }, []);

  const completeOnboarding = useCallback<AuthContextValue["completeOnboarding"]>((data) => {
    setSession((current) => {
      if (!current) return current;
      const next: Session = { ...current, onboarded: true, ...data };
      writeSession(next);
      return next;
    });
    track("fin_onboarding", data);
  }, []);

  const logout = useCallback(() => {
    writeSession(null);
    setSession(null);
    track("deconnexion");
  }, []);

  const value = useMemo(
    () => ({ session, loading, login, signup, completeOnboarding, logout }),
    [session, loading, login, signup, completeOnboarding, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth doit être utilisé sous <AuthProvider>.");
  return ctx;
}
