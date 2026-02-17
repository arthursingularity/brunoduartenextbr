import "./globals.css";
import Script from "next/script";
import { fbPixelId } from "@/lib/metaPixel";

const SITE_URL = "https://brunoduartepersonal.com.br";
const SITE_NAME = "Bruno Duarte Personal";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Bruno Duarte Personal | Consultoria Online para Mulheres 30+",
    template: "%s | Bruno Duarte Personal",
  },

  description:
    "Consultoria fitness online personalizada para mulheres com mais de 30 anos. Treino, alimentação e acompanhamento direto com Bruno Duarte — mais de 15 anos de experiência e 300+ alunas transformadas.",

  keywords: [
    "personal trainer online",
    "consultoria fitness feminina",
    "treino para mulheres acima de 30",
    "treino personalizado online",
    "personal trainer para mulheres",
    "emagrecer depois dos 30",
    "consultoria online fitness",
    "treino feminino 30+",
    "personal trainer Belo Horizonte",
    "Bruno Duarte personal",
    "treino musculação feminina",
    "plano de treino personalizado",
    "acompanhamento fitness online",
    "dieta para mulheres 30+",
    "treino em casa personalizado",
    "perda de peso mulheres",
    "definição muscular feminina",
    "consultoria esportiva online",
  ],

  authors: [{ name: "Bruno Duarte", url: SITE_URL }],
  creator: "Bruno Duarte",
  publisher: "Bruno Duarte",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Bruno Duarte Personal | Consultoria Online para Mulheres 30+",
    description:
      "Transforme seu corpo depois dos 30 com treino personalizado, orientação alimentar e acompanhamento direto. Mais de 300 alunas transformadas.",
    images: [
      {
        url: "/imagens/brunoduarte.jpg",
        width: 1200,
        height: 630,
        alt: "Bruno Duarte - Personal Trainer Especialista em Mulheres 30+",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bruno Duarte Personal | Consultoria Online para Mulheres 30+",
    description:
      "Transforme seu corpo depois dos 30 com treino personalizado e acompanhamento direto. 300+ alunas transformadas.",
    images: ["/imagens/brunoduarte.jpg"],
    creator: "@brunoduartepersonal",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/imagens/logo.png",
  },

  category: "fitness",

  other: {
    "google-site-verification": "",
    "theme-color": "#0a0a0a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body>
        {children}

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${fbPixelId}');
              fbq('track', 'PageView');
              fbq("track", "ViewContent");
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}