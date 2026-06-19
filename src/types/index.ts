export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  description: string;
  lineup: string[];
  coverImage: string;
  ticketUrl: string;
  status: "upcoming" | "sold-out" | "past";
  tags: string[];
}

export interface RecapItem {
  id: string;
  slug: string;
  eventId: string;
  title: string;
  date: string;
  coverImage: string;
  gallery: string[];
  body: string;
  photographer?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  readTime: number;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  role: "resident" | "guest" | "crew";
  discipline: string;
  bio: string;
  portrait: string;
  links: { label: string; url: string }[];
  eventsPlayed: string[];
}
