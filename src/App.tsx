import ReactFullpage from "@fullpage/react-fullpage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'} // For development, it will work without a key
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition="right"
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Hero />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div className="section">
              <Contact />
              <Footer className="absolute bottom-0 w-full" />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;