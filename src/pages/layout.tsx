import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-background text-foreground">
      {children}
    </div>
  );
}
