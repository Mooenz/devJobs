import Job from '@/components/Job';

const Jobs = ({ jobs }) => {
  const jobsCount = jobs.length;
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-10 lg:mb-8">Resultados de búsqueda</h2>
      <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
        {
          jobsCount === 0 ? <p className="text-center text-gray-500 dark:text-gray-400 my-10">No se encontraron ofertas de empleo que coincidan con tus criterios de búsqueda.</p> :
            jobs.map(job => (
              <Job key={ job.id } job={ job } />
            ))
        }
      </div>
    </>
  )
}

export default Jobs