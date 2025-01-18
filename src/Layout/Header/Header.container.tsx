import HeaderView from "./Header.view.tsx";
import { useState, useEffect } from "react";

const HeaderContainer = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderView
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            isScrolled={isScrolled}
        />
    );
};

export { HeaderContainer };
