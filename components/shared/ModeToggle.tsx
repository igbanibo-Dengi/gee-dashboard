"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Moon from '../../public/icons/moon.svg'
import Sun from '../../public/icons/Sun.svg'
import Image from "next/image"


export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const isActive = theme === "light";

    const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform ${isActive ? 'translate-x-0' : 'translate-x-6'

        } transition-transform duration-500 ease-in-out`;

    return (
        <div>
            <div className="relative mt-3 w-14 h-8 rounded-full p-1 cursor-pointer bg-white rotate-90" onClick={toggleTheme}>
                <button className={switchClasses}>
                    {isActive ?
                        <Image
                            src={Moon}
                            alt="moon" />
                        :
                        <Image
                            src={Sun}
                            alt="sun" />}
                </button>
            </div>
        </div>
    )
}
