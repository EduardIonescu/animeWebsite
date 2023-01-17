import Modal from "react-modal";
import YouTube from "react-youtube";
import { useState } from "react";
import Image from "next/image";
const modalStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.75)",
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "660px",
		padding: 0,
		margin: 0,
		backgroundColor: "transparent",
		border: "none",
		overflow: "visible",
	},
};
const youtubeOptions = {
	height: "425",
	width: "750",
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 1,
	},
};
export default function TrailerModal({ imageSrc, youtubeId }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	function openModal() {
		setModalIsOpen(true);
	}
	function closeModal() {
		setModalIsOpen(false);
	}
	return (
		<>
			<button
				onClick={openModal}
				className="h-[102px] w-[240px] relative hover:opacity-80 transition 
				duration-300 ease-in"
			>
				<Image
					src={imageSrc}
					fill
					sizes="100%"
					alt="trailer"
					className="h-[102px] w-auto object-cover"
				/>
				<div
					className="absolute top-[50%] left-[50%] -translate-x-2/4
				-translate-y-2/4 border-[1px] border-shadowLightBlue px-[7px] py-[3px] 
				text-shadowLightBlue bg-black/75 rounded-md text-[11px]
				flex items-center gap-1 font-bold
				"
				>
					<div
						className="border-[1px] border-shadowLightBlue rounded-full
					w-4 h-4 flex items-center justify-center"
					>
						<div
							className=" border-y-4 ml-[1px] border-y-transparent border-l-4
				border-l-shadowLightBlue"
						/>
					</div>{" "}
					Play
				</div>
			</button>
			<Modal
				ariaHideApp={false}
				closeTimeoutMS={500}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={modalStyles}
				contentLabel="Trailer Modal"
			>
				<YouTube
					videoId={youtubeId}
					opts={youtubeOptions}
					onEnd={closeModal}
				/>
				;
			</Modal>
		</>
	);
}
