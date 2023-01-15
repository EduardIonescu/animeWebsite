import Link from "next/link";
export default function InlineLinks({ array, samePage }) {
	if (!samePage)
		return (
			<>
				{array.map((item, i) => (
					<span key={i}>
						<a
							href={item.url}
							target="_blank"
							className="text-lighterBlue transition duration-300 
      hover:opacity-80"
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
							target="_blank"
							className="text-lighterBlue transition duration-300 
	hover:opacity-80"
						>
							{item.name}
						</Link>
						{i <= array.length - 2 && `, `}
					</span>
				))}
			</>
		);
}
