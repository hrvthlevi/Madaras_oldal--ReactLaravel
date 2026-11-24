function FeatureCards() {
  return (
    <section className="pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="rounded-card bg-white p-6 shadow-card">
          <h2 className="mb-3 font-display text-xl font-semibold">
            Madárfajok
          </h2>
          <p className="font-sans text-sm leading-6 text-text-secondary">
            Ismerd meg a különböző madárfajokat és azok jellemzőit.
          </p>
        </article>

        <article className="rounded-card bg-white p-6 shadow-card">
          <h2 className="mb-3 font-display text-xl font-semibold">
            Élőhelyek
          </h2>
          <p className="font-sans text-sm leading-6 text-text-secondary">
            Fedezd fel a madarak természetes élőhelyeit és környezetét.
          </p>
        </article>

        <article className="rounded-card bg-white p-6 shadow-card">
          <h2 className="mb-3 font-display text-xl font-semibold">
            Tudástár
          </h2>
          <p className="font-sans text-sm leading-6 text-text-secondary">
            Bővítsd tudásodat a madárvilágról szóló érdekes információkkal.
          </p>
        </article>
      </div>
    </section>
  )
}

export default FeatureCards