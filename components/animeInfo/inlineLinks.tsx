import Link from "next/link";
export default function InlineLinks({
	array,
	samePage,
}: {
	array: any[];
	samePage?: boolean;
}) {
	if (!samePage)
		return (
			<>
				{array.map((item, i: number) => (
					<span key={i}>
						<a
							href={item.url}
							target="_blank"
							rel="noreferrer"
							className="text-lighterBlue transition duration-300 
      hover:brightness-150"
						>
							{item.name}
						</a>
						{i <= array.length - 2 && `, `}
					</span>
				))}
			</>
		);
	else
		return (
			<>
				{array.map((item, i) => (
					<span key={i}>
						<Link
							href={`/anime/${item.mal_id}`}
							className="text-lighterBlue transition duration-300 
							hover:brightness-150"
						>
							{item.name}
						</Link>
						{i <= array.length - 2 && `, `}
					</span>
				))}
			</>
		);
}
