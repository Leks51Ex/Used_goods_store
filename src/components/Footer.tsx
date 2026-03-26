export function Footer() {
  return (
    <footer className="bg-bg-secondary text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white !text-white text-left">
            У вас есть вопросы или нужна консультация?
          </h1>
        </div>

        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Имя"
            className="w-full sm:w-auto flex-1 bg-transparent border-b border-white/30 py-3 px-4 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-auto flex-1 bg-transparent border-b border-white/30 py-3 px-4 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full sm:w-auto flex-1 bg-transparent border-b border-white/30 py-3 px-4 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-bg-primary text-black rounded-4xl font-semibold hover:bg-accent-hover transition-colors whitespace-nowrap"
          >
            Оставить заявку
          </button>
        </form>

      
      </div>
    </footer>
  );
}
