import * as React from "react";

export function BenefitCard({ icon, title }) {
	return (
		<div className="flex relative items-start py-1.5 pr-3 pl-1.5 w-full rounded-xl bg-zinc-900">
			<div className="flex z-0 flex-1 shrink gap-1.5 justify-center items-center my-auto w-full basis-0">
				<div className="flex overflow-hidden justify-center items-center self-stretch px-2 my-auto rounded-xl bg-zinc-800 h-[38px] w-[38px]">
					<img
						loading="lazy"
						src={icon}
						alt=""
						className="object-contain self-stretch my-auto aspect-square w-[22px]"
					/>
				</div>
				<div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-lg font-semibold basis-4 text-stone-300">
					<div className="w-full">{title}</div>
				</div>
			</div>
			<div className="flex absolute inset-0 z-0 shrink-0 self-start rounded-xl border border-solid border-neutral-800 h-[50px] min-w-[240px] w-[252px]" />
		</div>
	);
}
