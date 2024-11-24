import About from "./components/About";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const app = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feature />
    </main>
  );
};

export default app;
