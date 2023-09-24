import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./contexts/ContextProvider";
import SlideProvider from "./contexts/SlideContext";
import Root from "./pages/Root";
import Slides from "./pages/Slides";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
    return (
        <ContextProvider providers={[SlideProvider]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/slides/:number" element={<Slides />} />
                    <Route path="404" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
};

export default App;
