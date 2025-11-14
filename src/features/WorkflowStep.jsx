import React from 'react';

export default function WorkflowStep({ icon, title }) {
  return (
    <div className="flex flex-col w-full rounded-xl bg-zinc-900">
      <div className="flex gap-1.5 p-1.5 rounded-xl border border-solid border-neutral-800">
        <div className="flex overflow-hidden justify-center items-center px-2 rounded-xl bg-zinc-800 h-[38px] w-[38px]">
          <div className="flex overflow-hidden flex-col w-[22px]">
            <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[22px]">
              <img loading="lazy" src={icon} alt={`${title} icon`} className="object-contain w-full aspect-square" />
            </div>
          </div>
        </div>
        <div className="grow shrink my-auto text-lg font-semibold text-stone-300 w-[188px]">
          {title}
        </div>
      </div>
    </div>
  );
}