import { createContext, useContext, useState } from "react";

const SlideContext = createContext();

export const useSlide = () => useContext(SlideContext);

const SlideProvider = ({ children }) => {
    const [slides, setSlides] = useState([]);

    const values = {
        slides,
        setSlides,
    };

    return (
        <SlideContext.Provider value={values}>
            {" "}
            {children}{" "}
        </SlideContext.Provider>
    );
};

export default SlideProvider;
