import ThemeToggle from "./components/ThemeToggle";
import AnalyticsCard from "./components/AnalyticsCard";
import FakeFeed from "./components/FakeFeed";

export default function App() {
  return (
    <div className="min-h-screen bh-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeToggle />

      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">FakeSocial</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Where analytics are made up and likes donot matter.
        </p>
      </div>
      <AnalyticsCard />
      <FakeFeed />

      <h1 className="text-center text-4x1 mt-10">Saticial Dashboard</h1>
    </div>
  );
}
