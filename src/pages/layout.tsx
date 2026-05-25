import PixelSnow from "@/components/PixelSnow";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-background text-foreground">
      {/* <PixelSnow
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      /> */}
      {children}
    </div>
  );
}
