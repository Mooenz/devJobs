import { Link as NavLink } from 'react-router'

const Link = ({ href, children, ...props }) => {

  return (
    <NavLink to={ href } { ...props }>
      { children }
    </NavLink>
  )
}

export default Link