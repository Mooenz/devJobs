import { useRouter } from '@/hooks/useRouter';

const Buscador = () => {
  const { navigateTo } = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.querySelector('input[type="search"]').value.trim();
    const url = searchTerm ? `/search?text=${encodeURIComponent(searchTerm)}` : '/search';
    navigateTo(url);
  }

  return (
    <form className="relative w-full max-w-2xl mx-auto dark:bg-slate-800 flex items-center bg-white rounded-lg shadow-lg p-2" onSubmit={ handleSearch } role="search">
      <span className="pl-3 pr-2 text-slate-400">
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
      </span>
      <label className="absolute top-0 text-[0px]" htmlFor="searchInput" name="searchInput">Buscar empleo</label>
      <input id="searchInput" type="search" className="w-full h-full bg-transparent outline-0 border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500" placeholder="Buscar empleos por título, habilidad o empresa"></input>
      <button className="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors" type="submit">Buscar</button>
    </form>
  )
}

export default Buscador