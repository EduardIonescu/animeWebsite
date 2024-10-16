import Image from "next/image";
import Link from "next/link";
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
      className="flex gap-6 lg:ml-32 font-medium text-base lg:text-[18px]
  h-[18px]"
    >
      {links.map((link, i) => (
        <li key={i}>
          <Link
            href={link.address}
            target={link.name === "Random" ? "_blank" : "_self"}
            className={`flex items-end gap-2 ${
              link.address == "/" ? "leading-[16px]" : "leading-[18px]"
            } relative before:-bottom-2 lg:before:-bottom-[21px]
            before:content-[''] before:absolute before:block before:w-full
            before:h-[2px] lg:before:h-[4px] before:left-0 before:bg-[#ffc43d]
            before:scale-x-0 before:transition-transform before:duration-300
             ${
               router.pathname == link.address // underline on focus
                 ? "before:scale-x-100"
                 : "before:opacity-80 hover:before:scale-x-100  "
             }`}
          >
            {" "}
            <div className="relative w-4 h-4 mb-[1px] lg:mb-0 lg:w-5 lg:h-5">
              <Image
                src={link.src}
                fill
                sizes="100%"
                alt=""
                aria-hidden="true"
              />
            </div>{" "}
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
