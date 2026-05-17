export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-8 text-center">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center font-mono text-sm font-medium mb-3">
          <span className="text-muted-foreground">[</span>
          <span className="text-primary font-bold">N</span>
          ilu Paudel
          <span className="text-muted-foreground">]</span>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {year} Nilu Paudel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
