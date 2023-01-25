export default function Loading() {
	return (
		<section
			className="w-full h-[calc(100vh-64px)] mx-auto py-12 px-4 
    bg-shadowLightBlue dark:bg-veryDarkBlue"
		>
			<LoadingSpinner />
		</section>
	);
}

export function LoadingSpinner() {
	return (
		<div
			className="border-4 border-black/20 border-t-lighterBlue rounded-full
w-10 h-10 animate-spin mx-auto"
		/>
	);
}
