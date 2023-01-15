export default function StreamingPlatforms({ streaming }) {
	return (
		<article className="pt-6">
			<h3 className="pb-1 font-bold">Streaming Platforms</h3>
			<hr className="w-full relative border-black/20" />
			<ul className="text-[12px] font-light pt-1">
				{streaming.map((platform) => (
					<li>
						<a
							href={platform.url}
							target="_blank"
							className="text-lighterBlue transition duration-300 
      hover:opacity-80"
						>
							{platform.name}
						</a>
					</li>
				))}
			</ul>
		</article>
	);
}
