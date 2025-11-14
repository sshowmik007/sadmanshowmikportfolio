export default function StatCard({ number, icon, label }) {
	return (
		<div className="flex relative flex-col justify-center items-center px-2.5 py-6 mx-auto w-full text-center whitespace-nowrap rounded-3xl bg-stone-950 min-h-[149px] max-md:mt-5">
			<div className="flex z-0 justify-center items-center pr-11 pl-11 max-w-full font-semibold leading-none w-[189px] max-md:px-5">
				<div className="flex flex-col self-stretch my-auto text-6xl text-neutral-400 w-20 max-md:text-4xl">
					<div className="w-full max-md:text-4xl">{number}</div>
				</div>
				<div className="flex flex-col self-stretch my-auto text-4xl text-violet-400 w-[23px]">
					<div className="w-full">+</div>
				</div>
			</div>
			<div className="flex relative z-0 gap-1 justify-center items-center px-8 py-1.5 mt-1.5 max-w-full text-base font-medium bg-neutral-900 rounded-[57px] text-stone-300 w-[189px] max-md:px-5">
				<img
					loading="lazy"
					src={icon}
					alt=""
					className="object-contain z-0 shrink-0 self-stretch my-auto w-5 aspect-square"
				/>
				<div className="flex z-0 flex-col justify-center self-stretch my-auto">
					<div className="w-full">{label}</div>
				</div>
				<div className="flex absolute inset-0 z-0 shrink-0 self-start h-9 border border-solid border-stone-900 rounded-[57px] w-[189px]" />
			</div>
			<div className="flex absolute inset-0 z-0 self-start max-w-full rounded-3xl border border-solid border-zinc-900 min-h-[149px] w-[209px]" />
		</div>
	);
}
