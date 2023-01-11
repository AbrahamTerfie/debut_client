import * as React from "react";

export class ThemeToggler extends React.Component {
    public componentDidMount(): void {
        const storedTheme = localStorage.getItem("theme");

        const getPreferredTheme = (): string => {
            if (storedTheme) {
                return storedTheme;
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        };

        const setTheme = (theme: string): void => {
            if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.setAttribute("data-bs-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-bs-theme", theme);
            }
        };

        setTheme(getPreferredTheme());

        const showActiveTheme = (theme: string): void => {
            const activeThemeIcon: any = document.querySelector(".theme-icon-active use");
            const btnToActive: any = document.querySelector(`[data-bs-theme-value="${theme}"]`);
            const svgOfActiveBtn = btnToActive.querySelector("svg use").getAttribute("href")

            document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
                element.classList.remove("active");
            });

            btnToActive.classList.add("active");
            activeThemeIcon.setAttribute("href", svgOfActiveBtn);
        };

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (storedTheme === "light" || storedTheme === "dark") {
                setTheme(getPreferredTheme());
            }
        });

        window.addEventListener("DOMContentLoaded", () => {
            showActiveTheme(getPreferredTheme());

            document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
                toggle.addEventListener("click", () => {
                    const theme: any = toggle.getAttribute("data-bs-theme-value");
                    localStorage.setItem("theme", theme);
                    setTheme(theme);
                    showActiveTheme(theme);
                });
            });
        });
    }

    public render(): JSX.Element {
        return <div >

            toggle
        </div>;
    }
}
