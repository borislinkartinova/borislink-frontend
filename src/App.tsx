import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Article from "./pages/Article";
import About from "./pages/About";
import Artinova from "./pages/Artinova";
import Newsletter from "./pages/Newsletter";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/artinova" element={<Artinova />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Layout>
  );
}