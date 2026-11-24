function BirdCard() {
  return (
    <article className="overflow-hidden rounded-card bg-white shadow-card transition-transform hover:-translate-y-1">
      <div className="h-56 overflow-hidden bg-mist">
        <img
          src=""
          alt="Vörösbegy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          Vörösbegy
        </h2>

        <h3 className="mt-1 text-sm italic text-text-secondary">
          nem tudom mi a latin neve
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nostrum totam mollitia dolores nesciunt deleniti officia
          adipisci excepturi suscipit similique voluptatum fugit
          dignissimos, eos nemo tenetur nihil natus a aut et.
        </p>
      </div>
    </article>
  )
}

export default BirdCard