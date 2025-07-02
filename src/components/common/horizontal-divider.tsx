import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

export default function HorizontalDivider({
	className,
}: {
	className?: string;
}) {
	return (
		<div
			className={cn("h-px bg-repeat-x", styles.horizontalDivider, className)}
		></div>
	);
}
