import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Poppins, Space_Grotesk } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import { Footer, Header } from "@/components";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maniac Game",
  description: "This is official top up game by Maniac Game",
  icons: {
    icon: "/images/ml.webp",
  },
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Toaster position="bottom-center" />
          <Header className={space_grotesk.className} />
          <main className={`mt-20 sm:mt-36 ${poppins.className}`}>{children}</main>
          <Footer className={space_grotesk.className} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
