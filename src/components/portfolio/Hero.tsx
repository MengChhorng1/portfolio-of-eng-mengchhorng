import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/chhorng_pic1.jpg";

const titles = ["Flutter Developer", "Frontend Developer", "UI / UX Designer"];

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));

          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));

          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((v) => v + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(titles);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Animated blobs */}
      <div className="blob h-72 w-72 bg-primary/40 top-20 -left-20 animate-blob-move" />
      <div
        className="blob h-96 w-96 bg-accent-cyan/30 top-40 right-0 animate-blob-move"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob h-64 w-64 bg-accent-pink/30 bottom-0 left-1/3 animate-blob-move"
        style={{ animationDelay: "-12s" }}
      />

      <div className="container relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Eng Mengchhorng</span>
          </h1>

          <div className="flex items-center gap-2 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-foreground">I'm a</span>
            <span className="gradient-text font-semibold">{typed}</span>
            <span className="inline-block h-6 w-[2px] bg-primary animate-blink" />
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I craft responsive, high-performance digital experiences — from
            elegant <b>Flutter mobile apps</b> to modern frontend websites using HTML,
            CSS, JavaScript, React, and Tailwind CSS. Passionate about clean
            code, intuitive UI/UX, and building products that are both visually
            impressive and user-friendly.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" variant="hero" asChild>
              <a
                href={`${import.meta.env.BASE_URL}MY CV (Eng Mengchhorng).pdf`}
                download
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>

            <Button
              size="lg"
              variant="glass"
              type="button"
              onClick={() => scrollToSection("contact")}
            >
              <Send className="h-4 w-4" /> Contact Me
            </Button>

            <Button
              size="lg"
              variant="ghost"
              type="button"
              onClick={() => scrollToSection("projects")}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {[
              {
                Icon: Github,
                href: "https://github.com/MengChhorng1",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/meng-chhorng-ab2a833b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:chhorng349@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-smooth hover:text-primary hover:shadow-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-spin-slow" />
          <div className="relative aspect-square rounded-[2.5rem] p-1 bg-gradient-primary shadow-elegant animate-float">
            <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-card">
              <img
                src={avatar}
                alt="Eng Mengchhorng portrait"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="absolute -left-4 top-10 glass rounded-2xl px-3 py-2 text-xs font-medium shadow-card animate-float"
              style={{ animationDelay: "-2s" }}
            >
              💙 Flutter Expert
            </div>

            <div
              className="absolute -right-4 bottom-16 glass rounded-2xl px-3 py-2 text-xs font-medium shadow-card animate-float"
              style={{ animationDelay: "-4s" }}
            >
              ✨ UI/UX Designer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
