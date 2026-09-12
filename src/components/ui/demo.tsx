import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface HeroProps {
  className?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
  buttonText?: string;
  email?: string;
  onButtonClick?: () => void;
}

export default function Hero({
  className,
  title = "Bespoke Web Apps, Mobile Apps & AI Systems",
  description = "Partner with us to design, engineer, and deploy high-performance digital products — from full-stack SaaS platforms to native mobile apps and autonomous AI agents.",
  backgroundImage = "/light-river-meadow.jpg",
  buttonText = "Start a Project",
  email = CONTACT_EMAIL,
  onButtonClick,
}: HeroProps) {
  const handleStartProject = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("Start a Project with TwentyEleven")}`;
    }
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[520px] sm:min-h-[580px] w-full items-center justify-center overflow-hidden rounded-3xl",
        className
      )}
    >
      <div className="absolute inset-0 z-10 size-full pointer-events-none">
        <div className="grid w-full h-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-4 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-1 h-full" />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
      </div>
      <div className="relative z-20 max-w-4xl px-6 py-16 text-center text-white">
        <h2 className="text-center font-display font-medium text-3xl text-white tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 mt-5 max-w-2xl text-center font-light text-base text-white/90 sm:text-lg md:text-xl">
          {description}
        </p>
        <Button
          onClick={handleStartProject}
          className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent"
        >
          <span className="rounded-full bg-[#e1fcad] px-6 py-3 font-medium text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            {buttonText}
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </Button>
      </div>
    </section>
  );
}
