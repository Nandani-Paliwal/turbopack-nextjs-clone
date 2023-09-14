"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const ThemeSwitcher = () => {
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            The current theme is: {theme}
            <div className="flex gap-3"><button onClick={() => setTheme("light")} className="px-3 py-2 rounded-lg bg-btnBackground text-btnContent font-medium shadow-md ">Light Mode</button>
            <button onClick={() => setTheme("dark")} className="px-3 py-2 rounded-lg bg-btnBackground text-btnContent font-medium shadow-md ">Dark Mode</button></div>
        </div>
    )
}

export default ThemeSwitcher;