"use client";

import * as React from "react";

import { notFound, useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";

import { usePersistedState } from "@/hooks";

import Payment from "./payment";
import Detail from "./detail";

import { Container } from "@/components/ui";

const Invoice = ({ id }: { id: string }) => {
  const { payload, updatePayload } = usePersistedState();
  const invoice = payload?.find((item) => item.invoicesId === id);
  const invoiceIndex = payload?.findIndex((item) => item.invoicesId === id);
  const [loading, setLoading] = React.useState<boolean>(false);

  const query = useSearchParams();
  const { push } = useRouter();

  const status = query.get("status");

  const loadData = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();

    const timeout = setTimeout(() => {
      push(`/invoices/${invoice?.invoicesId}?status=success`);
      updatePayload(invoiceIndex, "status", "success");
      loadData();
    }, 5000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!invoice || !invoiceIndex) notFound();

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="loader size-16 after:size-16"></div>
        </div>
      ) : (
        <Container className="flex flex-col w-full gap-8 py-8 md:flex-row">
          <>{status === "pending" && <Payment id={id} />}</>
          <Detail id={id} />
        </Container>
      )}
    </>
  );
};

export default Invoice;
