"use client";

import { useState } from "react";
import { imageUrl } from "@/lib/api";
import WebStoryModal from "./WebStoryModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function WebStoriesSection({ stories }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!stories || stories.length === 0) return null;

  return (
    <section className="mb-14">
      {/* Section Heading */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />

        <h2 className="font-display text-xl font-bold uppercase tracking-wide border-b-2 border-crimson pb-2 inline-block">
          Web Stories
        </h2>
      </div>

      {/* Continuous Web Stories Slider */}
      <div className="relative webstory-swiper overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={true}
          className="webstory-slider"
        >
          {stories.map((story, i) => (
            <SwiperSlide
              key={story._id}
              style={{
                width: "180px",
              }}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="
                  relative
                  w-[180px]
                  h-[260px]
                  rounded-2xl
                  overflow-hidden
                  group
                  text-left
                  p-[2.5px]
                  bg-gradient-to-br
                  from-crimson
                  via-orange-400
                  to-amber-300
                  shadow-lg
                  shadow-black/10
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                <span
                  className="
                    relative
                    block
                    w-full
                    h-full
                    rounded-[14px]
                    overflow-hidden
                    bg-black
                  "
                >
                  {/* Story Image */}
                  <img
                    src={imageUrl(story.coverImage)}
                    alt={story.title || "Web Story"}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-300
                    "
                  />

                  {/* Dark Gradient */}
                  <span
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/85
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Play Button */}
                  <span
                    className="
                      absolute
                      top-2.5
                      right-2.5
                      w-7
                      h-7
                      rounded-full
                      bg-white/15
                      backdrop-blur-sm
                      ring-1
                      ring-white/40
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xs
                    "
                  >
                    ▶
                  </span>

                  {/* Story Title */}
                  <span
                    className="
                      absolute
                      bottom-2.5
                      left-2.5
                      right-2.5
                      text-white
                      text-sm
                      font-display
                      font-semibold
                      leading-tight
                      tracking-wide
                      line-clamp-2
                    "
                  >
                    {story.title}
                  </span>
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Web Story Modal */}
      {activeIndex !== null && (
        <WebStoryModal
          stories={stories}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}