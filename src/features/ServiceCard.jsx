import * as React from "react";

export function ServiceCard({
	icon,
	title,
	description,
	experience,
	completedWorks,
	hourlyRate,
}) {
	return (
		<div className="flex relative flex-col flex-1 justify-between p-6 w-full rounded-3xl bg-stone-950 max-md:px-5">
			<div className="flex z-0 flex-col w-full">
				<div className="flex gap-2.5 items-center w-full">
					<div className="flex justify-center items-center self-stretch my-auto rounded-xl bg-zinc-900 h-[52px] w-[52px]">
						<div className="flex self-stretch my-auto rounded-xl border border-solid border-neutral-800 min-h-[52px] w-[52px]" />
					</div>
					<div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-xl font-bold basis-0 text-neutral-200">
						<div className="w-full">{title}</div>
					</div>
				</div>
				<div className="mt-3.5 w-full text-base font-medium text-neutral-400">
					{description}
				</div>
			</div>
			<div className="flex z-0 flex-col w-full">
				<div className="flex gap-10 justify-between items-center py-2.5 w-full">
					<div className="flex flex-col self-stretch my-auto text-base font-medium whitespace-nowrap text-neutral-400 w-[84px]">
						<div className="w-full">Experience</div>
					</div>
					<div className="flex flex-col self-stretch my-auto text-lg font-semibold text-neutral-200">
						<div className="w-full">{experience}</div>
					</div>
				</div>
				<div className="flex relative justify-between items-center py-2.5 w-full">
					<div className="flex z-0 flex-col self-stretch my-auto text-base font-medium text-neutral-400 w-[133px]">
						<div className="w-full">Completed Works</div>
					</div>
					<div className="flex z-0 flex-col self-stretch my-auto text-lg font-semibold whitespace-nowrap text-neutral-200">
						<div className="w-full">{completedWorks}</div>
					</div>
					<div className="flex absolute inset-0 z-0 shrink-0 self-start border-t border-b border-neutral-800 h-[47px] min-w-[240px] w-[295px]" />
				</div>
				<div className="flex gap-10 justify-between items-center py-2.5 w-full">
					<div className="flex flex-col self-stretch my-auto text-base font-medium text-neutral-400 w-[88px]">
						<div className="w-full">Hourly Rate</div>
					</div>
					<div className="flex flex-col self-stretch my-auto text-lg font-semibold whitespace-nowrap text-neutral-200">
						<div className="w-full">${hourlyRate}</div>
					</div>
				</div>
			</div>
			<div className="flex z-0 gap-1.5 justify-center items-center px-20 py-4 w-full text-lg font-medium rounded-xl bg-zinc-900 text-neutral-400 max-md:px-5">
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/72f79179965de748910e2537dd9fd45997d9dfe4aa64fb0cae04818ec5158ff1?placeholderIfAbsent=true&apiKey=df43ad9399f14739b078aacb9b1cd201"
					alt=""
					className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
				/>
				<div className="flex flex-col justify-center self-stretch my-auto w-[116px]">
					<div className="w-full">Schedule Call</div>
				</div>
			</div>
			<div className="flex absolute inset-0 z-0 max-w-full rounded-3xl border border-solid border-neutral-900 min-h-[433px] w-[343px]" />
		</div>
	);
}
