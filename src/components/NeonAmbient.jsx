export default function NeonAmbient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_60%,rgba(16,185,129,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(25%_25%_at_50%_80%,rgba(16,185,129,0.25),transparent_60%)] blur-2xl" />
    </div>
  );
}
