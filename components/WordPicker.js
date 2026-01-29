export default function WordPicker({ words, selected, setSelected }) {
  function toggleWord(word) {
    if (selected.includes(word)) {
      setSelected(selected.filter((w) => w !== word));
    } else if (selected.length < 5) {
      setSelected([...selected, word]);
    }
  }

  return (
    <div>
      <p className="mb-2 text-sm text-neutral-600">
        Pick up to 5 words ({selected.length}/5)
      </p>

      <div className="flex flex-wrap gap-2">
        {words.map((word) => (
          <button
            key={word}
            onClick={() => toggleWord(word)}
            className={`px-3 py-1 rounded-full border text-sm
              ${
                selected.includes(word)
                  ? "bg-black text-white"
                  : "bg-white hover:bg-neutral-200"
              }
            `}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}
