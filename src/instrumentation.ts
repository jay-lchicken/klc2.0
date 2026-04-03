class MemoryStorage {
  private store = new Map<string, string>();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    if (!this.store.has(key)) return null;
    return this.store.get(key) ?? null;
  }

  key(index: number): string | null {
    if (index < 0 || index >= this.store.size) return null;
    return Array.from(this.store.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(String(key), String(value));
  }
}

export function register() {
  if (typeof window !== "undefined") return;

  const globalAny = globalThis as unknown as { localStorage?: unknown };
  const ls = globalAny.localStorage as { getItem?: unknown } | undefined;

  if (!ls || typeof ls.getItem !== "function") {
    globalAny.localStorage = new MemoryStorage();
  }
}
