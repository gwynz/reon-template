import { cn } from "@/lib/utils";
import React from "react";

type TitleSectionProps = {
	title: string;
	icon?: React.ElementType;
	rightComponent?: React.ReactNode;
	className?: string;
};

export default function TitleSection({
	title,
	icon: Icon,
	rightComponent,
	className,
}: TitleSectionProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-between border-black border-b-3 pb-2",
				className
			)}
		>
			<div className="flex items-center gap-3 text-3xl font-extrabold text-black md:text-4xl">
				{Icon && <Icon className="h-auto text-black w-14" />}
				{title}
			</div>
			{rightComponent}
		</div>
	);
}
