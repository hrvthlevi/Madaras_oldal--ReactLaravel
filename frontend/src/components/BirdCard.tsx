type BirdCardProps = {
  name: string;
  latinName: string;
  description: string;
  image: string;
  category: string;
};

function BirdCard({
  name,
  latinName,
  description,
  image,
  category,
}: BirdCardProps) {
  return (
    <article className="overflow-hidden rounded-card bg-white shadow-card transition-transform hover:-translate-y-1">
      <div className="h-56 overflow-hidden bg-mist">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          {name}
        </h2>
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-sage">
          {category}
        </span>

        <h3 className="mt-1 text-sm italic text-text-secondary">{latinName}</h3>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}

export default BirdCard;
