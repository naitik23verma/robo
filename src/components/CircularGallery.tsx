"use client";
import { useEffect, useRef } from "react";

interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps {
  items?: GalleryItem[];
  height?: number; // px
  imageWidth?: number; // px
  scrollSpeed?: number;
}

export default function CircularGallery({
  items = [],
  height = 260,
  imageWidth = 340,
  scrollSpeed = 1.2,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollRef = useRef({ current: 0, target: 0 });
  const isInteractingRef = useRef(false);

  const defaultItems: GalleryItem[] = [
    { image: "https://picsum.photos/seed/1/800/600?grayscale", text: "Bridge" },
    { image: "https://picsum.photos/seed/2/800/600?grayscale", text: "Desk Setup" },
    { image: "https://picsum.photos/seed/3/800/600?grayscale", text: "Waterfall" },
    { image: "https://picsum.photos/seed/4/800/600?grayscale", text: "Strawberries" },
    { image: "https://picsum.photos/seed/5/800/600?grayscale", text: "Deep Diving" },
    { image: "https://picsum.photos/seed/16/800/600?grayscale", text: "Train Track" },
    { image: "https://picsum.photos/seed/17/800/600?grayscale", text: "Santorini" },
    { image: "https://picsum.photos/seed/8/800/600?grayscale", text: "Blurry Lights" },
    { image: "https://picsum.photos/seed/9/800/600?grayscale", text: "New York" },
    { image: "https://picsum.photos/seed/10/800/600?grayscale", text: "Good Boy" },
    { image: "https://picsum.photos/seed/21/800/600?grayscale", text: "Coastline" },
    { image: "https://picsum.photos/seed/12/800/600?grayscale", text: "Palm Trees" },
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;
  // Duplicate for seamless infinite scroll
  const duplicatedItems = [...galleryItems, ...galleryItems];
  const totalWidth = duplicatedItems.length * imageWidth;

  function animate() {
    if (!trackRef.current) return;
    if (!isInteractingRef.current) {
      scrollRef.current.target += scrollSpeed;
    }
    // Lerp for smoothness
    scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.08;
    // Loop
    if (scrollRef.current.current > totalWidth / 2) {
      scrollRef.current.current -= totalWidth / 2;
      scrollRef.current.target -= totalWidth / 2;
    } else if (scrollRef.current.current < 0) {
      scrollRef.current.current += totalWidth / 2;
      scrollRef.current.target += totalWidth / 2;
    }
    trackRef.current.style.transform = `translateX(${-scrollRef.current.current}px)`;
    animationRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isInteractingRef.current = true;
      startX = e.clientX;
      scrollStart = scrollRef.current.target;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const x = e.clientX;
      const distance = (startX - x);
      scrollRef.current.target = scrollStart + distance;
    };
    const handleMouseUp = () => {
      isDown = false;
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 150);
    };
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      isInteractingRef.current = true;
      scrollRef.current.target += e.deltaY * 0.7;
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 150);
    };
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
    };
    // eslint-disable-next-line
  }, [items, imageWidth, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing z-20"
      style={{ height: `${height + 16}px`, background: 'transparent' }}
    >
      <div className="absolute inset-0 rounded-2xl bg-background/80 backdrop-blur-lg z-0" style={{margin: '0 24px'}} />
      <div
        ref={trackRef}
        className="flex items-center gap-8 absolute left-0 top-0 z-20"
        style={{ height: `${height}px`, willChange: 'transform', minWidth: '100%' }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            style={{ width: `${imageWidth}px`, height: `${height}px` }}
          >
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 h-full w-full">
              <div className="rounded-2xl bg-background/80 backdrop-blur-lg w-full h-full flex flex-col items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.text}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                />
                {/* Optional caption below image */}
                {/* <div className="mt-2 text-center text-white font-bold text-lg">{item.text}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 