import { Img } from "@/components/ui";
import { formatCurrency } from "@/utils";
import { HiOutlineStar, HiStar } from "react-icons/hi2";
import { PiCaretRightBold, PiReceiptBold } from "react-icons/pi";

import { RiCustomerService2Fill, RiFileCopy2Line } from "react-icons/ri";

const DetailText = ({ desc, value }: { desc: string; value: string }) => {
  return (
    <div className="flex flex-row justify-between w-full gap-1 md:flex-col text-light">
      <p className="text-sm text-light/50">{desc}</p>
      <p className="text-sm sm:text-base">{value}</p>
    </div>
  );
};

const Detail = ({ status = "pending" }) => {
  const STATUS_SUCCESS = "success";
  return (
    <div className="w-full space-y-4 lg:col-span-2">
      <div className="w-full overflow-hidden rounded-lg bg-background">
        {status === STATUS_SUCCESS ? (
          <div className="flex flex-col justify-between gap-8 p-8 lg:items-center lg:flex-row bg-green/10">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="p-2 bg-green rounded-xl">
                <PiReceiptBold size={24} />
              </span>
              <div className="space-y-1">
                <p className="text-xs text-light/50">Order Number</p>
                <p className="flex items-center gap-1 text-sm font-semibold">
                  <p className="line-clamp-1">ML-1691549057-VLMEW1WN0FA6MIG</p>
                  <RiFileCopy2Line className="text-light/50 size-5 min-w-5" />
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="py-2.5 px-6 text-sm font-semibold bg-green rounded-2xl w-full">Order Successfully</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-8 lg:items-center lg:flex-row lg:gap-8 xl:gap-12 lg:bg-light/10 lg:py-4 whitespace-nowrap">
            <div className="space-y-2">
              <p className="text-xs text-light/50">Purchase Date</p>
              <p className="text-sm font-semibold">08/09/2023</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-light/50">Order Number</p>
              <p className="flex items-center gap-1 text-sm font-semibold">
                ML-1691549057-VLMEW1WN0FA6MIG <RiFileCopy2Line className="text-light/50" size={18} />
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-light/50"> Payment Method</p>
              <p className="text-sm font-semibold">QRIS Untuk Semua Pembayaran</p>
            </div>
          </div>
        )}
        <div className="border-t divide-y divide-light/10 border-light/10 lg:border-none">
          <div className="flex items-center gap-4 px-8 py-8">
            <Img src="/images/ml.webp" alt="icon payment" className="w-20 rounded-md aspect-square" cover />
            <div className="space-y-1">
              <p className="text-base font-semibold sm:text-lg">Mobile Legends Bang Bang</p>
              <p className="text-xs sm:text-sm text-light/50">Moonton</p>
            </div>
          </div>
          <div className="pt-8 pb-8 md:space-y-4 md:px-8">
            <h5 className="hidden font-semibold md:block">Detail</h5>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 md:pt-4">
              <h5 className="block px-8 pb-4 font-semibold md:hidden md:px-0">Detail ID Game</h5>
              <div className="w-full px-8 pb-8 space-y-4 md:pb-0 md:px-0">
                <DetailText desc="Item" value="5 Diamonds" />
                <DetailText desc="USER ID" value="924936253" />
                <DetailText desc="ZONE ID" value="12666" />
                <DetailText desc="Username" value="S1lverQuens" />
              </div>
              <h5 className="block px-8 pt-8 pb-4 font-semibold border-t md:px-0 md:hidden border-light/10">Detail Payment</h5>
              <div className="w-full px-8 space-y-4 md:px-0">
                <DetailText desc="Price" value={`Rp ${formatCurrency(1500, "decimal")},-`} />
                <DetailText desc="Fee" value={`Rp ${formatCurrency(150, "decimal")},-`} />
                <DetailText desc="Unique Code" value="300" />
              </div>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-2 px-8 py-4 ${status === STATUS_SUCCESS ? "bg-green text-light" : "bg-light text-dark"}`}>
          <h5 className="text-sm font-semibold sm:text-base">Total Payments</h5>
          <p className={`flex items-center gap-1 text-sm font-semibold ${status === STATUS_SUCCESS ? "text-light" : "text-green"}`}>
            Rp {formatCurrency(1950, "decimal")},- <RiFileCopy2Line size={18} className={`${status === STATUS_SUCCESS ? "text-light" : "text-dark"}`} />
          </p>
        </div>
      </div>

      {status === STATUS_SUCCESS ? (
        <>
          <div className="w-full px-4 py-8 space-y-4 overflow-hidden rounded-lg sm:space-y-8 sm:px-8 bg-background">
            <h4 className="text-lg font-semibold sm:text-xl md:text-2xl">Add a Review</h4>
            <div className="space-y-4 text-sm sm:text-base">
              <span className="flex items-center">
                Rating:
                {Array.from({ length: 4 }, (_, index) => (
                  <i key={index} className="pl-1">
                    <HiStar />
                  </i>
                ))}
                <i className="pl-1">
                  <HiOutlineStar />
                </i>
              </span>
              <textarea className="w-full h-24 px-4 py-2 text-sm border rounded-lg outline-none border-light/10 focus:border-light/30 bg-light/10" placeholder="Write a review" />
              <button className="w-full py-2.5 text-sm duration-300 border border-light rounded-xl hover:bg-light hover:text-dark">Create review</button>
            </div>
          </div>
          <button className="hidden w-full py-3 duration-300 border rounded-md sm:block border-light hover:bg-light hover:text-dark">Back to home</button>
        </>
      ) : (
        <div className="w-full px-4 py-4 overflow-hidden rounded-lg sm:px-8 bg-background">
          <div className="flex items-center justify-between w-full">
            <span className="flex items-center w-full gap-2 text-sm font-semibold">
              <RiCustomerService2Fill className="min-w-5 size-4 sm:size-5" />
              <p className="hidden text-light/50 lg:block">Already paid but the order has not arrived?</p>
              <p className="block text-light/50 lg:hidden">Needs help?</p>
              <a href="/" className="duration-300 hover:text-light/80 hover:underline">
                Contact us
              </a>
            </span>
            <button>
              <PiCaretRightBold />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
