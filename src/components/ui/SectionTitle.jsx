export default function SectionTitle({ index, title, subtitle }) {
  return (
    <div className="mb-14">

      {/* label pequeno tipo "01 / Sobre mim" */}
      <p className="text-xs tracking-[0.3em] text-accent uppercase mb-3">
        {index}
      </p>

      {/* título principal */}
      <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
        {title}
      </h2>

      {/* subtítulo opcional */}
      {subtitle && (
        <p className="text-muted mt-4 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}