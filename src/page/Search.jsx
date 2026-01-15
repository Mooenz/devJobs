import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Layout from '@/layout/Layout';
import ContainerGeneral from '@/components/ContainerGeneral';
import TitleMain from "@/components/TitleMain"
import FilterJobs from '@/components/FilterJobs';
import Jobs from '@/sections/Jobs';
import Pagination from '@/components/Pagination';
import '@/styles/searchForm.css';

const RESULT_PER_PAGE = 5;

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = Number(searchParams.get('page'));
    const isNan = Number.isNaN(page);
    if (isNan || page < 1) {
      return 1;
    }

    return page;
  });


  const [filters, setFilters] = useState(() => {
    const filters = {
      technology: searchParams.get('technology') || '',
      location: searchParams.get('type') || '',
      experienceLevel: searchParams.get('level') || ''
    };

    return filters;
  });
  const [textToFilter, setTextToFilter] = useState(() => searchParams.get('text') || '');
  const title = loading ? 'Cargando ofertas de empleo...' : `Resultados: ${total} - Página ${currentPage} - DevJobs`;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('type', filters.location)
        if (filters.experienceLevel) params.append('level', filters.experienceLevel)

        const offset = (currentPage - 1) * RESULT_PER_PAGE
        params.append('limit', RESULT_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString();
        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`);
        const json = await response.json();

        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters, currentPage, textToFilter]);

  useEffect(() => {
    setSearchParams((params) => {
      textToFilter ? params.set('text', textToFilter) : params.delete('text')
      filters.technology ? params.set('technology', filters.technology) : params.delete('technology')
      filters.location ? params.set('type', filters.location) : params.delete('type')
      filters.experienceLevel ? params.set('level', filters.experienceLevel) : params.delete('level')

      if (currentPage > 0) params.set('page', currentPage);
      return params;
    });
  }, [filters, currentPage, textToFilter, setSearchParams]);

  const totalPages = Math.ceil(total / RESULT_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  }

  const handleTextFilter = (text) => {
    setTextToFilter(text)
    setCurrentPage(1)
  }

  return (
    <Layout>
      <title>{ title }</title>
      <TitleMain title="Encuentra tu próximo trabajo" subtitle="Explora miles de oportunidades en el sector tecnológico" className="px-3 py-8 lg:py-15" />
      <ContainerGeneral>
        <FilterJobs onTextFilter={ handleTextFilter } onSearch={ handleSearch } initialText={ textToFilter } filters={ filters } />
        {
          loading ? <p className="text-center text-gray-500 dark:text-gray-400 my-10">Cargando ofertas de empleo...</p> : <Jobs jobs={ jobs } />
        }
        <Pagination currentPage={ currentPage } totalPages={ totalPages } onPageChange={ handlePageChange } />
      </ContainerGeneral>
    </Layout >
  )
}

export default Search