export default function IconPicker({ icons, selected, setSelected }) {
  return (
    <div className="flex gap-3 mt-4">
      {icons.map((icon) => (
        <button
          key={icon.id}
          onClick={() => setSelected(icon)}
          className={`text-2xl p-3 rounded-lg border
            ${
              selected?.id === icon.id
                ? "bg-black text-white"
                : "bg-white hover:bg-neutral-200"
            }
          `}
        >
          {icon.label}
        </button>
      ))}
    </div>
  );
}
