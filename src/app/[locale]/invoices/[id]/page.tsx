import Invoice from "./invoice";

export default function InvoicesDetailPage({ params }: { params: { id: string } }) {
  return (
    <section className="overflow-x-hidden">
      <Invoice id={params.id} />
    </section>
  );
}
