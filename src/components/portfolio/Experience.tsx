import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Flutter Developer ,Web Developer , UI/UX Designer",
    org: "Training",
    period: "2023 — 2024",
    bullets: [
      "Developed mobile applications using Flutter and Dart",
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Designed clean and user-friendly UI/UX for mobile and web apps",
      "Created interfaces that are simple, responsive, and easy to use",
      "Learned best practices for writing clean and maintainable code",
    ],
  },
  {
    role: "Flutter Developer",
    org: "Internship",
    period: "2025 — 2026",
    bullets: [
      "Developed mobile applications using Flutter and Dart",
      "Built responsive and user-friendly mobile UI designs",
      "Integrated REST APIs to fetch and display data in apps",
      "Tested applications and fixed bugs to improve stability",
      "Worked with backend APIs for data management",
    ],
  },
];

const education = [
  {
    role: "VIHEASOUR Primary School , VIHEASOUR Secondary School , ROTA High School",
    org: "Studied",
    period: "2016 — 2022",
    bullets: [
      "2016 : Graduated Primary School at VIHEASOUR Primary School",
      "2019 : Graduated Secondary School at VIHEASOUR Secondary School",
      "2022  : Graduated High School at  ROTA High School",
    ],
  },
  {
    role: "NORTON UNIVERSITY",
    org: "Currently studying",
    period: "2022 — Present",
    bullets: ["Fourth-year student in Semester II, specializing in (Software Development) at NORTON UNIVERSITY."],
  },
];

function Timeline({ items, Icon }: { items: typeof experience; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-accent-cyan before:to-transparent">
      {items.map((it, i) => (
        <div key={i} className="reveal relative pl-14">
          <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Icon className="h-5 w-5" />
          </div>
          <div className="glass rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-display text-lg font-semibold">{it.role}</h4>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {it.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{it.org}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {it.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary">JOURNEY</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="reveal mb-8 font-display text-2xl font-semibold">Work Experience</h3>
            <Timeline items={experience} Icon={Briefcase} />
          </div>
          <div>
            <h3 className="reveal mb-8 font-display text-2xl font-semibold">Education</h3>
            <Timeline items={education} Icon={GraduationCap} />
          </div>
        </div>
      </div>
    </section>
  );
}
