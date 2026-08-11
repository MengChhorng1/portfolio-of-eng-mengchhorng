import { ExternalLink, Github } from "lucide-react";
import Alumni from "@/assets/Poster of (Alumni Management System)1.png";
import CRUD_Operations from "@/assets/Poster of (Product CRUD Operations)1.png";
import System_Related_of_Customer from "@/assets/Poster of (System Related to Customer)1.png";
import ABA_Mobile_Bank from "@/assets/Poster of (ABA Mobile Bank).png";
import Enrollment_System from "@/assets/Poster of (Enrollment System).png";
import Product_Management from "@/assets/Poster of (Product Management).png";

const projects = [
  {
    title: "System Related to Customer",
    desc: "Friendly mobile flows designed for browsing products, placing orders, and booking support with ease.",
    stack: ["Flutter", "Dart", "PHP", "Laravel", "PostgreSQL"],
    img: System_Related_of_Customer,
    link: "https://github.com/MengChhorng1/flutter-customer-system.git",
  },
  
  {
    title: "Product CRUD Operations",
    desc: "Manage your inventory with powerful Create, Read, Update, and Delete workflows. Organized. Efficient. Intuitive.",
    stack: ["Flutter", "Dart", "Node js + Express js", "SQL Server"],
    img: CRUD_Operations,
    link: "https://github.com/MengChhorng1/flutter-product-CRUD.git",
  },
  {
    title: "Alumni Management System",
    desc: "Bridging alumni, student life, and community. Stay connected, informed, and inspired.",
    stack: ["Flutter", "Dart", ".NET","SQL Server"],
    img: Alumni,
    link: "https://github.com/MengChhorng1/alumni_management_system.git",
  },
  {
    title: "ABA Mobile Bank",
    desc: "Fast QR payments. Clear balance, complete control.",
    stack: ["Flutter", "Dart"],
    img: ABA_Mobile_Bank,
    link: "https://github.com/MengChhorng1/ABA-Project.git",
  },
  {
    title: "Enrollment System",
    desc: "A modern enrollment management platform build for educational institutions.",
    stack: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
    img: Enrollment_System,
    link: "https://github.com/MengChhorng1/project-enrollment-system.git",
  },
  {
    title: "Product Management",
    desc: "Browse products, manage users, and explore giveaway content in a sleek dark experience.",
    stack: ["Flutter", "Dart", "Fake API"],
    img: Product_Management,
    link: "https://github.com/MengChhorng1/Product-Management.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="blob h-80 w-80 bg-accent-pink/20 top-20 left-0" />
      <div className="container relative">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary">PORTFOLIO</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            A glimpse of recent work — mobile apps, dashboards, and web platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl glass shadow-card transition-smooth hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                <div className="absolute right-3 top-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a href={p.link} target="_blank" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-primary">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Live" className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
