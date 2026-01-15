
const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.5 } : {}
  const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.5 } : {}

  const handlePrevClick = (event) => {
    event.preventDefault()
    if (!isFirstPage) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = (event) => {
    event.preventDefault()
    if (!isLastPage) {
      onPageChange(currentPage + 1)
    }
  }

  const handleChangePage = (event) => {
    event.preventDefault()
    const page = Number(event.target.dataset.page)

    if (page !== currentPage) {
      onPageChange(page)
    }
  }

  const buildPageUrl = (page) => {
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    return `${url.pathname}?${url.searchParams.toString()}`;
  }

  return (
    <nav className="flex gap-4 justify-center items-center py-6 md:py-8 lg:py-10">
      <a href={ buildPageUrl(currentPage - 1) } style={ stylePrevButton } onClick={ handlePrevClick }>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>


      { pages.map((page) => (
        <a
          key={ page }
          data-page={ page }
          href={ buildPageUrl(page) }
          className={ `w-10 h-10 flex items-center justify-center rounded-xl transition-all ease-in-out duration-300 ${currentPage === page ? 'bg-primary text-white ' : ''}` }
          onClick={ handleChangePage }
        >
          { page }
        </a>
      )) }

      <a href={ buildPageUrl(currentPage + 1) } style={ styleNextButton } onClick={ handleNextClick }>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  )
}

export default Pagination