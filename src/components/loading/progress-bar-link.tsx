"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, startTransition } from "react";

import { useProgressBar } from "./progress-bar";
import { cn } from "@/lib/utils";

export default function ProgressBarLink({
	href,
	children,
	className,
}: {
	href: string;
	children: ReactNode;
	className?: string;
}) {
	const router = useRouter();
	const { start, done } = useProgressBar();

	return (
		<Link
			onClick={(e) => {
				e.preventDefault();
				start();

				startTransition(() => {
					done();
					router.push(href);
				});
			}}
			href={href}
			className={cn(className, "cursor-pointer")}
		>
			{children}
		</Link>
	);
}
