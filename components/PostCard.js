export default function PostCard({ post }) {
  const date = post.timestamp ? new Date(post.timestamp) : null;
  const formatted = date ? date.toLocaleString() : "";

  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border-[#E5E7EB]">
      <div className="flex justify-between items-start gap-2 mb-2 sm:mb-3">
        <div className="text-2xl sm:text-3xl md:text-4xl shrink-0">
          {post.icon && post.icon.src ? (
            <img
              src={post.icon.src}
              alt={post.icon.alt || post.icon.id || "icon"}
              className="w-16 h-16 sm:w-10 sm:h-10 object-cover rounded-lg"
            />
          ) : (
            post.icon
          )}
        </div>
        {formatted && (
          <div className="text-xs sm:text-sm text-[#6B7280] text-right shrink-0">
            {formatted}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1 sm:gap-2">
        {post.words.map((word) => (
          <span
            key={word}
            className="px-2 py-1 bg-[#E5E7EB] rounded-full text-xs sm:text-sm text-[#1F2933]"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
