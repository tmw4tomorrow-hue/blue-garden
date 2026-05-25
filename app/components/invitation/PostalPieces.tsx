"use client";

import Image from "next/image";

type PieceProps = {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

export function SwanPiece({ onClick, className = "", style }: PieceProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`postal-tap group relative z-30 ${className}`}
      aria-label="Ver el jardín"
    >
      <svg
        viewBox="0 0 200 140"
        className="h-28 w-40 drop-shadow-lg transition group-hover:drop-shadow-2xl sm:h-36 sm:w-52"
        aria-hidden
      >
        <ellipse cx="100" cy="118" rx="72" ry="14" fill="rgba(0,0,0,0.08)" />
        <path
          fill="#5c6b58"
          d="M28 95c18-42 52-58 88-52 22 4 38 18 48 38 6 12 8 26 6 38l-12-4c-8-28-34-44-62-38-20 4-36 18-44 36l-24-18z"
        />
        <path
          fill="#6d7d68"
          d="M108 42c28 0 48 16 56 38 4 10 4 22 0 32-14-6-24-18-28-32-4-18-18-32-38-38-8-2-16-2-24 0 12-8 22-12 34-0z"
        />
        <path fill="#f5f0e8" d="M142 58c6 8 8 18 6 28-8-4-14-12-16-22 2-4 6-6 10-6z" />
        <ellipse cx="132" cy="52" rx="3" ry="4" fill="#2c2a26" />
      </svg>
      <span className="absolute -bottom-1 left-1/2 w-max -translate-x-1/2 font-serif text-[11px] italic text-[#f5f0e8] drop-shadow-md sm:text-xs">
        detalles · pulsa
      </span>
    </button>
  );
}

export function WaxSeal({ onClick, className = "", style }: PieceProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`postal-tap z-30 ${className}`}
      aria-label="La experiencia"
    >
      <svg viewBox="0 0 88 88" className="h-16 w-16 drop-shadow-md sm:h-20 sm:w-20" aria-hidden>
        <circle cx="44" cy="44" r="40" fill="#8b7355" />
        <circle cx="44" cy="44" r="34" fill="#a08058" />
        <circle
          cx="44"
          cy="44"
          r="28"
          fill="none"
          stroke="#6b5238"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <text
          x="44"
          y="48"
          textAnchor="middle"
          fill="#f5e6c8"
          fontSize="9"
          fontFamily="Georgia, serif"
        >
          BG
        </text>
      </svg>
    </button>
  );
}

export function ScallopedMonogram({ className = "" }: { className?: string }) {
  return (
    <div className={`z-20 ${className}`}>
      <div className="scalloped-badge relative px-10 py-8 text-center shadow-lg">
        <p className="font-serif text-3xl font-light italic text-[#3d4a3a] sm:text-4xl">
          Blue Garden
        </p>
        <div className="mx-auto mt-2 h-px w-12 bg-[#8b9a82]/50" />
      </div>
    </div>
  );
}

export function EnvelopeFlap({ onClick, className = "", style }: PieceProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`postal-tap z-30 ${className}`}
      aria-label="Ir a reservar"
    >
      <svg viewBox="0 0 160 100" className="h-20 w-32 drop-shadow-md sm:h-24 sm:w-40" aria-hidden>
        <rect x="8" y="28" width="144" height="64" rx="2" fill="#f0ebe3" />
        <path d="M8 28 L80 62 L152 28" fill="#e0d9ce" stroke="#d4ccc0" strokeWidth="0.5" />
        <text
          x="80"
          y="72"
          textAnchor="middle"
          fill="#6b6560"
          fontSize="11"
          fontFamily="Georgia, serif"
          letterSpacing="3"
        >
          RSVP
        </text>
      </svg>
    </button>
  );
}

export function PolaroidCard({
  src,
  alt,
  onClick,
  className = "",
  caption,
  style,
  floating = true,
}: PieceProps & { src: string; alt: string; caption?: string; floating?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`postal-tap polaroid z-20 ${floating ? "absolute" : "relative"} ${className}`}
      aria-label={alt}
    >
      <div className="polaroid-inner">
        <div className="relative aspect-[4/5] w-28 overflow-hidden bg-[#1a1a1a] sm:w-36">
          <Image src={src} alt={alt} fill className="dream-image object-cover" sizes="150px" />
        </div>
        {caption && (
          <p className="mt-2 text-center font-serif text-[10px] italic text-[#4a4540]/80">
            {caption}
          </p>
        )}
      </div>
    </button>
  );
}

export function RibbonTag({
  label,
  onClick,
  className = "",
  style,
}: PieceProps & { label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`postal-tap ribbon-tag z-20 ${className}`}
    >
      <span className="font-serif text-sm italic text-[#f5f0e8] sm:text-base">{label}</span>
    </button>
  );
}

export function LaceDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`lace-divider ${className}`}
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        d="M0 12 Q25 2 50 12 T100 12 T150 12 T200 12 T250 12 T300 12 T350 12 T400 12"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
        d="M0 14 Q30 22 60 14 T120 14 T180 14 T240 14 T300 14 T360 14 T400 14"
      />
    </svg>
  );
}

export function PostageStamp({
  src,
  alt,
  onClick,
  className = "",
  style,
}: PieceProps & { src: string; alt: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`postal-tap postage-stamp z-15 ${className}`}
    >
      <div className="relative h-16 w-14 overflow-hidden sm:h-20 sm:w-[4.5rem]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="80px" />
      </div>
      <span className="mt-1 block text-center text-[7px] tracking-widest text-[#5c5348]/60 uppercase">
        Garden
      </span>
    </button>
  );
}

export function OvalFrame({
  src,
  alt,
  onClick,
  className = "",
  style,
}: PieceProps & { src: string; alt: string }) {
  return (
    <button type="button" onClick={onClick} style={style} className={`postal-tap z-20 ${className}`}>
      <div className="oval-frame relative h-24 w-20 sm:h-32 sm:w-28">
        <div className="absolute -inset-1 rounded-[50%] border-2 border-[#c4a574]/60" />
        <div className="relative h-full w-full overflow-hidden rounded-[50%] shadow-inner">
          <Image src={src} alt={alt} fill className="dream-image object-cover" sizes="120px" />
        </div>
      </div>
    </button>
  );
}
