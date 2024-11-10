import { Background, Container, Img } from "@/components/ui";
import { formatCurrency } from "@/utils";
import { CiSearch } from "react-icons/ci";

export default function OrderHistory() {
  return (
    <section className="overflow-x-hidden">
      <Container className="pt-8 space-y-8">
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
        <div className="p-4 pb-8 space-y-4 rounded-t-lg lg:p-6 xl:p-8 md:rounded-lg bg-background md:pb-8">
          <div className="relative flex overflow-hidden rounded-lg">
            <i className="absolute left-2 sm:left-2.5 top-2 sm:top-3">
              <CiSearch className="size-5 lg:size-6" />
            </i>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Input your invoice number"
              className="w-full py-2.5 lg:py-4 pr-4 text-xs outline-none lg:text-sm ps-8 sm:ps-10 rounded-s-lg bg-light/10"
            />
            <button className="hidden btn-light rounded-e-xl sm:block">Search</button>
          </div>
          <p className="text-xs text-light/50">
            Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan? harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu dapat menghubungi kami via{" "}
            <a href="/" className="duration-300 text-light hover:text-light/80 hover:underline">
              Whatsapp
            </a>
          </p>
        </div>
        <div className="space-y-4 text-light min-h-500">
          <h4 className="text-2xl font-semibold">Order History</h4>
          <div className="flex flex-col items-center justify-center gap-2 py-16">
            <Img src="/images/empty.webp" alt="icon empty data" className="w-64 h-52 sm:h-56 md:h-60 sm:w-72 md:w-80" cover />
            <p className="text-sm font-semibold text-center sm:text-base">Produk belum bisa ditampilkan, silakan isi nomor HP terlebih dahulu</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between p-4 rounded-md gap-y-8 sm:gap-8 bg-background">
              <Img src="/images/ml.webp" alt="icon games" className="mr-4 rounded-lg size-10" />
              <div className="flex-grow space-y-1 min-w-36 sm:min-w-40">
                <p className="text-xs sm:text-sm text-light/50">Invoice Number</p>
                <p className="text-xs sm:text-sm md:text-base">ML-1691549057</p>
              </div>
              <div className="space-y-1 min-w-36 sm:min-w-40">
                <p className="text-xs sm:text-sm text-light/50">Product Price</p>
                <p className="text-xs sm:text-sm md:text-base">Rp {formatCurrency(3056113, "decimal")},-</p>
              </div>
              <div className="space-y-1 min-w-36 sm:min-w-40">
                <p className="text-xs sm:text-sm text-light/50">Payment Method</p>
                <p className="text-xs sm:text-sm md:text-base">Qris</p>
              </div>
              <div className="space-y-1 min-w-36 sm:min-w-40">
                <p className="text-xs sm:text-sm text-light/50">Date</p>
                <p className="text-xs sm:text-sm md:text-base">14 Agustus 2023, 14:08</p>
              </div>
              <div className="min-w-36 sm:min-w-40">
                <span className="px-4 py-2 rounded-lg text-green/70 bg-green/20 w-max">Success</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
