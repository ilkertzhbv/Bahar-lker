"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, MutableRefObject } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CalendarHeart,
  ChevronDown,
  Heart,
  ImageIcon,
  Maximize2,
  Music2,
  Pause,
  Play,
  Sparkles
} from "lucide-react";
import {
  chapterPages,
  memories,
  songs,
  stats,
  storyLines,
  timeline,
  videos
} from "@/data/story";

type Memory = (typeof memories)[number];
type VideoItem = (typeof videos)[number];

const fadeIn = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

export function LoveStoryExperience() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-cinema-reveal]").forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 42, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const startStory = () => {
    document.querySelector("#message")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-pearl">
      <HeroSection
        heroRef={heroRef}
        opacity={heroOpacity}
        scale={heroScale}
        onStart={startStory}
      />
      <MessageChapter />
      <BookChapter />
      <MemoryGallery onSelect={setSelectedMemory} />
      <VideoArchive onSelect={setSelectedVideo} />
      <MusicChapter />
      <TimelineChapter />
      <StatsChapter />
      <LetterChapter />
      <FinalChapter />
      <MemoryLightbox memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      <VideoLightbox video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </main>
  );
}

function HeroSection({
  heroRef,
  opacity,
  scale,
  onStart
}: {
  heroRef: MutableRefObject<HTMLElement | null>;
  opacity: ReturnType<typeof useTransform>;
  scale: ReturnType<typeof useTransform>;
  onStart: () => void;
}) {
  return (
    <section ref={heroRef} className="scene relative flex min-h-screen items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          opacity,
          scale,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85)"
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,220,0.10),rgba(8,7,11,0.12)_28%,rgba(8,7,11,0.92)_78%)]" />
      <div className="film-grain" />
      <motion.div
        initial={{ opacity: 0, y: 26, filter: "blur(16px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center"
      >
        <p className="mb-5 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase text-champagne/90 backdrop-blur-xl">
          Dijital aşk günlüğü
        </p>
        <h1 className="font-serif text-6xl leading-none text-pearl drop-shadow-2xl sm:text-8xl lg:text-9xl">
          Bahar <span className="text-blush">❤️</span> İlker
        </h1>
        <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-white/78 sm:text-2xl">
          Bir mesajla başlayan hikayenin dijital günlüğü.
        </p>
        <button onClick={onStart} className="premium-button mt-10">
          <Sparkles size={18} />
          Hikayemize Başla
        </button>
        <ChevronDown className="mt-12 animate-bounce text-white/60" size={24} />
      </motion.div>
    </section>
  );
}

function MessageChapter() {
  return (
    <section id="message" className="scene message-stage relative grid min-h-screen place-items-center px-5 py-28">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-velvet/85 to-ink" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p data-cinema-reveal className="section-kicker">
          Bölüm 1
        </p>
        <h2 data-cinema-reveal className="section-title">
          Her Şey Bir Mesajla Başladı
        </h2>
        <div className="mt-12 space-y-7">
          {storyLines.map((line) => (
            <p key={line} data-cinema-reveal className="story-line">
              {line}
            </p>
          ))}
        </div>
        <div data-cinema-reveal className="message-bubble mx-auto mt-12 max-w-sm text-left">
          <p className="text-xs uppercase text-champagne/70">Bahar ❤️ İlker</p>
          <p className="mt-3 text-xl text-white">Merhaba... bu hikaye burada başlıyor.</p>
        </div>
      </div>
    </section>
  );
}

