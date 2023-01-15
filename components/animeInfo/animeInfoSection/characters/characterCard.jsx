import Image from "next/image";
export default function CharacterCard({ characterInfo, index }) {
	const { character, role, voice_actors } = characterInfo;
	return (
		<li
			className={`flex justify-between ${index % 2 == 1 && "bg-black/5"}
      py-1 border-b-[1px] border-black/10`}
		>
			<div className="flex gap-2">
				<Image
					className="border-[1px] border-black/20"
					src={character.images.jpg.image_url}
					width={44}
					height={64}
					alt=""
					aria-hidden="true"
				/>
				<div>
					<h4 className="text-[14px] mb-1">{character.name}</h4>
					<p className="text-[11px]">{role}</p>
				</div>
			</div>
			<div className="flex gap-2">
				<div className="text-end">
					<h4 className="text-[14px] mb-1">
						{voice_actors[0].person.name}
					</h4>
					<p className="text-[11px]">{voice_actors[0].language}</p>
				</div>
				<Image
					className="border-[1px] border-black/20"
					src={voice_actors[0].person.images.jpg.image_url}
					width={44}
					height={64}
					alt=""
					aria-hidden="true"
				/>
			</div>
		</li>
	);
}
