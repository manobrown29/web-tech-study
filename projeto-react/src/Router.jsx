import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/Home"
import FAQ from "./pages/FAQ"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"

export default function Router() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
