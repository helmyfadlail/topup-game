import { Background, Container, Img } from "@/components/ui";

import FilterOrder from "./filter-order";

export default function OrderHistory() {
  return (
    <section className="overflow-x-hidden">
      <Container className="py-8 space-y-8">
        <Background src="/images/ml-banner.webp" className="items-center px-4 sm:px-8 md:px-10 lg:px-16 min-h-200 sm:min-h-300 bg-dark/30" parentClassName="rounded-2xl">
          <div className="flex items-center gap-4 sm:gap-8 z-1">
            <span className="p-2 sm:p-4 rounded-2xl bg-light/80">
              <Img src="/icons/track.svg" alt="icon track" className="size-16 sm:size-20 md:size-24 lg:size-28" />
            </span>
            <div className="space-y-2 sm:space-y-4 text-dark">
              <p className="px-2 py-1 text-xs font-semibold rounded-lg sm:text-sm md:text-base w-max bg-light/80">maniac-game.com</p>
              <p className="pl-1 text-2xl font-semibold md:text-3xl lg:text-4xl text-light">Tracks Orders</p>
            </div>
          </div>
        </Background>
        <FilterOrder />
      </Container>
    </section>
  );
}
