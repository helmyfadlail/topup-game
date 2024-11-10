import { Img } from "@/components/ui";
import { formatCurrency, formatFullDate } from "@/utils";
import React from "react";

const History = ({ payloadData }: { payloadData: any }) => {
  return (
    <div className="space-y-4 text-light min-h-500">
      <h4 className="text-2xl font-semibold">Order History</h4>
      {payloadData && payloadData.length < 1 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-16">
          <Img src="/images/empty.webp" alt="icon empty data" className="w-64 h-52 sm:h-56 md:h-60 sm:w-72 md:w-80" cover />
          <p className="text-sm font-semibold text-center sm:text-base">Produk belum bisa ditampilkan, silakan isi nomor HP terlebih dahulu</p>
        </div>
      ) : (
        <>
          {payloadData.map((data: any) => (
            <div className="space-y-2" key={data.invoicesId}>
              <div className="flex flex-wrap items-center justify-between p-4 rounded-md gap-y-8 sm:gap-8 bg-background">
                <Img src={data.productImage} alt="icon games" className="mr-4 rounded-lg size-10" />
                <div className="flex-grow space-y-1 min-w-36 sm:min-w-40">
                  <p className="text-xs sm:text-sm text-light/50">Invoice Number</p>
                  <p className="text-xs sm:text-sm md:text-base">{data.invoicesId}</p>
                </div>
                <div className="space-y-1 min-w-36 sm:min-w-40">
                  <p className="text-xs sm:text-sm text-light/50">Product Price</p>
                  <p className="text-xs sm:text-sm md:text-base">Rp {formatCurrency(data.items.priceDiscount + 1500, "decimal")},-</p>
                </div>
                <div className="space-y-1 min-w-36 sm:min-w-40">
                  <p className="text-xs sm:text-sm text-light/50">Payment Method</p>
                  <p className="text-xs sm:text-sm md:text-base">{data.paymentMethod}</p>
                </div>
                <div className="space-y-1 min-w-36 sm:min-w-40">
                  <p className="text-xs sm:text-sm text-light/50">Date</p>
                  <p className="text-xs sm:text-sm md:text-base">{formatFullDate(data.createdAt)}</p>
                </div>
                <div className="min-w-36 sm:min-w-40">
                  <span className={`px-4 py-2 rounded-lg w-max ${data.status === "success" ? "text-green/70 bg-green/20" : "text-red-700 bg-red-700/20"}`}>
                    {data.status === "success" ? "Success" : "Pending"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default History;
