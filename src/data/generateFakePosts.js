const absurdMetrics = () => ({
  likes: Math.floor(Math.random() * 1000 - 500), // Likes can be negative
  shares: Math.floor(Math.random() * 300),
  comments: Math.floor(Math.random() * 200),
});

const randomSentences = [
  "Just launched my 14th startup today 🚀",
  "My cat got hired at Google.",
  "Breaking: AI now writes my tweets and my will.",
  "I sold my NFT for a banana peel.",
  "Mood: Influencer but broke.",
];

export const generateFakePosts = (users) => {
  return users.map((user) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    avatar: user.picture.thumbnail,
    content:
      randomSentences[Math.floor(Math.random() * randomSentences.length)],
    metrics: absurdMetrics(),
    timestamp: new Date().toISOString(),
  }));
};
