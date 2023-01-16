import Image from "next/image";
import Modal from "react-modal";
const customStyles = {
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
export default function TrailerModal({ modalIsOpen, closeModal }) {
	return (
		<Modal
			ariaHideApp={false}
			closeTimeoutMS={500}
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Trailer Modal"
		></Modal>
	);
}
