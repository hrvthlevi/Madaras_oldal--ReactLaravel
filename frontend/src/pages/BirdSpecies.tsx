import { useState } from "react";
import BirdCard from "../components/BirdCard";

function BirdSpecies() {
  const birds = [
    {
      id: 1,
      name: "Vörösbegy",
      latinName: "Erithacus rubecula",
      description:
        "A vörösbegy Európa egyik legismertebb énekesmadara, jellegzetes narancsvörös mellkasáról könnyen felismerhető.",
      image: "",
      category: "Erdei madarak",
    },
    {
      id: 2,
      name: "Széncinege",
      latinName: "Parus major",
      description:
        "A széncinege gyakori erdei és városi madár, amely könnyen felismerhető fekete fejéről és sárga hasáról.",
      image: "",
      category: "Erdei madarak",
    },
    {
      id: 3,
      name: "Fekete rigó",
      latinName: "Turdus merula",
      description:
        "A fekete rigó gyakori madár a kertekben és parkokban. A hím fekete tollazatú, sárga csőrű.",
      image: "",
      category: "Városi madarak",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Összes madár");
  const filteredBirds = birds.filter(
    (bird) =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "Összes madár" ||
        bird.category === selectedCategory),
  );
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("Összes madár")}
            className={
              selectedCategory === "Összes madár"
                ? "rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors"
                : "rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary"
            }
          >
            Összes madár
          </button>

          <button
            onClick={() => setSelectedCategory("Erdei madarak")}
            className={
              selectedCategory === "Erdei madarak"
                ? "rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors"
                : "rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary"
            }          >
            Erdei madarak
          </button>

          <button
            onClick={() => setSelectedCategory("Vízi madarak")}
            className={
              selectedCategory === "Vízi madarak"
                ? "rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors"
                : "rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary"
            }          >
            Vízi madarak
          </button>

          <button
            onClick={() => setSelectedCategory("Városi madarak")}
            className={
              selectedCategory === "Városi madarak"
                ? "rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors"
                : "rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary"
            }          >
            Városi madarak
          </button>

          <button
            onClick={() => setSelectedCategory("Ragadozó madarak")}
            className={
              selectedCategory === "Ragadozó madarak"
                ? "rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors"
                : "rounded-full border border-sand px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-sage hover:bg-mist hover:text-text-primary"
            }          >
            Ragadozó madarak
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-text-secondary">
            Összesen{" "}
            <span className="font-medium text-text-primary">
              {filteredBirds.length} madárfaj
            </span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBirds.length > 0 ? (
            filteredBirds.map((bird) => (
              <BirdCard
                key={bird.id}
                name={bird.name}
                latinName={bird.latinName}
                description={bird.description}
                image={bird.image}
                category={bird.category}
              />
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-text-secondary">
              Nem találtunk a keresésnek megfelelő madárfajt.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BirdSpecies;
