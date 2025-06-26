import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}
