/**
 * The TwentyEleven logo — text based.
 * "twenty" in Pacifico, "eleven" in Nunito.
 */
export function Logo({
  tone = 'brand',
  className = '',
}: {
  tone?: 'brand' | 'light' | 'dark';
  className?: string;
}) {
  const color = tone === 'light' ? 'text-white drop-shadow-sm' : tone === 'dark' ? 'text-foreground' : 'text-accent';
  return (
    <span className={`inline-flex items-baseline leading-none ${color} ${className}`}>
      <span style={{ fontFamily: '"Pacifico", cursive' }} className="text-[1.2em]">twenty</span>
      <span style={{ fontFamily: '"Nunito", sans-serif' }} className="text-[1em] font-extrabold tracking-tight -ml-0.5">eleven</span>
    </span>
  );
}
