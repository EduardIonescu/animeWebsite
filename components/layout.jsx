import Head from "next/head";
import Navbar from "./navbar/navbar";
import BackToTopButton from "./other/backToTopButton";

export default function Layout({ children }) {
	return (
		<>
			{" "}
			<Head>
				<title>Anime App</title>
				<meta
					name="description"
					content="The best website to search good anime"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Navbar />
			{children}
			<BackToTopButton />
		</>
	);
}
