import React from "react";

export default function TechStack({ icon, name }) {
	return (
		<div className="flex overflow-hidden flex-col flex-1 rounded-2xl bg-zinc-900">
			<div className="flex gap-2 p-2 rounded-2xl border border-solid border-neutral-800">
				<div className="flex justify-center items-center px-3 w-12 h-12 rounded-xl bg-zinc-800">
					<div className="flex overflow-hidden flex-col w-6">
						<div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[24px]">
							<img
								loading="lazy"
								src={icon}
								alt={`${name} icon`}
								className="object-contain w-full aspect-square"
							/>
						</div>
					</div>
				</div>
				<div className="grow shrink my-auto text-lg font-semibold text-stone-300 w-[108px]">
					{name}
				</div>
			</div>
		</div>
	);
}
