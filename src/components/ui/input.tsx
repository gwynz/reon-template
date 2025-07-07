import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
	leftIcon?: LucideIcon;
	rightIcon?: LucideIcon;
	leftIconClassName?: string;
	rightIconClassName?: string;
}

function Input({
	className,
	type,
	leftIcon: LeftIcon,
	rightIcon: RightIcon,
	leftIconClassName,
	rightIconClassName,
	...props
}: InputProps) {
	return (
		<div className={cn("relative flex items-center gap-2", className)}>
			{LeftIcon && (
				<LeftIcon
					className={cn(
						"absolute left-3 h-4 w-4 text-muted-foreground cursor-pointer",
						props.disabled && "opacity-50",
						leftIconClassName
					)}
				/>
			)}
			<input
				type={type}
				data-slot="input"
				className={cn(
					"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-none border bg-transparent px-3 py-1 text-base transition-[color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					"outline-none shadow-none focus:border-black focus:border-dotted ring-0",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					LeftIcon && "pl-9", // Add padding for left icon
					RightIcon && "pr-9", // Add padding for right icon
					"shadow-[inset_2px_2px_3px_0_rgba(0,0,0,0.13)]"
				)}
				{...props}
			/>
			{RightIcon && (
				<RightIcon
					className={cn(
						"absolute right-3 h-4 w-4 text-muted-foreground cursor-pointer",
						props.disabled && "opacity-50",
						rightIconClassName
					)}
				/>
			)}
		</div>
	);
}

export { Input };
