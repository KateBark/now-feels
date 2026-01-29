export default function PostCard({ post }) {
  const date = post.timestamp ? new Date(post.timestamp) : null;
  const formatted = date ? date.toLocaleString() : "";

  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border">
      <div className="flex justify-between items-start gap-2 mb-2 sm:mb-3">
        <div className="text-2xl sm:text-3xl md:text-4xl shrink-0">
          {post.icon}
        </div>
        {formatted && (
          <div className="text-xs sm:text-sm text-neutral-500 text-right shrink-0">
            {formatted}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1 sm:gap-2">
        {post.words.map((word) => (
          <span
            key={word}
            className="px-2 py-1 bg-neutral-200 rounded-full text-xs sm:text-sm"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
