import LogoDevJobs from "@/assets/icons/LogoDevJobs"
import Container from '@/components/ContainerGeneral'
import { NavLink } from 'react-router'
import { HeaderUserButton } from '@/components/HeaderUserButton'
import { useAuthStore } from "@/store/authStore";
import { useFavoriteStore } from "@/store/favoritesStore";
import Link from '@/components/Link'

const LinkProfile = () => {
  const { isLoggedIn } = useAuthStore();

  const { countFavorites } = useFavoriteStore();

  const numberOfFavorites = countFavorites();

  return (
    isLoggedIn && <NavLink to="/profile" className={ ({ isActive }) => isActive ? "text-primary pointer-none: " : "hover:text-primary transition-all ease-in-out duration-300" }> Perfil
      <span span className="ml-1 text-sm font-semibold" >
        ❤️{ numberOfFavorites }
      </span>
    </NavLink>
  )
}

const Menu = () => {

  return (
    <header className="border-b border-black/10 dark:border-white/10 p-4 py-5">
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-semibold">
            <LogoDevJobs className="text-primary" />
            <span>DevJobs</span>
          </Link>

          <div className="flex gap-4 lg:gap-6 font-normal text-slate-600 dark:text-slate-300">
            <NavLink to="/search" className={ ({ isActive }) => isActive ? "text-primary pointer-none: " : "hover:text-primary transition-all ease-in-out duration-300" }>Empleos</NavLink>
            <LinkProfile />
          </div>

          <div className="flex gap-4">
            {/* <Link href="/publicar-empleo" className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">Publicar empleo</Link>
            <Link href="/iniciar-sesion" className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">Iniciar sesión</Link> */ }
            <HeaderUserButton />
          </div>
        </nav>
      </Container>
    </header >
  )
}

export default Menu