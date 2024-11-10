import Products from "./products";

import { Background, CardFlashSale, Container, CountdownTimer, Slider } from "@/components/ui";

import { ResponsePayload } from "@/types";

export default async function HomePage() {
  const response = await fetch("https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products");
  const products: ResponsePayload[] = await response.json();

  const banners = ["/images/banner-home-4.webp", "/images/banner-home-3.webp", "/images/banner-home-2.webp", "/images/banner-home-1.webp"];

  return (
    <section className="overflow-x-hidden">
      <Background src="/images/bg-hero.webp" className="flex-col bg-gradient-to-b from-transparent from-60% to-dark">
        <Slider images={banners} />
        <Container className="pt-2 sm:pt-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold sm:text-lg md:text-2xl lg:text-3xl">Starlight Mei 2024: Nolan “Fashion Mogul”</h4>
            <p className="text-xs sm:text-base md:text-lg">Segera dapatkan skin startlight Nolan “Fashion Mogul” dengan topup murah hanya di ManiacGame.</p>
          </div>
        </Container>
        <Container className="py-20 space-y-2 text-light">
          <CountdownTimer />
          <p className="text-xs sm:text-base md:text-lg">Segera dapatkan penawaran terbatas dari kami, jangan sampai ketinggalan!</p>
          <div className="flex items-center grid-cols-2 gap-4 pb-8 overflow-x-auto sm:grid md:grid-cols-3 lg:grid-cols-4 scrollbar">
            {Array.from({ length: 8 }, (_, index) => (
              <CardFlashSale key={index} />
            ))}
          </div>
        </Container>
        <div className="relative">
          <svg id="wave" viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(71, 63, 96, 1)" offset="0%"></stop>
                <stop stopColor="rgba(71, 63, 96, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,70L17.1,60.7C34.3,51,69,33,103,28C137.1,23,171,33,206,44.3C240,56,274,70,309,81.7C342.9,93,377,103,411,88.7C445.7,75,480,37,514,37.3C548.6,37,583,75,617,88.7C651.4,103,686,93,720,84C754.3,75,789,65,823,72.3C857.1,79,891,103,926,100.3C960,98,994,70,1029,49C1062.9,28,1097,14,1131,28C1165.7,42,1200,84,1234,86.3C1268.6,89,1303,51,1337,46.7C1371.4,42,1406,70,1440,84C1474.3,98,1509,98,1543,100.3C1577.1,103,1611,107,1646,98C1680,89,1714,65,1749,58.3C1782.9,51,1817,61,1851,53.7C1885.7,47,1920,23,1954,16.3C1988.6,9,2023,19,2057,18.7C2091.4,19,2126,9,2160,14C2194.3,19,2229,37,2263,53.7C2297.1,70,2331,84,2366,84C2400,84,2434,70,2451,63L2468.6,56L2468.6,140L2451.4,140C2434.3,140,2400,140,2366,140C2331.4,140,2297,140,2263,140C2228.6,140,2194,140,2160,140C2125.7,140,2091,140,2057,140C2022.9,140,1989,140,1954,140C1920,140,1886,140,1851,140C1817.1,140,1783,140,1749,140C1714.3,140,1680,140,1646,140C1611.4,140,1577,140,1543,140C1508.6,140,1474,140,1440,140C1405.7,140,1371,140,1337,140C1302.9,140,1269,140,1234,140C1200,140,1166,140,1131,140C1097.1,140,1063,140,1029,140C994.3,140,960,140,926,140C891.4,140,857,140,823,140C788.6,140,754,140,720,140C685.7,140,651,140,617,140C582.9,140,549,140,514,140C480,140,446,140,411,140C377.1,140,343,140,309,140C274.3,140,240,140,206,140C171.4,140,137,140,103,140C68.6,140,34,140,17,140L0,140Z"
            ></path>
          </svg>
        </div>
      </Background>
      <Container className="py-16 space-y-8">
        <Products data={products} />
      </Container>
    </section>
  );
}
