import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    slug: "technokids-the-vault",
    title: "TECHNOKIDS: THE VAULT",
    date: "2026-07-18T22:00:00",
    venue: "The Bunker",
    city: "Las Vegas",
    description:
      "Unfiltered. Underground. No phones, no judgement, just the room and the sound.",
    lineup: ["DJ NOVA", "KICKDRUM", "VELVET STATIC"],
    ccoverImage: "https://placehold.co/600x800/0A0A0A/E10F1F?text=TECHNOKIDS",
    ticketUrl: "#",
    status: "upcoming",
    tags: ["techno", "underground"],
  },
  {
    id: "2",
    slug: "pride-rave-2026",
    title: "PRIDE RAVE 2026",
    date: "2026-08-02T21:00:00",
    venue: "Warehouse 7",
    city: "Las Vegas",
    description: "Our biggest night of the year. Community first, always.",
    lineup: ["HAUS OF ECHO", "GLITTERPUNK", "DJ NOVA"],
    coverImage: "https://placehold.co/600x800/0A0A0A/E10F1F?text=TECHNOKIDS",
    ticketUrl: "#",
    status: "upcoming",
    tags: ["pride", "techno"],
  },
];
