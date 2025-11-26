import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const StackCardBadge = ({ icon, name, className }) => {
  return (
    <Card
      className={cn(
        "relative m-0 flex overflow-hidden max-w-2xl min-w-40 flex-col flex-1 cursor-pointer rounded-sm bg-transparent p-0 border-0",
        className
      )}
    >
      <CardContent
        className={cn(
          "flex gap-2 bg-zinc-900 px-3 py-1 rounded-sm border border-neutral-800 items-center"
        )}
      >
        <div className="flex justify-center items-center w-10 h-10 px-3 rounded-xl bg-zinc-800">
          <div className="flex justify-center items-center text-[#999999]">
            {icon}
          </div>
        </div>

        <div className="grow text-sm font-semibold text-stone-300">{name}</div>
      </CardContent>
    </Card>
  );
};
