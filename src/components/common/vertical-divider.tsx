import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

export default function VerticalDivider({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"w-px h-full bg-repeat-y",
				styles.verticalDivider,
				className
			)}
		></div>
	);
}
