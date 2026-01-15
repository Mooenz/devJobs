import { useAuthStore } from '@/store/authStore.js'

export const HeaderUserButton = () => {
  const { isLoggedIn, login, logout } = useAuthStore()
  return isLoggedIn
    ? <button onClick={ logout } className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">Cerrar sesión</button>
    : <button onClick={ login } className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">Iniciar sesión</button>
}
