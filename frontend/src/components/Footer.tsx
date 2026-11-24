function Footer() {
  return (
    <footer className="mt-16 border-t border-sand bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              Madaras oldal
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
              Fedezd fel a madarak világát!
            </p>
          </div>

          {/* Navigáció */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
              Navigáció
            </h3>

            <ul className="space-y-3">
              <li className="text-sm text-text-secondary transition-colors hover:text-sage">
                Kezdőlap
              </li>
              <li className="text-sm text-text-secondary transition-colors hover:text-sage">
                Madárfajok
              </li>
              <li className="text-sm text-text-secondary transition-colors hover:text-sage">
                Élőhelyek
              </li>
              <li className="text-sm text-text-secondary transition-colors hover:text-sage">
                Tudástár
              </li>
            </ul>
          </div>

          {/* Információ */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
              Az oldalról
            </h3>

            <p className="text-sm leading-relaxed text-text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto laborum et suscipit asperiores fuga debitis saepe cum. Ad doloremque quibusdam nobis odit ut amet hic voluptatibus veniam sunt ullam.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-sand pt-6">
          <p className="text-center text-xs text-text-secondary">
            2026 Madaras oldal. Minden jog fenntartva.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer