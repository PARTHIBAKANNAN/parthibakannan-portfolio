import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

// index.html sets document.documentElement[data-theme] synchronously before
// React mounts (avoids a flash of the wrong theme) — this hook just picks up
// whatever it landed on, then keeps it in sync with localStorage on toggle.
function initialTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function useThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { window.localStorage.setItem(STORAGE_KEY, theme); } catch { /* private mode, ignore */ }
  }, [theme]);

  const toggle = () => setTheme(th => (th === "dark" ? "light" : "dark"));
  return [theme, toggle];
}
