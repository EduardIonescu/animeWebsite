import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
	{ name: "Home", address: "/", src: "/icons/house-icon.svg" },
	{ name: "List", address: "/list", src: "/icons/list-icon.svg" },
	{
		name: "Random",
		address: "/random", //this one should be dynamic
		src: "/icons/random-icon.svg",
	},
];

export default function Links() {
	const router = useRouter();
	return (
		<ul
			className="flex gap-6 ml-32 font-medium text-[18px]
  h-[18px]"
		>
			{links.map((link, i) => (
				<li key={i}>
					<Link
						href={link.address}
						className={`flex items-end gap-2 ${
							link.address == "/"
								? "leading-[14px] before:-bottom-[23px]"
								: "leading-[18px] before:-bottom-[21px]"
						} relative 
            before:content-[''] before:absolute before:block before:w-full
             before:h-[4px] before:left-0 before:bg-[#ffc43d]
            before:scale-x-0 before:transition-transform before:duration-300
             ${
					router.pathname == link.address // underline on focus
						? "before:scale-x-100"
						: "before:opacity-80 hover:before:scale-x-100  "
				}`}
					>
						<Image
							src={link.src}
							width={20}
							height={20}
							alt=""
							aria-hidden="true"
						/>{" "}
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
}
