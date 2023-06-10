import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = ["Featured", "Home", "Contact", "About", "Learn"];

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>("");
    const [sliderPos, setSliderPos] = useState<number>(0);
    const [showSlider, setShowSlider] = useState<boolean>(false);
    const sliderWidth = 100 / navItems.length;

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const onNavItemClick = (item: string, index: number) => {
        navigate("/" + item);
        setShowSlider(true);
        setActiveItem(item);
        setSliderPos(index * 100);
    };

    useEffect(() => {
        const selectedItem = pathname.split("/")[1];
        const selectedItemIdx = navItems.indexOf(selectedItem);

        if (selectedItemIdx < 0) return;

        onNavItemClick(selectedItem, selectedItemIdx);
    }, []);

    return (
        <div className="relative w-[90%] md:w-[60%] lg:w-[55%] bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="relative flex-1 flex flex-row">
                {navItems.map((item, index) => (
                    <div
                        className={
                            "z-10 flex-1 flex justify-center items-center py-2 sm:py-3 cursor-pointer text-sm" +
                            (activeItem === item
                                ? " text-white font-medium"
                                : "")
                        }
                        key={index}
                        onClick={() => onNavItemClick(item, index)}
                    >
                        {item}
                    </div>
                ))}
                <div
                    className={`rounded-full absolute h-[100%] w-[${sliderWidth}%] bg-indigo-500 my-auto translate-x-[${sliderPos}%] slider-el ${
                        !showSlider ? "opacity-0" : ""
                    }`}
                ></div>
            </div>
        </div>
    );
}

export default Navbar;
