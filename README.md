# Madárvilág – Madárismereti weboldal (nem végleges név!)

## A projektről

A projekt célja egy modern, letisztult és felhasználóbarát madárismereti weboldal létrehozása, amely segítségével a felhasználók különböző madárfajokat ismerhetnek meg, böngészhetnek közöttük, és később részletes információkat olvashatnak az egyes fajokról.

Az oldal kialakításánál fontos szempont a természetközeli megjelenés, az átlátható felület, valamint az egyszerű navigáció. A design visszafogott színvilágot, természetes árnyalatokat és modern komponensalapú felépítést használ.

## Főbb funkciók

- Madárfajok listázása
- Madárfajok keresése név alapján
- Madarak szűrése kategóriák szerint
- Különálló, dinamikus útvonalak kialakítása az egyes madárfajokhoz
- Központi adatforrás használata a madáradatok kezelésére

## Jelenleg elkészült fejlesztések

- React és TypeScript alapú frontend létrehozása
- Vite fejlesztői környezet beállítása
- Tailwind CSS használata a felület kialakításához
- React Router implementálása
- Madárfajokat megjelenítő listaoldal
- Keresési funkció
- Kategória szerinti szűrés
- `BirdCard` komponens létrehozása a madarak megjelenítéséhez
- Központi madáradatforrás létrehozása (`birds.ts`)
- `Bird` típus definiálása TypeScriptben
- Dinamikus útvonal kialakítása a madáradatlapokhoz (`/madarak/:slug`)
- `BirdDetails` oldal létrehozása

## Technológiák

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Tervezett backend

- Laravel
- MySQL

## Projektstruktúra

```text
madaras-oldal/
├── frontend/
│   └── src/
│       ├── components/
│       ├── data/
│       │   └── birds.ts
│       ├── layouts/
│       ├── pages/
│       │   ├── BirdSpecies.tsx
│       │   └── BirdDetails.tsx
│       ├── styles/
│       ├── types/
│       ├── App.tsx
│        └── main.tsx
├── backend/
└── README.md
```

## Tervezett fejlesztések

- A dinamikus madáradatlapok működésének megvalósítása
- Részletes információk megjelenítése az egyes madárfajokról
- További madárfajok hozzáadása
- Képek integrálása
- Laravel backend létrehozása
- MySQL adatbázis kialakítása
- Frontend és backend összekötése API-n keresztül
