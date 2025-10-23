export default function ScreenCenter({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#0a0b0c] text-white antialiased relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
