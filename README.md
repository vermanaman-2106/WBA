# WEDDINGS BY ARTISTIC - Photography Website

## 📖 About the Website

**WEDDINGS BY ARTISTIC** is a premium wedding photography website that showcases the artistry and expertise of a professional wedding photographer. The website serves as a digital portfolio, allowing potential clients to explore stunning wedding photography work, learn about the photographer's background, and easily get in touch for consultations.

Built with cutting-edge web technologies, this website combines elegant design with powerful content management capabilities. The site features a sophisticated white, beige, and soft gold color scheme that reflects luxury and timeless elegance—perfect for a high-end wedding photography business.

### Key Highlights:
- **Portfolio Showcase**: A dynamic gallery that displays wedding photography work organized by categories (Weddings, Pre-Weddings, Destination weddings), making it easy for visitors to find the style that resonates with them
- **Content Management**: Powered by Sanity CMS, allowing seamless updates to the portfolio without touching code—simply upload new images or videos through the Sanity Studio interface
- **Professional Presentation**: Every page is designed to reflect the quality and attention to detail that clients can expect in their wedding photography
- **User Experience**: Smooth animations, responsive design, and intuitive navigation ensure visitors have an engaging experience across all devices

The website is designed to convert visitors into clients by showcasing the photographer's best work, building trust through testimonials, and making it easy to get in touch for bookings.

## 🎨 Features

- **Modern Luxury Design**: Clean, elegant white/beige/soft gold theme
- **Responsive Layout**: Fully responsive across all devices
- **Sanity CMS Integration**: Easy content management with auto-updating website
- **Portfolio Gallery**: Dynamic image and video gallery with category filtering
- **Smooth Animations**: Scroll-based reveals and hover effects
- **SEO Optimized**: Built with Next.js for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity
- **Fonts**: Playfair Display (headings), Poppins (body)
- **Build Tool**: Turbopack

## 📁 Project Structure

```
photographer/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── portfolio/         # Portfolio page (Sanity integration)
│   │   ├── contact/           # Contact page
│   │   ├── blog/              # Blog page
│   │   └── studio/            # Sanity Studio
│   ├── components/            # React components
│   │   ├── Navbar.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer component
│   └── sanity/               # Sanity CMS configuration
│       ├── lib/              # Sanity client and queries
│       ├── schemaTypes/      # Content schemas
│       └── env.ts           # Environment variables
├── public/                   # Static assets
├── sanity.config.js         # Sanity Studio configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd photographer
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-10-16
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## 📝 Content Management

### Sanity Studio
Access the content management interface at:
- **Local**: `http://localhost:3000/studio`
- **Deployed**: `https://myphotostudio.sanity.studio/`

### Adding Content

#### Gallery Images
1. Go to Sanity Studio
2. Click "Gallery Image"
3. Click "Create"
4. Fill in:
   - **Title**: Image title
   - **Category**: Weddings, Pre-Weddings, Destination
   - **Media Type**: Image or Video
   - **Image/Video**: Upload your media
   - **Is Featured**: Toggle for homepage display
   - **Order**: Display order (1, 2, 3...)

#### Testimonials
1. Click "Testimonial"
2. Click "Create"
3. Fill in:
   - **Client Name**: Couple's names
   - **Feedback**: Testimonial text
   - **Rating**: 1-5 stars
   - **Is Featured**: Toggle for homepage display

## 🎨 Design System

### Colors
- **Background**: Pure White (#FFFFFF)
- **Foreground**: Dark Gray (#2D2D2D)
- **Accent**: Soft Gold (#D4AF37)

### Typography
- **Headings**: Playfair Display (luxury serif)
- **Body**: Poppins (clean sans-serif)

### Components
- **Hero Sections**: Full-height with video/image backgrounds
- **Gallery**: Masonry layout with hover effects
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover animations

## 🚀 Deployment

### Sanity Studio
```bash
npx sanity deploy
```

### Website (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Environment Variables for Production
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-10-16
```

## 📱 Pages

### Home Page (`/`)
- Hero section with video background
- About preview section
- Featured work gallery
- Testimonials section
- Call-to-action section

### About Page (`/about`)
- Personal story and background
- Awards and recognition
- Professional photography approach

### Portfolio Page (`/portfolio`)
- **Dynamic content from Sanity**
- Category filtering (All, Weddings, Pre-Weddings, Destination)
- Masonry gallery layout
- Image and video support

### Contact Page (`/contact`)
- Contact form
- Social media links
- Location information

### Blog Page (`/blog`)
- Blog post listings
- Article previews
- Reading time estimates

## 🔧 Customization

### Adding New Content Types
1. Create schema in `src/sanity/schemaTypes/`
2. Add to `src/sanity/schemaTypes/index.ts`
3. Create queries in `src/sanity/lib/queries.ts`
4. Add data fetching functions in `src/sanity/lib/data.ts`

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Update CSS variables for theme colors

### Adding New Pages
1. Create new folder in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/Navbar.tsx`

## 🐛 Troubleshooting

### Common Issues

#### Sanity Studio Not Loading
- Check environment variables in `.env.local`
- Verify CORS origins in Sanity project settings
- Ensure project ID and dataset are correct

#### Images Not Loading
- Check `next.config.ts` for Sanity CDN configuration
- Verify image URLs in Sanity Studio
- Check browser console for errors

#### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

## 📞 Support

For issues and questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Sanity documentation](https://www.sanity.io/docs)
- Check [Tailwind CSS docs](https://tailwindcss.com/docs)

## 📄 License

This project is private and proprietary to WEDDINGS BY ARTISTIC.

---

**Built with ❤️ for capturing beautiful moments**