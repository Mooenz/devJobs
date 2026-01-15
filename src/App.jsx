import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router'
import Menu from '@/sections/Menu';
import Footer from '@/sections/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';

const HomePage = lazy(() => import('@/page/Home.jsx'));
const SearchPage = lazy(() => import('@/page/Search.jsx'));
const JobDetail = lazy(() => import('@/page/JobDetail.jsx'));
const NotFound = lazy(() => import('@/page/NotFound.jsx'));
const Login = lazy(() => import('@/page/Login.jsx'));
const Register = lazy(() => import('@/page/Register.jsx'));
const Profile = lazy(() => import('@/page/Profile.jsx'));

function App() {

  return (
    <>
      <section className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen transition-all  duration-300 ease-in-out">
        <Menu />
        <Suspense fallback={ <div className="text-center mt-20">Cargando...</div> }>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/search" element={ <SearchPage /> } />
            <Route path="/job/:jobId" element={ <JobDetail /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/profile" element={ <ProtectedRoute><Profile /></ProtectedRoute> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Suspense>
        <Footer />
      </section>
    </>
  )
}

export default App
