function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        {/* itt a logo */}
        <a href="/" className="font-display text-xl font-semibold">
          Madaras oldal
        </a>

        {/* Navigacio */}
        <div className="flex items-center gap-8">
          <a href="/" className="text-sm transition-colors hover:text-sage">
            Kezdőlap
          </a>

          <a
            href="/elohelyek"
            className="text-sm transition-colors hover:text-sage"
          >
            Élőhelyek
          </a>

          <a
            href="/tudastar"
            className="text-sm transition-colors hover:text-sage"
          >
            Tudástár
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
