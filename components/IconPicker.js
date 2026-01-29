export default function IconPicker({ icons, selected, setSelected }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
      {icons.map((icon) => (
        <button
          key={icon.id}
          onClick={() => setSelected(icon)}
          className={`text-xl sm:text-2xl p-2 sm:p-3 rounded-lg border border-[#E5E7EB]
            ${
              selected?.id === icon.id
                ? "bg-[#A3B18A] text-white"
                : "bg-white text-[#1F2933] hover:bg-[#F5F4F2]"
            }
          `}
        >
          {icon.label}
        </button>
      ))}
    </div>
  );
}
