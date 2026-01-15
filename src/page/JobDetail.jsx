import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { useAuthStore } from "@/store/authStore";
import { useFavoriteStore } from "@/store/favoritesStore";
import Link from "@/components/Link"
import snarkdown from "snarkdown"
import styles from './Detail.module.css'


function DetailPageBreadCrumb({ job }) {
  return (
    <div className={ styles.container }>
      <nav className={ styles.breadcrumb } aria-label="Ruta de navegación">
        <Link
          href="/search"
          className={ styles.breadcrumbButton }
        >
          Empleos
        </Link>
        <span className={ styles.breadcrumbSeparator }>/</span>
        <span className={ styles.breadcrumbCurrent } aria-current="page">{ job.titulo }</span>
      </nav>
    </div>
  )
}

function JobSection({ title, content }) {
  const html = snarkdown(content)

  return (
    <section className={ styles.section }>
      <h2 className={ styles.sectionTitle }>
        { title }
      </h2>

      <div
        className={ `${styles.sectionContent} prose text-sm text-gray-600 dark:text-gray-300` }
        dangerouslySetInnerHTML={ {
          __html: html
        } }
      />

    </section>
  )
}

function DetailFavoriteButton({ jobId }) {
  const { isLoggedIn } = useAuthStore()
  const { isFavorite, toggleFavorite } = useFavoriteStore();

  return (
    <button
      className={ isLoggedIn ? "opacity-100" : "opacity-50" }
      onClick={ () => toggleFavorite(jobId) }
      disabled={ !isLoggedIn }
      aria-label={ isFavorite(jobId) ? 'Remove from favorites' : 'Add to favorites' }
    >
      { isFavorite(jobId) ? '❤️' : '🤍' }
    </button>
  )
}


function DetailPageHeader({ job }) {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <header className={ `flex flex-wrap gap-6 justify-between ${styles.header}` }>
        <div>
          <h1 className={ styles.title }>
            { job.titulo }
          </h1>
          <p className={ styles.meta + `text-sm text-slate-400` }>
            { job.empresa } · { job.ubicacion }
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button disabled={ !isLoggedIn } className={ styles.applyButton }>
            { isLoggedIn ? 'Aplicar ahora' : 'Inicia sesión para aplicar' }
          </button>
          <DetailFavoriteButton jobId={ job.id } />
        </div>
      </header>
    </>
  )
}

const JobDetail = () => {
  const { jobId } = useParams()

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La oferta de empleo no se pudo cargar');
        }
        return response.json();
      })
      .then((data) => {
        setJob(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jobId])



  if (loading) {
    return <div style={ { maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' } }>
      <div className={ styles.loading }>
        <p className={ styles.loadingText }>Cargando...</p>
      </div>
    </div>
  }


  if (error || !job) {
    return (
      <div style={ { maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' } }>
        <div className={ styles.error }>
          <h2 className={ styles.errorTitle }>
            Oferta no encontrada
          </h2>
          <button
            onClick={ () => navigate('/') }
            className={ styles.errorButton }
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={ { maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' } }>
      <DetailPageBreadCrumb job={ job } />
      <DetailPageHeader job={ job } />

      <JobSection title="Descripción del puesto" content={ job.content.description } />
      <JobSection title="Responsabilidades" content={ job.content.responsibilities } />
      <JobSection title="Requisitios" content={ job.content.requirements } />
      <JobSection title="Acerca de la empresa" content={ job.content.about } />


    </div>
  )
}

export default JobDetail
