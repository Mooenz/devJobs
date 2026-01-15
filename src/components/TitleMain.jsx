const TitleMain = ({ title, subtitle, className }) => {
  return (
    <hgroup className={ `text-center mb-12 ${className}` }>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{ title }</h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{ subtitle }</p>
    </hgroup>
  )
}

export default TitleMain