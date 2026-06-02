import Image from "next/image";

type ExperienceCardProps = {
  organization: string;
  role: string;
  period: string;
  description: string;
  image: string;
  category?: string;
  index?: number;
};

export default function ExperienceCard({
  organization,
  role,
  period,
  description,
  image,
  category,
  index = 0,
}: ExperienceCardProps) {
  return (
    <article className={`group ${index === 1 ? "md:mt-16" : ""}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
        <Image
          src={image}
          alt={`${organization} - ${role}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end p-8">
          <div className="text-white">
            {category && (
              <p className="text-xs uppercase tracking-[0.25em] opacity-80">
                {category}
              </p>
            )}
            <p className="mt-2 font-serif text-2xl">{organization}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-sm font-medium tracking-wide text-black">
            {role}
          </h3>
          <span className="shrink-0 text-xs text-black/40">{period}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-black/60">
          {description}
        </p>
      </div>
    </article>
  );
}
