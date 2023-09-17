"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";


const themeMode = [
  { id: 1, name: "dark" },
  { id: 2, name: "light" },
  { id: 3, name: "system" },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(themeMode[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Button className="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50">
        <div className="flex items-center gap-2 capitalize">
          {resolvedTheme === "Light" ? (<svg
            fill="none"
            viewBox="2 2 20 20"
            width="12"
            height="12"
            stroke="currentColor"
            className="moon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              fill="currentColor"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>) : 
          (<svg
            fill="none"
            viewBox="3 3 18 18"
            width="12"
            height="12"
            stroke="currentColor"
            className="sun"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              fill="currentColor"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>)}
          <span>{theme}</span>
        </div>
      </Listbox.Button>
      <Listbox.Options className="listbox-options-mobile  capitalize z-20 max-h-64 overflow-auto rounded-md ring-1 ring-black/5 bg-white py-1 text-sm shadow-lg dark:ring-white/20 dark:bg-neutral-800">
        {themeMode.map((mode) => (
          <Listbox.Option
            key={mode.id}
            value={mode.name}
            className="text-gray-800 text-sm dark:text-gray-100 relative cursor-pointer whitespace-nowrap py-1.5 transition-colors pl-3 pr-3 "
          >
            <CheckIcon className="hidden ui-selected:block" />
            {mode.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

