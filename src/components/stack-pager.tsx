import type { CSSProperties, ComponentType } from "react";
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

type StackLogo = {
  label: string;
  color: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
};

const stackLogos: StackLogo[] = [
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Shadcn/UI", Icon: SiShadcnui, color: "#FFFFFF" },
  { label: "PHP", Icon: SiPhp, color: "#777BB4" },
  { label: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { label: "Vite", Icon: SiVite, color: "#646CFF" },
  { label: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
  { label: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { label: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { label: "Github Copilot", Icon: SiGithubcopilot, color: "#F2F2F2" },
];

export function StackPager() {
  const [page, setPage] = useState(0);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const onResize = () => {
      setColumns(window.innerWidth < 640 ? 2 : 3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const itemsPerPage = columns * 4;
  const totalPages = Math.max(1, Math.ceil(stackLogos.length / itemsPerPage));

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(totalPages - 1);
    }
  }, [page, totalPages]);

  const visibleItems = useMemo(() => {
    const start = page * itemsPerPage;
    return stackLogos.slice(start, start + itemsPerPage);
  }, [itemsPerPage, page]);

  const prevPage = () =>
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);

  return (
    <div className="mt-4">
      <style>{`
        @keyframes dot-slide-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes dot-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        
        .dot-item {
          animation: dot-slide-in 0.3s ease-out;
        }
        
        .dot-active {
          animation: dot-pulse 0.6s ease-in-out;
        }
      `}</style>

      <div
        className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-3"}`}
      >
        {visibleItems.map(({ label, Icon, color }) => (
          <div
            key={label}
            className="stack-icon h-auto min-h-16 flex-col gap-1 py-3"
          >
            <Icon className="text-lg" style={{ color }} />
            <span className="text-[11px] text-muted">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prevPage}
          className="icon-btn h-8 w-8"
          aria-label="Previous stack page"
        >
          <FaChevronLeft className="text-xs" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={`stack-dot-${idx}`}
              type="button"
              onClick={() => setPage(idx)}
              aria-label={`Go to stack page ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-border transition-all duration-300 dot-item ${
                idx === page
                  ? "bg-foreground dot-active"
                  : "bg-transparent hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextPage}
          className="icon-btn h-8 w-8"
          aria-label="Next stack page"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );
}
