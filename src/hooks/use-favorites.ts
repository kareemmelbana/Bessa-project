import { useEffect, useState } from "react";

const STORAGE_KEY = "bessa-favorite-breeds";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setFavorites(JSON.parse(saved) as string[]);
    } catch {
      setFavorites([]);
    }
  }, []);

  function toggleFavorite(name: string) {
    setFavorites((current) => {
      const next = current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return { favorites, toggleFavorite };
}