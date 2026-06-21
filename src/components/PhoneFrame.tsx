/** A minimal phone mockup wrapping a mobile app screenshot. */
export function PhoneFrame({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[240px] rounded-[2.2rem] border border-border bg-card p-2 shadow-float ${className}`}
    >
      {/* notch */}
      <span className="absolute left-1/2 top-3 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-border" />
      <img src={src} alt={alt} className="block w-full rounded-[1.6rem]" loading="lazy" />
    </div>
  );
}
