import Image from "next/image";
import { ICharacters } from "../../../../constants/sectionInterfaces/ICharacters";
export default function CharacterCard({
	characterInfo,
	index,
	isPage = false,
}: {
	characterInfo: ICharacters;
	index: number;
	isPage?: boolean;
}) {
	const { character, role, voice_actors } = characterInfo;
	return (
		<li
			className={`flex justify-between ${
				index % 2 == 1 && "bg-black/5 dark:bg-coolBlack/40"
			}
      py-1 border-b-[1px] border-black/10 dark:border-coolBlack`}
		>
			<div className="flex gap-2">
				<div
					className="relative w-[44px] h-[67px] border-[1px] border-black/20
				dark:border-coolBlack"
				>
					<Image
						className="object-cover"
						src={character.images.webp.image_url}
						fill
						sizes="100%"
						alt=""
						aria-hidden="true"
					/>
				</div>
				<div>
					<h4 className="text-[14px] mb-1">{character.name}</h4>
					<p className="text-[11px]">{role}</p>
				</div>
			</div>
			{voice_actors && voice_actors.length >= 1 && !isPage && (
				<div className="flex gap-2">
					<div className="text-end">
						<h4 className="text-[14px] mb-1">
							{voice_actors[0].person.name}
						</h4>
						<p className="text-[11px]">
							{voice_actors[0].language}
						</p>
					</div>
					<div
						className="relative shrink-0 w-[44px] h-[67px] border-[1px] 
					border-black/20 dark:border-coolBlack"
					>
						<Image
							className="object-cover"
							src={voice_actors[0].person.images.jpg.image_url}
							fill
							sizes="100%"
							alt=""
							aria-hidden="true"
						/>
					</div>
				</div>
			)}
			{voice_actors && voice_actors.length >= 1 && isPage && (
				<ul className="flex flex-col items-end">
					{voice_actors.map((voiceActor, i) => (
						<li key={i} className="flex gap-2">
							<div className="text-end">
								<h4 className="text-[14px] mb-1">
									{voiceActor.person.name}
								</h4>
								<p className="text-[11px]">
									{voiceActor.language}
								</p>
							</div>
							<div
								className="relative shrink-0 w-[44px] h-[67px] border-[1px]
							 border-black/20 dark:border-coolBlack"
							>
								<Image
									className="object-cover"
									src={voiceActor.person.images.jpg.image_url}
									fill
									sizes="100%"
									alt=""
									aria-hidden="true"
								/>
							</div>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}
