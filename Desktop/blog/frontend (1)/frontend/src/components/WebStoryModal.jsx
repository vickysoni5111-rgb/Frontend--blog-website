"use client";
import { useEffect, useRef, useState } from "react";
import { imageUrl } from "@/lib/api";

const IMAGE_DURATION = 4000;
const TICK = 50;

export default function WebStoryModal({ stories, initialIndex = 0, onClose }) {
  const [storyIndex, setStoryIndex] = useState(initialIndex);
  const [imgIndex, setImgIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);

  const currentStory = stories?.[storyIndex];
  const images =
    currentStory?.images?.length > 0 ? currentStory.images : currentStory ? [currentStory.coverImage] : [];

  const goToNextImage = () => {
    if (!currentStory) return;
    if (imgIndex < images.length - 1) {
      setImgIndex((i) => i + 1);
    } else if (storyIndex < stories.length - 1) {
      setStoryIndex((i) => i + 1);
      setImgIndex(0);
    } else {
      onClose();
    }
  };

  const goToPrevImage = () => {
    if (!currentStory) return;
    if (imgIndex > 0) {
      setImgIndex((i) => i - 1);
    } else if (storyIndex > 0) {
      const prevStory = stories[storyIndex - 1];
      const prevImages =
        prevStory.images?.length > 0 ? prevStory.images : [prevStory.coverImage];
      setStoryIndex((i) => i - 1);
      setImgIndex(prevImages.length - 1);
    }
  };

  // auto-advance progress bar
  useEffect(() => {
    if (!currentStory) return;

    setProgress(0);

    const interval = setInterval(() => {
      if (pausedRef.current) return;

      setProgress((p) => {
        const next = p + (TICK / IMAGE_DURATION) * 100;
        if (next >= 100) {
          goToNextImage();
          return 0;
        }
        return next;
      });
    }, TICK);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyIndex, imgIndex, currentStory]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNextImage();
      if (e.key === "ArrowLeft") goToPrevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyIndex, imgIndex]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  // Ab guard hooks ke BAAD hai — hook order kabhi nahi tootega
  if (!stories || stories.length === 0 || !currentStory) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl leading-none z-20">×</button>

      <div
        className="relative w-full max-w-[420px] h-[85vh] bg-black rounded-lg overflow-hidden select-none"
        onMouseDown={pause}
        onMouseUp={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div className="absolute top-2 left-2 right-2 flex gap-1 z-20">
          {images.map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/30 rounded overflow-hidden">
              <div
                className="h-full bg-white"
                style={{
                  width: i < imgIndex ? "100%" : i === imgIndex ? `${progress}%` : "0%",
                  transition: i === imgIndex ? "width 50ms linear" : "none",
                }}
              />
            </div>
          ))}
        </div>

        <img
          src={imageUrl(images[imgIndex])}
          alt={currentStory.title}
          className="w-full h-full object-contain bg-black"
        />

        <button onClick={goToPrevImage} className="absolute left-0 top-0 h-full w-1/3" aria-label="Previous" />
        <button onClick={goToNextImage} className="absolute right-0 top-0 h-full w-1/3" aria-label="Next" />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <p className="text-white font-semibold text-sm">{currentStory.title}</p>
          {currentStory.author && <p className="text-white/70 text-xs mt-1">By {currentStory.author}</p>}
        </div>
      </div>
    </div>
  );
}