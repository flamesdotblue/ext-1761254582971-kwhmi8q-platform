import { motion } from "framer-motion";

export default function Neon3DButton(props) {
  return (
    <motion.button
      {...props}
      whileHover={{ y: -2 }}
      whileTap={{ y: 1, scale: 0.995 }}
      className={[
        "group relative inline-flex items-center justify-center",
        "h-16 px-16 rounded-2xl select-none",
        "bg-neutral-950/90 border border-neutral-800/80",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_60px_-30px_rgba(16,185,129,0.55),0_8px_18px_-12px_rgba(0,0,0,0.7)]",
        "transition-transform duration-200 ease-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        "text-transparent" // visually no text to keep it \"only the button\"
      ].join(" ")}
    >
      {/* Top glossy highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
      >
        <span className="absolute inset-x-1 top-0 h-1/3 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent" />
      </span>

      {/* Inner subtle emerald rim */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl ring-1 ring-emerald-400/20"
      />

      {/* Neon under-glow hugging the border (primary request) */}
      <span
        aria-hidden
        className="absolute -inset-[2px] rounded-[1.15rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.0),rgba(16,185,129,0.45),rgba(16,185,129,0.0))] blur-md opacity-70 -z-10"
      />

      {/* Bottom rim neon line to emphasize \"under the border\" */}
      <span
        aria-hidden
        className="absolute left-3 right-3 -bottom-[6px] h-[10px] rounded-full bg-emerald-500/40 blur-md -z-10"
      />

      {/* Deep drop shadow to enhance 3D depth */}
      <span
        aria-hidden
        className="absolute left-6 right-6 -bottom-6 h-10 rounded-full bg-black/80 blur-xl opacity-70 -z-20"
      />

      {/* Subtle animated emerald sheen on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
      >
        <span className="absolute -inset-y-8 -left-1/2 w-[200%] rotate-6 bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.18),transparent)] translate-x-[-60%] group-hover:translate-x-[30%] transition-transform duration-700 ease-out" />
      </span>

      {/* Invisible label area for sizing, but text hidden via text-transparent above */}
      <span className="font-semibold tracking-wide text-base uppercase">
        Neon
      </span>
    </motion.button>
  );
}
