import { cn } from "@/lib/utils";
import "./divider.scss";

export default function VerticalDivider({ className }: { className?: string }) {
	return (
		<div
			className={cn("w-px h-full bg-repeat-y vertical-divider", className)}
		></div>
	);
}
