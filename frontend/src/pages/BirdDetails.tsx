import { useParams } from "react-router-dom";

function BirdDetails() {
  const { slug } = useParams();

  return (
    <section className="py-12">
      <h1 className="font-display text-4xl font-semibold text-text-primary">
        Madár adatlap
      </h1>

      <p className="mt-4 text-text-secondary">
        Az aktuális madár slugja: {slug}
      </p>
    </section>
  );
}

export default BirdDetails;