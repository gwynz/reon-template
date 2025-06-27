import { cn } from "@/lib/utils";
import "./divider.scss";

export default function HorizontalDivider({
	className,
}: {
	className?: string;
}) {
	return (
		<div className={cn("h-px bg-repeat-x horizontal-divider", className)}></div>
	);
}
