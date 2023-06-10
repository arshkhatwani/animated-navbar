import { useState } from "react";

const navItems = ["What's new", "Home", "Contact", "About"];

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>("");
    const [sliderPos, setSliderPos] = useState<number>(0);

    const onNavItemClick = (item: string, index: number) => {
        setActiveItem(item);
        setSliderPos(index * 100);
    };

    return (
        <div className="relative sm:w-[60%] md:w-[50%] bg-blue-300 rounded-full mx-auto overflow-hidden">
            <div className="relative flex-1 flex flex-row">
                {navItems.map((item, index) => (
                    <div
                        className="z-10 flex-1 flex justify-center items-center py-3 cursor-pointer"
                        key={index}
                        onClick={() => onNavItemClick(item, index)}
                    >
                        {item}
                    </div>
                ))}
                <div
                    className={
                        "rounded-full absolute h-[100%] w-[25%] bg-red-600 my-auto" +
                        ` translate-x-[${sliderPos}%]`
                    }
                ></div>
            </div>
        </div>
    );
}

export default Navbar;
