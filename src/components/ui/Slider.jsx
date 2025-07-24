"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "./Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function Slider({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">{children}</div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
        <Button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          color="SecondaryGray"
          className="shadow-lg"
          size="onlyIcon_md"
          aria-label="Previous slide"
        >
          <FaAngleLeft />
        </Button>
        <Button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          color="SecondaryGray"
          className="shadow-lg"
          size="onlyIcon_md"
          aria-label="Next slide"
        >
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
}
