import { useSyncExternalStore } from "react";
import { TESTS, type TestSlug, type Trait } from "@/lib/tests";

const KEY = "noesis-profile-v1";

export type TestResult = {
  slug: TestSlug;
  trait: Trait;
  score: number;
  answers: number[];
  completedAt: number;
};

export type Profile = {
  name: string;
  results: Partial<Record<TestSlug, TestResult>>;
};

const empty: Profile = { name: "", results: {} };

const listeners = new Set<() => void>();
let cache: Profile = empty;
let cacheRaw = "";

function emit() {
  listeners.forEach((l) => l());
}

function parse(raw: string | null): Profile {
  if (!raw) return empty;
  try {
    const data = JSON.parse(raw) as Partial<Profile>;
    return {
      name: typeof data.name === "string" ? data.name.slice(0, 40) : "",
      results: data.results && typeof data.results === "object" ? data.results : {},
    };
  } catch {
    return empty;
  }
}

function session(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function purgeShared() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* private mode */
  }
}

function read(): Profile {
  const store = session();
  if (!store) return empty;
  purgeShared();
  try {
    const raw = store.getItem(KEY) ?? "";
    if (raw === cacheRaw && cacheRaw !== "") return cache;
    cacheRaw = raw;
    cache = parse(raw);
    return cache;
  } catch {
    return empty;
  }
}

function write(next: Profile) {
  cache = next;
  cacheRaw = JSON.stringify(next);
  const store = session();
  try {
    store?.setItem(KEY, cacheRaw);
  } catch {
    /* ignore quota */
  }
  emit();
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useProfile() {
  return useSyncExternalStore(subscribe, read, () => empty);
}

export function setName(name: string) {
  const current = read();
  write({ ...current, name: name.trim().slice(0, 40) });
}

export function saveResult(result: TestResult) {
  const current = read();
  write({
    ...current,
    results: { ...current.results, [result.slug]: result },
  });
}

export function clearProfile() {
  cache = empty;
  cacheRaw = "";
  try {
    session()?.removeItem(KEY);
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  emit();
}

export function completedCount(profile: Profile) {
  return TESTS.filter((t) => profile.results[t.slug]).length;
}

export function isComplete(profile: Profile) {
  return completedCount(profile) === TESTS.length;
}
