import { useState } from 'react'
import Link from './Link';
import { useFavoriteStore } from '@/store/favoritesStore';
import { useAuthStore } from '@/store/authStore';

const JobButtonFavorite = ({ jobId }) => {
  const { isFavorite, toggleFavorite } = useFavoriteStore();
  const { isLoggedIn } = useAuthStore();

  const favorite = isFavorite(jobId);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(jobId);
  }

  const buttonText = favorite ? "❤️" : "🤍"
  const buttonClass = favorite ? "text-red-500" : "text-gray-500 hover:text-red-500"
  const disabled = isLoggedIn ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed";

  return (
    <button
      className={ `mt-4 text-sm font-semibold ${buttonClass} transition-colors ease-in-out duration-300 ${disabled}` }
      onClick={ handleFavoriteClick }
      disabled={ !isLoggedIn }
      aria-label={ favorite ? 'Remove from favorites' : 'Add to favorites' }
    >
      { buttonText }
    </button>
  )
}

const JobAppliedButton = ({ isApplied, handleApplyClick }) => {
  const { isLoggedIn } = useAuthStore();
  const disabled = isLoggedIn ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed";

  const buttonApplied = isApplied ? "bg-green-500" : "bg-primary ";
  const buttonText = isApplied ? "Aplicado" : "Aplicar"
  return (
    <button
      className={ `rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 ${buttonApplied} transition-colors ease-in-out duration-300 ${disabled}` }
      onClick={ handleApplyClick }
      disabled={ !isLoggedIn }
    >
      { buttonText }
    </button>
  )
};

const Job = ({ job }) => {
  const [isApplied, setIsApplied] = useState(false);

  const bgArticle = isApplied && "bg-gray-50 dark:bg-gray-800/30";

  const handleApplyClick = () => {
    setIsApplied(!isApplied)
  }

  return (
    <article key={ job.id } className={ `flex flex-col sm:flex-row items-start justify-between gap-4 p-6 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/30 ${bgArticle}` }>
      <Link href={ `/job/${job.id}` } >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{ job.titulo }</h3>
        <span className="mt-1 text-sm text-slate-500 dark:text-slate-400">{ job.empresa } | { job.ubicacion }</span>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{ job.descripcion }</p>
      </Link>

      <div>
        <Link href={ `/job/${job.id}` } className="rounded-lg block mb-4 text-sm whitespace-nowrap text-primary hover:text-white cursor-pointer transition-colors ease-in-out duration-300">
          Ver detalles
        </Link>

        <JobAppliedButton isApplied={ isApplied } handleApplyClick={ handleApplyClick } />

        <JobButtonFavorite jobId={ job.id } />
      </div>
    </article>
  )
}

export default Job