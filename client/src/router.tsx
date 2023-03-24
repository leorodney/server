import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
import Demo from "./pages/Demo";
import Production from "./pages/Production";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="/production" element={<Production />} />
            <Route path="/community" element={<Community />} />
        </Routes>
    </BrowserRouter>
  )
}
