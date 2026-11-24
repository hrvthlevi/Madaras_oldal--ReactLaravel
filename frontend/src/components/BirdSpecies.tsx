import BirdCard from "./BirdCard";

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
          <button className="rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors">
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

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-text-secondary">
            Összesen{" "}
            <span className="font-medium text-text-primary">3 madárfaj</span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BirdCard
            name="Vörösbegy"
            latinName="Erithacus rubecula"
            description="A vörösbegy Európa egyik legismertebb énekesmadara, jellegzetes narancsvörös mellkasáról könnyen felismerhető."
            image=""
          />

          <BirdCard
            name="Széncinege"
            latinName="Parus major"
            description="A széncinege gyakori erdei és városi madár, amely könnyen felismerhető fekete fejéről és sárga hasáról."
            image=""
          />

          <BirdCard
            name="Fekete rigó"
            latinName="Turdus merula"
            description="A fekete rigó gyakori madár a kertekben és parkokban. A hím fekete tollazatú, sárga csőrű."
            image=""
          />
        </div>
      </div>
    </section>
  );
}

export default BirdSpecies;
