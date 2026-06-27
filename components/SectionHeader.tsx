type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`max-w-3xl reveal-up ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
            isDark ? "text-base-light" : "text-base-amethyst"
          } ${isDark ? "border-white/12 bg-white/8" : "border-base-deep/10 bg-white/70"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold leading-[1.05] md:text-5xl ${
          isDark ? "text-white" : "text-base-deep"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 text-base leading-7 md:text-lg ${
            isDark ? "text-base-light" : "text-base-lavender"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
