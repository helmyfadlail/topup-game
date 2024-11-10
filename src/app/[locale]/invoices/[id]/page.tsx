import Detail from "./detail";
import Payment from "./payment";

import { Container } from "@/components/ui";

export default function InvoicesDetailPage() {
  return (
    <section className="overflow-x-hidden">
      <Container className="grid w-full grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
        <Payment />
        <Detail />
      </Container>
    </section>
  );
}
