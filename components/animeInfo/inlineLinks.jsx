export default function InlineLinks({ array }) {
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
}
