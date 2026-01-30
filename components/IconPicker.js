export default function IconPicker({ icons, selected, setSelected }) {
  return (
    <div>
      <p className="mb-2 text-sm text-[#6B7280]">Pick an image</p>

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
        {icons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => setSelected(icon)}
            className={`p-0 rounded-lg overflow-hidden border border-[#E5E7EB] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
            ${
              selected?.id === icon.id
                ? "ring-2 ring-[#A3B18A]"
                : "bg-transparent hover:bg-[#F5F4F2]"
            }
          `}
          >
            {icon.src ? (
              <img
                src={icon.src}
                alt={icon.alt || icon.id}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm px-2">{icon.label}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
