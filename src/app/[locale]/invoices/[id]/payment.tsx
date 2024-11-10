"use client";

import { CountdownPayment, Img } from "@/components/ui";
import { usePersistedState } from "@/hooks";
import { mergedPaymentMethods } from "@/static";

const Payment = ({ id }: { id: string }) => {
  const { payload } = usePersistedState();
  const invoice = payload?.find((item) => item.invoicesId === id);

  const findPayment = mergedPaymentMethods.find((item) => item.name === invoice?.paymentMethod);

  return (
    <div className="space-y-4">
      <div className="px-12 py-8 text-center rounded-lg bg-background">
        <h4 className="mb-8 text-2xl font-semibold">WAITING FOR PAYMENT</h4>
        <p className="mb-4 text-sm text-light/50">Complete payment before time runs out</p>
        <CountdownPayment />
        <p className="mt-4 text-sm text-light/50">So Your Order Doesn&apos;t Expire</p>
      </div>
      <div className="p-8 space-y-4 rounded-lg bg-background">
        <div className="flex items-center gap-2 p-2 text-sm border rounded-lg border-light/10">
          <Img src={findPayment?.iconUrl || ""} alt="icon payment" className="w-48 rounded-md aspect-video max-w-48" cover />
          <div className="space-y-1 ">
            <p className="text-sm font-semibold">{findPayment?.name}</p>
            {findPayment?.name === "QRIS" ? (
              <p className="text-xs text-light/50">Scan via Shopee Pay, OVO, DANA, Gopay and LinkAja</p>
            ) : (
              <p className="text-xs text-light/50"> Transfer melalui metode {findPayment?.name}</p>
            )}
          </div>
        </div>
        {findPayment?.name === "QRIS" && (
          <>
            <div className="px-4">
              <Img src="/images/qr.png" alt="icon payment" className="w-full rounded-md aspect-square" cover />
            </div>
            <button className="w-full rounded-lg btn-light">Download QR Code</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
