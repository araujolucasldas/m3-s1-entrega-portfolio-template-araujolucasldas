import { Header } from "./components/Header/header.jsx"
import { BannerSection } from "./components/BannerSection/banner.jsx"
import { AboutMeSection } from "./components/AboutMeSection/about.jsx"
import { TechSection } from "./components/TechSection/tech.jsx"
import { ProjectsSection } from "./components/ProjectsSection/projects.jsx"
import { Footer } from "./components/Footer/footer.jsx"
import "./styles/reset.css"

function App() {

  return (
    <>
      <Header />
      <main className="main__container">
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
