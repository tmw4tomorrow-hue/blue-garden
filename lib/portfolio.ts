export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioCollection = {
  id: string;
  stickerLabel: string;
  stickerSub?: string;
  title: string;
  description: string;
  images: PortfolioImage[];
  position: string;
  rotate: string;
  accent: "sage" | "cream" | "gold" | "forest";
};

export const PORTFOLIO_BG =
  "https://images.unsplash.com/photo-1522673607200-164d1b6fce49?w=1920&q=80&auto=format&fit=crop";

export const collections: PortfolioCollection[] = [
  {
    id: "secret-garden",
    stickerLabel: "Jardín",
    stickerSub: "secreto",
    title: "Jardín secreto",
    description:
      "Espacios envueltos en niebla y luz dorada. Ceremonias íntimas entre cipreses y agua quieto.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1469334031218-e8a6862c1494?w=1200&q=80&auto=format&fit=crop",
        alt: "Jardín con niebla al amanecer",
      },
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b0?w=1200&q=80&auto=format&fit=crop",
        alt: "Sendero verde entre árboles",
      },
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop",
        alt: "Lago y jardín al atardecer",
      },
    ],
    position: "top-[8%] left-[6%] sm:left-[10%]",
    rotate: "-6deg",
    accent: "forest",
  },
  {
    id: "golden-hour",
    stickerLabel: "Hora",
    stickerSub: "dorada",
    title: "Hora dorada",
    description:
      "El instante en que el sol besa la mesa. Cenas largas, velas y silencio cinematográfico.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&auto=format&fit=crop",
        alt: "Celebración al aire libre al atardecer",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80&auto=format&fit=crop",
        alt: "Mesa elegante en exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1478146896981-b808fe155b94?w=1200&q=80&auto=format&fit=crop",
        alt: "Luces cálidas en evento nocturno",
      },
    ],
    position: "top-[18%] right-[5%] sm:right-[12%]",
    rotate: "5deg",
    accent: "gold",
  },
  {
    id: "wedding",
    stickerLabel: "Bodas",
    stickerSub: "etéreas",
    title: "Bodas etéreas",
    description:
      "Arcos florales, encaje de luz y composiciones editoriales. Cada frame, una portada de revista.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
        alt: "Ceremonia en jardín",
      },
      {
        src: "https://images.unsplash.com/photo-1465492759470-2f9fcb61244d?w=1200&q=80&auto=format&fit=crop",
        alt: "Pareja en campo verde",
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc731bf?w=1200&q=80&auto=format&fit=crop",
        alt: "Detalle floral de boda",
      },
    ],
    position: "top-[42%] left-[4%] sm:left-[8%]",
    rotate: "-4deg",
    accent: "cream",
  },
  {
    id: "corporate",
    stickerLabel: "Corporativo",
    stickerSub: "natural",
    title: "Corporativo natural",
    description:
      "Encuentros de marca en entornos vivos. Estructura impecable, atmósfera orgánica.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format&fit=crop",
        alt: "Evento corporativo al aire libre",
      },
      {
        src: "https://images.unsplash.com/photo-1505236858219-8359eb05e413?w=1200&q=80&auto=format&fit=crop",
        alt: "Espacio verde para networking",
      },
    ],
    position: "top-[38%] right-[6%] sm:right-[10%]",
    rotate: "7deg",
    accent: "sage",
  },
  {
    id: "private",
    stickerLabel: "Celebración",
    stickerSub: "privada",
    title: "Celebración privada",
    description:
      "Mesa larga bajo el cielo. Momentos suspendidos entre jardín y constelación.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80&auto=format&fit=crop",
        alt: "Mesa decorada en jardín",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
        alt: "Cena íntima al aire libre",
      },
      {
        src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80&auto=format&fit=crop",
        alt: "Detalle de copas y flores",
      },
    ],
    position: "bottom-[18%] left-[12%] sm:left-[22%]",
    rotate: "-8deg",
    accent: "sage",
  },
  {
    id: "reserve",
    stickerLabel: "Reserva",
    stickerSub: "tu fecha",
    title: "Reserva tu experiencia",
    description:
      "Cuéntanos tu visión. Diseñamos el escenario perfecto para tu próximo capítulo.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6fce49?w=1200&q=80&auto=format&fit=crop",
        alt: "Vista panorámica de jardín",
      },
    ],
    position: "bottom-[14%] right-[10%] sm:right-[18%]",
    rotate: "4deg",
    accent: "gold",
  },
];
