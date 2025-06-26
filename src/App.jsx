import FakeFeed from "./components/FakeFeed";
import AnalyticsCard from "./components/AnalyticsCard";
import ThemeToggle from "./components/ThemeToggle";
import LoginButton from "./components/LoginButton";
import Notifications from "./components/Notifications";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { pushAnalyticsToFirestore } from "./firebase/fakeMetrics";

function App() {
  const { user } = useAuth();

  // 🔁 Generate fake analytics once on first load (optional)
  useEffect(() => {
    pushAnalyticsToFirestore();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pb-20">
      {/* Global controls */}
      <ThemeToggle />
      <LoginButton />

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">💀 FakeSocial</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Where analytics are made up and likes don’t matter.
        </p>
        {user && (
          <p className="text-sm text-green-500 mt-2">
            Logged in as <strong>{user.name}</strong>
          </p>
        )}
      </div>

      {/* Notifications (only visible when logged in) */}
      <Notifications />

      {/* Satirical Analytics Dashboard */}
      <AnalyticsCard />

      {/* Feed of absurd posts */}
      <FakeFeed />
    </div>
  );
}

export default App;
