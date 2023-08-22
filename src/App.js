import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, News, Portfolio } from "./pages";
import { motion } from "framer-motion";
import { CustomCursor, Navbar } from "./components";
import Wave from 'react-wavify'
import { useTheme } from "./ThemeContext";

function App() {
  const { themeColor, animatedCursor } = useTheme()

  return (
    <motion.div
      className=" h-screen bg-black overflow-y-hidden overflow-x-hidden">
      <CustomCursor />


      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Wave fill={themeColor}
        paused={false}
        style={{ display: 'flex', position: "fixed", bottom: 0, right: 0, left: 0 }}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.2,
          points: 7

        }}
      />
    </motion.div>
  );
}

export default App;



