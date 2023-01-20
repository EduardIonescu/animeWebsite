import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import MoonIcon from "../../public/icons/moon-icon.svg";
import SunIcon from "../../public/icons/sun-icon.svg";

export default function DarkModeButton() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted)
		return (
			<button
				type="button"
				onClick={() => setTheme(theme == "light" ? "dark" : "light")}
				className="ml-auto mr-4 w-6 h-6 relative"
			>
				<Image
					src={theme == "light" ? MoonIcon : SunIcon}
					fill
					sizes="100%"
					alt=""
					aria-hidden="true"
					className="invert-[.75] dark:invert hover:invert-[.50] 
					dark:hover:invert-[.50] transition duration-300"
				/>
				<span className="sr-only">Dark Mode</span>
			</button>
		);
}
