/** A minimal browser-window chrome wrapping a product screenshot. */
export function BrowserFrame({
  src,
  alt,
  label,
  className = '',
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-card shadow-float ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        {label && (
          <span className="ml-3 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
            {label}
          </span>
        )}
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  );
}
