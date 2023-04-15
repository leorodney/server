import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            {/* protect the home and the production page */}
            <Route index path="/" element={<Community />} />
            {/* Point the same Login page for both "/login" and "/signin" routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Login />} />
            {/* Point the same Register page for both "/register" and "/signop" routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}
