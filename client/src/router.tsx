import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
import Production from "./pages/Production";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Community />} />
            <Route path="/production" element={<Production />} />
        </Routes>
    </BrowserRouter>
  )
}