function BookChapter() {
  return (
    <section className="scene px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p data-cinema-reveal className="section-kicker">
          Bölüm 2
        </p>
        <h2 data-cinema-reveal className="section-title max-w-4xl">
          Tanışma Hikayemiz
        </h2>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {chapterPages.map((page, index) => (
            <motion.article
              key={page.title}
              data-cinema-reveal
              whileHover={{ y: -8, rotateY: index === 1 ? 0 : index === 0 ? -4 : 4 }}
              className="book-page"
            >
              <div
                className="h-72 rounded-t-[inherit] bg-cover bg-center"
                style={{ backgroundImage: `url(${page.image})` }}
              />
              <div className="p-7">
                <p className="text-sm uppercase text-champagne/70">Sayfa {index + 1}</p>
                <h3 className="mt-3 font-serif text-4xl text-white">{page.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/72">{page.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemoryGallery({ onSelect }: { onSelect: (memory: Memory) => void }) {
  return (
    <section className="scene bg-[#0c0b10] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p data-cinema-reveal className="section-kicker">
              Bölüm 3
            </p>
            <h2 data-cinema-reveal className="section-title">
              Anılarımız
            </h2>
          </div>
          <p data-cinema-reveal className="max-w-md text-white/62">
            Fotoğraflar değiştirilmeye hazır. Her kare Bahar ve İlker'in kendi
            sahnesine dönüşecek şekilde tasarlandı.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
          {memories.map((memory, index) => (
            <motion.button
              key={`${memory.title}-${index}`}
              data-cinema-reveal
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(memory)}
              className={`memory-tile group ${index % 4 === 0 ? "sm:row-span-2" : ""}`}
            >
              <span
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${memory.image})` }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="relative z-10 mt-auto flex items-center gap-2 p-4 text-left text-sm font-medium text-white">
                <ImageIcon size={16} />
                {memory.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoArchive({ onSelect }: { onSelect: (video: VideoItem) => void }) {
  return (
    <section className="scene px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p data-cinema-reveal className="section-kicker">
          Bölüm 4
        </p>
        <h2 data-cinema-reveal className="section-title">
          Video Arşivi
        </h2>
        <div className="scroll-row mt-12">
          {videos.map((video, index) => (
            <motion.button
              key={`${video.title}-${index}`}
              data-cinema-reveal
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => onSelect(video)}
              className="video-card group"
            >
              <span
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${video.poster})` }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <span className="relative z-10 mt-auto flex w-full items-end justify-between p-5">
                <span className="text-left">
                  <span className="block text-lg font-semibold text-white">{video.title}</span>
                  <span className="text-sm text-white/65">{video.duration}</span>
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-black">
                  <Play size={18} fill="currentColor" />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function MusicChapter() {
  const [activeSong, setActiveSong] = useState(0);
  const floatingNotes = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  return (
    <section className="scene relative overflow-hidden bg-[#07100f] px-5 py-28">
      {floatingNotes.map((note) => (
        <span
          key={note}
          className="music-note"
          style={
            {
              "--delay": `${note * 0.8}s`,
              "--x": `${8 + ((note * 17) % 82)}%`
            } as CSSProperties
          }
        >
          ♪
        </span>
      ))}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p data-cinema-reveal className="section-kicker">
            Bölüm 5
          </p>
          <h2 data-cinema-reveal className="section-title">
            Bizim Şarkılarımız
          </h2>
          <div data-cinema-reveal className="vinyl-wrap mt-10">
            <div className="vinyl">
              <div className="vinyl-label">B ❤️ İ</div>
            </div>
          </div>
        </div>
        <div data-cinema-reveal className="music-panel">
          {songs.map((song, index) => (
            <button
              key={song.name}
              onClick={() => setActiveSong(index)}
              className={`song-row ${activeSong === index ? "song-row-active" : ""}`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-champagne">
                <Music2 size={19} />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block truncate text-base font-semibold text-white">{song.name}</span>
                <span className="block truncate text-sm text-white/58">{song.artist}</span>
                <span className="mt-2 block text-sm leading-6 text-white/66">{song.memory}</span>
              </span>
              <span className="text-sm text-champagne/80">{song.date}</span>
            </button>
          ))}
          <div className="audio-player">
            <button className="grid h-11 w-11 place-items-center rounded-full bg-champagne text-black">
              <Pause size={17} fill="currentColor" />
            </button>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/12">
              <div className="h-full w-2/3 rounded-full bg-champagne" />
            </div>
            <span className="text-sm text-white/60">02:18</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineChapter() {
  return (
    <section className="scene px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <p data-cinema-reveal className="section-kicker">
          Bölüm 6
        </p>
        <h2 data-cinema-reveal className="section-title">
          Zaman Tüneli
        </h2>
        <div className="timeline mt-14">
          {timeline.map((event) => (
            <article key={event.title} data-cinema-reveal className="timeline-item">
              <span className="timeline-dot" />
              <p className="text-sm uppercase text-champagne/70">{event.date}</p>
              <h3 className="mt-2 font-serif text-4xl text-white">{event.title}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-white/66">{event.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsChapter() {
  return (
    <section className="scene bg-[#100b0d] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p data-cinema-reveal className="section-kicker">
          Bölüm 7
        </p>
        <h2 data-cinema-reveal className="section-title">
          Sayılarla Biz
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.article
              key={stat.label}
              data-cinema-reveal
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="stat-card"
            >
              <CalendarHeart className="text-blush" size={26} />
              <Counter target={stat.value} />
              <p className="mt-2 text-sm uppercase text-white/55">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LetterChapter() {
  return (
    <section className="scene grid min-h-screen place-items-center bg-black px-5 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p data-cinema-reveal className="section-kicker">
          Bölüm 8
        </p>
        <h2 data-cinema-reveal className="section-title">
          Bahar'a Mektup
        </h2>
        <div data-cinema-reveal className="letter-box mt-12">
          <p className="typewriter">
            Bahar, bazı hikayeler sessiz başlar ama kalpte çok büyük yer kaplar.
            Sen benim en güzel cümlem, en sakin limanım ve her gün yeniden iyi ki
            dediğim insansın. İlker.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalChapter() {
  return (
    <section className="scene star-scene relative grid min-h-screen place-items-center overflow-hidden px-5 py-28 text-center">
      <div className="stars" />
      <motion.div
        data-cinema-reveal
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <Heart className="mx-auto mb-8 text-blush heart-pulse" size={58} fill="currentColor" />
        <h2 className="font-serif text-5xl leading-tight text-white sm:text-7xl">
          İyi ki varsın Bahar ❤️
        </h2>
        <p className="mt-6 text-xl text-white/70">Bu hikaye burada bitmiyor.</p>
      </motion.div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const duration = 1300;

    const tick = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return <p className="mt-8 font-serif text-6xl text-white">{count}</p>;
}

function MemoryLightbox({ memory, onClose }: { memory: Memory | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 30 }}
            className="lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="h-[58vh] rounded-t-[inherit] bg-cover bg-center"
              style={{ backgroundImage: `url(${memory.image})` }}
            />
            <div className="p-6">
              <p className="text-sm uppercase text-champagne/70">Bahar ❤️ İlker</p>
              <h3 className="mt-2 font-serif text-4xl text-white">{memory.title}</h3>
              <p className="mt-3 text-white/68">{memory.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VideoLightbox({ video, onClose }: { video: VideoItem | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 30 }}
            className="lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="relative grid h-[64vh] place-items-center rounded-[inherit] bg-cover bg-center"
              style={{ backgroundImage: `url(${video.poster})` }}
            >
              <div className="absolute inset-0 rounded-[inherit] bg-black/45" />
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-white text-black shadow-glow">
                <Play size={30} fill="currentColor" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase text-champagne/75">Tam ekran arşiv</p>
                  <h3 className="mt-1 font-serif text-4xl text-white">{video.title}</h3>
                </div>
                <Maximize2 className="text-white/80" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
