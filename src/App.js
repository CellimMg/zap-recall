import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/principal/Principal";
import Cards from "./components/cards/Cards";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/cards" element={<Cards />} />
            </Routes>
        </BrowserRouter>
    );
}
