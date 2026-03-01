import { useState, useEffect } from "react";

export default function ThemeToggle() {
  // 1. Start with 'true' so the default state is Dark
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // 2. Toggle the "light-theme" class instead
    if (isDark) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {/* 3. Icon logic: If dark, show Sun (to go light). If light, show Moon. */}
      {isDark ? "☀️ " : "🌙 "}
    </button>
  );
}
