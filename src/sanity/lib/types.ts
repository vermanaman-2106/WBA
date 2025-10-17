// Sanity Types
export interface SanityImage {
  asset: {
    _id: string;
    url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
  alt?: string;
}

export interface GalleryImage {
  _id: string;
  title: string;
  description?: string;
  category: string;
  location?: string;
  date?: string;
  isFeatured: boolean;
  order?: number;
  mediaType: 'image' | 'video';
  image?: SanityImage;
  video?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  videoUrl?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  isFeatured: boolean;
  mainImage: SanityImage;
  categories?: string[];
  body?: any[];
}

export interface AboutContent {
  _id: string;
  title: string;
  biography: any[];
  specialties?: string[];
  awards?: string[];
  yearsExperience?: number;
  portraitImage: SanityImage;
}

export interface ContactInfo {
  _id: string;
  title: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  youtube?: string;
  pinterest?: string;
  address?: string;
  contactFormMessage?: string;
  ctaText?: string;
}

export interface Testimonial {
  _id: string;
  clientName: string;
  coupleName?: string;
  feedback: string;
  rating: number;
  eventDate?: string;
  eventLocation?: string;
  isFeatured: boolean;
  clientImage?: SanityImage;
}

export interface HeroContent {
  _id: string;
  page: string;
  title: string;
  subtitle?: string;
  backgroundMedia: {
    mediaType: 'image' | 'video';
    image?: SanityImage;
    videoFile?: {
      asset: {
        _id: string;
        url: string;
      };
    };
    videoUrl?: string;
  };
  ctaButtons?: Array<{
    text: string;
    link: string;
    style: 'primary' | 'secondary';
  }>;
  showScrollIndicator?: boolean;
}
