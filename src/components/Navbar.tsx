import { useState } from "react";

const navItems = ["What's new", "Home", "Contact", "About", "Learn"];

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>("");
    const [sliderPos, setSliderPos] = useState<number>(0);
    const sliderWidth = 100 / navItems.length;

    const onNavItemClick = (item: string, index: number) => {
        setActiveItem(item);
        setSliderPos(index * 100);
    };

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
                    className={`rounded-full absolute h-[100%] w-[${sliderWidth}%] bg-indigo-500 my-auto translate-x-[${sliderPos}%] slider-el`}
                ></div>
            </div>
        </div>
    );
}

export default Navbar;
