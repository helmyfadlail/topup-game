import { CountdownPayment, Img } from "@/components/ui";

const Payment = () => {
  return (
    <div className="space-y-4">
      <div className="bg-background py-8 px-12 rounded-lg text-center">
        <h4 className="font-semibold text-2xl mb-8">WAITING FOR PAYMENT</h4>
        <p className="text-light/50 mb-4 text-sm">Complete payment before time runs out</p>
        <CountdownPayment />
        <p className="text-light/50 mt-4 text-sm">So Your Order Doesn&apos;t Expire</p>
      </div>
      <div className="bg-background p-8 rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-sm p-2 rounded-lg border border-light/10">
          <Img src="/images/qris.webp" alt="icon payment" className="aspect-video w-48 rounded-md" cover />
          <div className="space-y-1 ">
            <p className="text-sm font-semibold">Scan QRIS</p>
            <p className="text-xs text-light/50">Scan via Shopee Pay, OVO, DANA, Gopay and LinkAja</p>
          </div>
        </div>
        <div className="px-4">
          <Img src="/images/qr.png" alt="icon payment" className="aspect-square w-full rounded-md" cover />
        </div>
        <button className="btn-light rounded-lg w-full">Download QR Code</button>
      </div>
    </div>
  );
};

export default Payment;
