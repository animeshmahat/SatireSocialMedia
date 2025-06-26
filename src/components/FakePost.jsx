import { ThumbsUp, Share2, MessageCircle } from "lucide-react";

export default function FakePost({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-4 mb-2">
        <img
          src={post.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{post.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(post.timestamp).toLocaleString()}
          </p>
        </div>
      </div>

      <p className="mb-4">{post.content}</p>

      <div className="flex justify-around text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-1">
          <ThumbsUp size={16} />
          {post.metrics?.likes ?? 0} Likes
        </div>

        <div className="flex items-center gap-1">
          <MessageCircle size={16} />
          {post.metrics?.comments ?? 0} Comments
        </div>

        <div className="flex items-center gap-1">
          <Share2 size={16} />
          {post.metrics?.shares ?? 0} Shares
        </div>
      </div>
    </div>
  );
}
