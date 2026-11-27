export type Bird = {
  name: string;
  latinName: string;
  description: string;
  image: string;
  category: string;
  slug: string;
};

export const birds: Bird[] = [
  {
    name: "Vörösbegy",
    latinName: "Erithacus rubecula",
    description:
      "A vörösbegy Európa egyik legismertebb énekesmadara, jellegzetes narancsvörös mellkasáról könnyen felismerhető.",
    image: "",
    category: "Erdei madarak",
    slug: "vorosbegy",
  },
  {
    name: "Széncinege",
    latinName: "Parus major",
    description:
      "A széncinege gyakori erdei és városi madár, amely könnyen felismerhető fekete fejéről és sárga hasáról.",
    image: "",
    category: "Erdei madarak",
    slug: "szencinege",
  },
  {
    name: "Fekete rigó",
    latinName: "Turdus merula",
    description:
      "A fekete rigó gyakori madár a kertekben és parkokban. A hím fekete tollazatú, sárga csőrű.",
    image: "",
    category: "Városi madarak",
    slug: "fekete-rigo",
  },
];