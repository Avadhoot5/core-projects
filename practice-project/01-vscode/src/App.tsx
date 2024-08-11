import Header from "./components/Header"
import './App.css';
import HeroSection from "./components/HeroSection";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {

  return (
    <>
    <ThemeContextProvider>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContextProvider>
    </>
  )
}

export default App
