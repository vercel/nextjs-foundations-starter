import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Vercel Academy Foundation - Web",
  description: "VAF Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto px-4 py-8">
        {children}
        {/* TODO: Convert to next/script (Section 4 Lesson 3) */}
        <script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
