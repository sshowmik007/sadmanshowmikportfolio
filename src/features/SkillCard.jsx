export default function SkillCard({ icon, name, category }) {
	return (
		<div className="flex overflow-hidden relative z-0 justify-between items-center p-2.5 w-full rounded-2xl bg-neutral-900">
			<div className="flex z-0 gap-2 items-center self-stretch my-auto">
				<div className="flex overflow-hidden justify-center items-center self-stretch px-2.5 my-auto w-11 h-11 rounded-xl bg-zinc-800">
					<img
						loading="lazy"
						src={icon}
						alt=""
						className="object-contain self-stretch my-auto w-6 aspect-square"
					/>
				</div>
				<div className="flex flex-col self-stretch my-auto text-lg font-semibold whitespace-nowrap text-stone-300">
					<div className="w-full">{name}</div>
				</div>
			</div>
			<div className="flex z-0 items-center self-stretch px-2.5 pt-1.5 pb-1.5 my-auto text-base font-medium rounded-lg bg-stone-900 text-neutral-400">
				<div className="flex flex-col justify-center self-stretch my-auto">
					<div className="pb-px w-full">{category}</div>
				</div>
			</div>
			<div className="flex absolute inset-0 z-0 shrink-0 self-start h-16 rounded-2xl border border-solid border-stone-900 min-w-[240px] w-[349px]" />
		</div>
	);
}
