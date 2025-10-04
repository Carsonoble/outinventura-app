type Props = { params: { slug: string } };

export default function VenueDetail({ params }: Props) {
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">Venue: {params.slug}</h1>
      <p>Details page placeholder.</p>
    </main>
  );
}
