"use client";

import { useEffect, useState } from "react";
import { WORDS } from "../lib/words";
import { ICONS } from "../lib/icons";
import WordPicker from "../components/WordPicker";
import IconPicker from "../components/IconPicker";
import PostCard from "../components/PostCard";

export default function Home() {
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feed")) || [];
    setFeed(stored);
  }, []);

  function submitPost() {
    if (selectedWords.length === 0 || !selectedIcon) return;

    const newPost = {
      id: Date.now(),
      words: selectedWords,
      icon: selectedIcon,
      public: isPublic,
      timestamp: new Date().toISOString(),
    };

    if (isPublic) {
      const updated = [newPost, ...feed];
      setFeed(updated);
      localStorage.setItem("feed", JSON.stringify(updated));
    }

    setSelectedWords([]);
    setSelectedIcon(null);
  }

  return (
    <main className="min-h-screen bg-[#F5F4F2] p-4 sm:p-6 md:p-8 lg:max-w-2xl lg:mx-auto space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F2933]">
        Now feels...
      </h1>

      <WordPicker
        words={WORDS}
        selected={selectedWords}
        setSelected={setSelectedWords}
      />

      <IconPicker
        icons={ICONS}
        selected={selectedIcon}
        setSelected={setSelectedIcon}
      />

      {/* <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
        Share publicly (anonymous)
      </label> */}

      <button
        onClick={submitPost}
        className="w-full bg-[#A3B18A] text-white py-3 rounded-xl mt-4 disabled:opacity-40 hover:bg-[#8fa176] transition-colors"
        disabled={selectedWords.length === 0 || !selectedIcon}
      >
        Post
      </button>

      <section className="space-y-3 sm:space-y-4">
        {/* <h2 className="text-lg sm:text-xl font-medium text-[#1F2933]">
          Public feed
        </h2> */}
        {feed.length === 0 && (
          <p className="text-[#6B7280] text-sm">No posts yet.</p>
        )}
        {feed.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
