import { doc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const generateAbsuredAnalytics = () => ({
  impressions: Math.floor(Math.random() * 1000 - 500),
  engagements: Math.floor(Math.random() * 5000),
  followersGained: Math.floor(Math.random() * 100 - 50),
  comments: Math.floor(Math.random() * 100),
  updatedAt: new Date().toISOString(),
});

export const pushAnalyticsToFirestore = async () => {
  const data = generateAbsuredAnalytics();
  await setDoc(doc(db, "analytics", "main"), data);
};
