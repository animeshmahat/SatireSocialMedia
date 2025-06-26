import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export default function AnalyticsCard() {
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "analytics", "main"), (docSnap) => {
      if (!docSnap.exists()) {
        setNotFound(true);
        return;
      }
      setData(docSnap.data());
    });

    return () => unsub();
  }, []);

  if (notFound)
    return (
      <p className="text-center text-red-500">
        Analytics data not found. Try reloading.
      </p>
    );
  if (!data)
    return <p className="text-center text-gray-400">Loading analytics...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
      <h2 className="text-xl font-bold">📈 Absurd Analytics</h2>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
        <div>
          Impressions: <strong>{data.impressions}</strong>
        </div>
        <div>
          Engagement Rate: <strong>{data.engagementRate}%</strong>
        </div>
        <div>
          Followers Gained: <strong>{data.followersGained}</strong>
        </div>
        <div>
          Comments: <strong>{data.comments}</strong>
        </div>
        <div className="col-span-2 text-xs text-right">
          Last updated: {new Date(data.updatedAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
