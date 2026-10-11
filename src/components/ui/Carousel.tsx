"use client";

import { Children, useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode;
  /** Accessible name for the carousel region. */
  label: string;
  /** Auto-scroll speed in px per frame. */
  speed?: number;
  /** Tailwind basis classes for each slide. */
  slideClassName?: string;
  className?: string;
}

/**
 * Continuously moving, looping carousel (Embla + AutoScroll).
 * - Pauses on hover / focus / drag, resumes afterwards.
 * - Manual prev/next and an explicit play/pause control (WCAG 2.2.2).
 * - Starts paused for users who prefer reduced motion.
 */
export function Carousel({
  children,
  label,
  speed = 1,
  slideClassName = "basis-[85%] sm:basis-1/2 lg:basis-1/3",
  className,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    AutoScroll({ speed, startDelay: 600, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true }),
  ]);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins().autoScroll;
    if (!autoScroll) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      autoScroll.stop();
    }
    const sync = () => setPlaying(autoScroll.isPlaying());
    sync();
    emblaApi.on("autoScroll:play", sync).on("autoScroll:stop", sync).on("reInit", sync);
    return () => {
      emblaApi.off("autoScroll:play", sync).off("autoScroll:stop", sync).off("reInit", sync);
    };
  }, [emblaApi]);

  const toggle = useCallback(() => {
    const autoScroll = emblaApi?.plugins().autoScroll;
    if (!autoScroll) return;
    if (autoScroll.isPlaying()) autoScroll.stop();
    else autoScroll.play();
  }, [emblaApi]);

  const step = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return;
      emblaApi.plugins().autoScroll?.stop();
      if (direction === "prev") emblaApi.scrollPrev();
      else emblaApi.scrollNext();
    },
    [emblaApi],
  );

  const controlClass =
    "clay-sm inline-flex size-11 items-center justify-center rounded-full bg-surface text-ink transition-transform hover:-translate-y-0.5 active:clay-pressed";

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        className="-my-10 overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        ref={emblaRef}
      >
        <div className="-ml-6 flex touch-pan-y">
          {Children.map(children, (child, index) => (
            <div
              className={cn("min-w-0 shrink-0 grow-0 pl-6", slideClassName)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${Children.count(children)}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button type="button" className={controlClass} onClick={() => step("prev")} aria-label="Previous slide">
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          className={cn(controlClass, "w-auto gap-2 px-5 text-sm font-bold")}
          onClick={toggle}
          aria-label={playing ? "Pause carousel" : "Play carousel"}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          {playing ? "Pause" : "Play"}
        </button>
        <button type="button" className={controlClass} onClick={() => step("next")} aria-label="Next slide">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
