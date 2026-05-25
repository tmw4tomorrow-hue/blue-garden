export const BG_LAKE =
  "https://images.unsplash.com/photo-1522673607200-164d1b6fce49?w=1920&q=85&auto=format&fit=crop";

export const BG_GARDEN =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=85&auto=format&fit=crop";

export const BG_MOODY =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=85&auto=format&fit=crop";

export type GalleryPiece = {
  id: string;
  src: string;
  alt: string;
  rotate: string;
  delay?: number;
};

export const polaroids: GalleryPiece[] = [
  {
    id: "p1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
    alt: "Ceremonia en jardín",
    rotate: "-7deg",
  },
  {
    id: "p2",
    src: "https://images.unsplash.com/photo-1465492759470-2f9fcb61244d?w=800&q=80&auto=format&fit=crop",
    alt: "Campo verde",
    rotate: "5deg",
    delay: 0.1,
  },
  {
    id: "p3",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
    alt: "Mesa al aire libre",
    rotate: "-4deg",
    delay: 0.2,
  },
  {
    id: "p4",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format&fit=crop",
    alt: "Mesa en jardín",
    rotate: "8deg",
    delay: 0.15,
  },
  {
    id: "p5",
    src: "https://images.unsplash.com/photo-1469334031218-e8a6862c1494?w=800&q=80&auto=format&fit=crop",
    alt: "Niebla en el jardín",
    rotate: "-6deg",
    delay: 0.25,
  },
  {
    id: "p6",
    src: "https://images.unsplash.com/photo-1478146896981-b808fe155b94?w=800&q=80&auto=format&fit=crop",
    alt: "Luz dorada",
    rotate: "4deg",
    delay: 0.3,
  },
];

export const lightboxSets: Record<
  string,
  { title: string; images: { src: string; alt: string }[] }
> = {
  swan: {
    title: "El jardín",
    images: [
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=85&auto=format&fit=crop",
        alt: "Lago al atardecer",
      },
      {
        src: "https://images.unsplash.com/photo-1469334031218-e8a6862c1494?w=1400&q=85&auto=format&fit=crop",
        alt: "Jardín con niebla",
      },
    ],
  },
  seal: {
    title: "La experiencia",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&auto=format&fit=crop",
        alt: "Celebración",
      },
    ],
  },
  story: {
    title: "Nuestra historia",
    images: [
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc731bf?w=1400&q=85&auto=format&fit=crop",
        alt: "Flores",
      },
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b0?w=1400&q=85&auto=format&fit=crop",
        alt: "Sendero",
      },
    ],
  },
};
