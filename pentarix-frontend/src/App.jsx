import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from '../routes/AppRoutes'

// ScrollToTop and ScrollReveal are rendered inside AppRoutes' Suspense
// boundary so they run after lazily-loaded pages have mounted.
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
