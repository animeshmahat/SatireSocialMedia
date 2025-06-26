import { useAuth } from "../context/AuthContext";
import { BellRing } from "lucide-react";

const absurdNotices = [
  "🚨 You have 999+ unread messages.",
  "📉 Your engagement rate dropped by 8000%.",
  "🔥 Someone just viewed your profile by accident.",
  "🎯 You’re trending on a platform that doesn’t exist.",
  "💔 The algorithm hates you today.",
];

export default function Notifications() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex items-center mb-2 text-lg font-semibold">
        <BellRing size={20} className="mr-2" />
        Notifications
      </div>

      <ul className="text-sm list-disc ml-5 text-gray-700 dark:text-gray-300">
        {absurdNotices.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
