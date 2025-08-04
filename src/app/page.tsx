export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Elie Calvière</h1>
      <h2 className="text-xl text-dark-600 mb-6">Développeur Logiciel</h2>
      <p className="text-md max-w-xl">
        Bienvenue sur mon portfolio. Vous y trouverez mes projets, mon parcours et mes compétences.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/about"
          className="text-dark-900 hover:text-white border border-dark-800 hover:bg-dark-900 focus:ring-4 focus:outline-none focus:ring-dark-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-dark-600 dark:text-dark-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-dark-800"
        >
          À propos
        </a>
        <a
          href="/projects"
          className="text-dark-900 hover:text-white border border-dark-800 hover:bg-dark-900 focus:ring-4 focus:outline-none focus:ring-dark-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-dark-600 dark:text-dark-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-dark-800"
        >
          Projets
        </a>
        <a
          href="/contact"
          className="text-dark-900 hover:text-white border border-dark-800 hover:bg-dark-900 focus:ring-4 focus:outline-none focus:ring-dark-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-dark-600 dark:text-dark-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-dark-800"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
