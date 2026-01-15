import { useState, useId } from "react";
import useFilterJobs from "@/hooks/useFilterJobs";

const FilterJobs = ({ onTextFilter, onSearch, initialText, filters }) => {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();
  const [focusedField, setFocusedField] = useState(null);

  const {
    handleSubmit,
    handleTextChange
  } = useFilterJobs({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextFilter })

  const handleCleanFilters = (e) => {
    e.preventDefault();

    onSearch({
      technology: '',
      location: '',
      experienceLevel: ''
    });

    onTextFilter('');
  };

  const isEnabled = filters.technology || filters.location || filters.experienceLevel || initialText;

  return (
    <>
      <form onChange={ handleSubmit } role="search" onSubmit={ (e) => e.preventDefault() }>
        <div className={ `relative w-full  mx-auto dark:bg-slate-800 flex items-center bg-white rounded-lg shadow-lg p-2 ${focusedField === 'search' ? 'input-focused' : ''}` }>
          <span className="pl-3 pr-2 text-slate-400">
            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
          </span>
          <label className="absolute top-0 text-[0px]" htmlFor="searchInput" name="searchInput">Filtrar empleos</label>
          <input id="searchInput" name={ idText } type="text" className="w-full h-full py-3 bg-transparent outline-0 border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500" placeholder="Buscar empleos por título, habilidad o empresa" onChange={ handleTextChange } onFocus={ () => setFocusedField('search') } onBlur={ () => setFocusedField(null) } defaultValue={ initialText } />
        </div >

        <div className="flex flex-wrap gap-4 mt-4 items-center">
          <select name={ idTechnology } id={ idTechnology } className="rounded-lg bg-gray-200/50 dark:bg-gray-700 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer border-r-10 border-r-gray-200 dark:border-r-gray-700 hover:border-r-gray-300 dark:hover:border-r-gray-800 transition-all" defaultValue={ filters.technology } >
            <option value="" >Tecnología</option>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="javascript">JavaScript</option>
            <option value="mobile">Mobile</option>
          </select>

          <select name={ idLocation } id={ idLocation } className="rounded-lg bg-gray-200/50 dark:bg-gray-700 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer border-r-10 border-r-gray-200 dark:border-r-gray-700 hover:border-r-gray-300 dark:hover:border-r-gray-800 transition-all" defaultValue={ filters.location } >
            <option value="">Ubicaciones</option>
            <option value="monterrey">Monterrey</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="barcelona">Barcelona</option>
            <option value="madrid">Madrid</option>
            <option value="bsas">Buenos Aires</option>
            <option value="valencia">Valencia</option>
            <option value="bogota">Bogotá</option>
            <option value="lima">Lima</option>
            <option value="santiago">Santiago de Chile</option>
          </select>

          <select name={ idExperienceLevel } id={ idExperienceLevel } className="rounded-lg bg-gray-200/50 dark:bg-gray-700 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer border-r-10 border-r-gray-200 dark:border-r-gray-700 hover:border-r-gray-300 dark:hover:border-r-gray-800 transition-all" defaultValue={ filters.experienceLevel } >
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
          {
            isEnabled &&
            <button className="px-4 py-3 cursor-pointer hover:text-primary transition-all ease-in-out duration-300" type="reset" onClick={ handleCleanFilters }>
              Limpiar filtros
            </button>
          }
        </div>
      </form>

      <span id="filter-value"></span>
    </>
  )
}

export default FilterJobs