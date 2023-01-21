import { useEffect, useState } from "react";
import Image from "next/image";
import arrowUp from "../../public/icons/arrow-up.svg";
export default function BackToTopButton() {
	const [showButton, setShowButton] = useState(false);
	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
		};
		window.addEventListener("scroll", handleScrollButtonVisibility);
		return () => {
			window.removeEventListener("scroll", handleScrollButtonVisibility);
		};
	}, []);
	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	if (showButton)
		return (
			<button
				className="sticky bottom-5 left-[80vw] sm:left-[75vw] md:left-[80vw]
        xl:left-[calc(500px+50vw)] z-50 transition-[background]
        duration-300 
  cursor-pointer p-4 rounded-full bg-black/30 hover:bg-black/40"
				onClick={handleScrollToTop}
			>
				<div className="relative w-6 h-6">
					<Image
						className="invert"
						src={arrowUp}
						fill
						sizes="100"
						alt="Scroll To Top"
					/>
				</div>
			</button>
		);
}
