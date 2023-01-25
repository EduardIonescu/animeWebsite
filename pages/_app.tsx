import "../styles/globals.css";
import Layout from "../components/layout";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
