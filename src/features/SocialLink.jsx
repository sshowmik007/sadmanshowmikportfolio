import React from "react";

export default function SocialLink({ icon, username, platform }) {
	return (
		<div className="flex flex-col w-full rounded-2xl bg-zinc-900">
			<div className="flex gap-1.5 p-2.5 rounded-2xl border border-solid border-neutral-800">
				<div className="flex justify-center items-center px-2.5 w-11 h-11 rounded-xl bg-zinc-800">
					<div className="flex overflow-hidden flex-col w-6">
						<div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[24px]">
							<img
								loading="lazy"
								src={icon}
								alt={`${platform} icon`}
								className="object-contain w-full aspect-square"
							/>
						</div>
					</div>
				</div>
				<div className="grow shrink my-auto text-lg font-medium text-neutral-400 w-[165px]">
					{username}
				</div>
			</div>
		</div>
	);
}
