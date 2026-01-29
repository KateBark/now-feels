export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border">
      <div className="text-3xl mb-2">{post.icon}</div>
      <div className="flex flex-wrap gap-2">
        {post.words.map((word) => (
          <span
            key={word}
            className="px-2 py-1 bg-neutral-200 rounded-full text-sm"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
