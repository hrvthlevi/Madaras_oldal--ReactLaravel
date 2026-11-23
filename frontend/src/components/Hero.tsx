function Hero() {
  return (
    <section className="rounded-section bg-mist px-8 py-16 md:px-12 md:py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
          Madaras projekt (nem vegleges cim)
        </p>

        <h1 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
          A természet világa
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deserunt repellendus nesciunt vitae, iusto ab sapiente molestias sequi! Exercitationem, provident. Sit labore, iusto sapiente repellendus esse ad quo sint incidunt.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/madarfajok"
            className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-moss"
          >
            Madarak felfedezése
          </a>

          <a
            href="/tudastar"
            className="rounded-full border border-sage px-6 py-3 text-sm font-medium transition-colors hover:bg-mist"
          >
            Tudj meg többet
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero