import Search from "@/components/SearchInput"
import imgBg from "@/assets/images/background.webp"
const Hero = () => {
  return (
    <section className="relative min-h-[calc(100dvh-70px)] flex flex-col justify-center items-center text-center">
      <div className="relative z-10 px-3">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Encuentra el trabajo de tus sueños</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-300">Únete a la comunidad más grande desarrolladores y encuentra tu próxima oportunidad.</p>
        <Search />
      </div>

      <figure className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-linear-to-t before:from-dark/80 before:to-dark/60 before:pointer-events-none">
        <img src={ imgBg } className="object-cover w-full h-full" width={ 1920 } height={ 1281 } alt="background image hero principal" title="background image hero principal" />
      </figure>
    </section>
  )
}

export default Hero