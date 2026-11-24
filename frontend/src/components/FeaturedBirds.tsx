function FeaturedBirds() {
  return (
    <section className="py-12">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-display text-3xl font-semibold">
          Ismerd meg a madarakat
        </h2>
        <p className="mt-3 text-text-secondary leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos labore perspiciatis dicta dolores quidem quis quae similique unde ipsa eligendi obcaecati vel iure, aperiam laboriosam placeat molestias quibusdam cupiditate consequatur?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="overflow-hidden rounded-card bg-white shadow-card">
          <img
            src=""
            alt="Vörösbegy"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="mb-2 font-display text-xl font-semibold">
              Vörösbegy
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nostrum excepturi inventore molestias eum, fuga tenetur iusto exercitationem eius officiis unde atque architecto, aliquid, nisi blanditiis consequatur impedit ab non.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-card bg-white shadow-card">
          <img
            src=""
            alt="Széncinege"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="mb-2 font-display text-xl font-semibold">
              Széncinege
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nemo tenetur ipsum unde est id repudiandae ullam quas eaque fugit eius quod veniam recusandae quo maiores placeat odit, at delectus?
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-card bg-white shadow-card">
          <img
            src=""
            alt="Fekete rigó"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="mb-2 font-display text-xl font-semibold">
              Fekete rigó
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus debitis adipisci officiis vel sed quaerat quos omnis atque harum, quisquam neque ex, commodi libero impedit repudiandae nesciunt nostrum! Dicta?
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default FeaturedBirds