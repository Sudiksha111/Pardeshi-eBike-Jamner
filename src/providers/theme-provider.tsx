import { setMaxIdleHTTPParsers } from "http";
import type { ReactNode } from "react";

import { useEffect, useLayoutEffect, useState } from "react";

type ThemeProvider = {
    children: ReactNode;
    currentTheme: "light" | "dark";
};

export function ThemeProvider({ children, currentTheme = "light" }: ThemeProvider) {
    const [theme, setTheme] = useState<"light" | "dark">(currentTheme);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

        if(storedTheme){
            setTheme(storedTheme);

        }
    }, []);


    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [theme]);

    return <>{children}</>;
}