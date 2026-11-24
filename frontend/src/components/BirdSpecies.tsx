function BirdSpecies() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
          MADÁRVILÁG
        </p>

        <h1 className="mt-4 font-display text-4xl font-semibold text-text-primary md:text-5xl">
          Ismerd meg a madárfajokat
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          quia ex ducimus, nihil repellat maiores aspernatur pariatur ratione
          provident laudantium velit quod voluptatum dolores mollitia error
          doloribus nemo. Mollitia, distinctio?
        </p>
        <div className="mt-8 max-w-xl">
          <input
            className="w-full rounded-card border border-sand bg-white px-5 py-4 text-sm text-text-primary outline-none transition-colors focus:border-sage"
            type="text"
            placeholder="Keress egy madárfajt..."
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary">
            Összes madár
          </button>
          <button className="rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary">
            Erdei madarak
          </button>
          <button className="rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary">
            Vízi madarak
          </button>
          <button className="rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary">
            Városi madarak
          </button>
          <button className="rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary">
            Ragadozó madarak
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}

export default BirdSpecies;
