"use client";

import { AnimatePresence, motion, useMotionTemplate } from "framer-motion";
import { createContext, ReactNode, useContext } from "react";

import useProgress from "@/hooks/use-progress";

export const ProgressBarContext = createContext<ReturnType<
	typeof useProgress
> | null>(null);

export function useProgressBar() {
	const progress = useContext(ProgressBarContext);

	if (progress === null) {
		throw new Error("Need to be inside provider");
	}

	return progress;
}

export function ProgressBar({ children }: { children: ReactNode }) {
	const progress = useProgress();
	const width = useMotionTemplate`${progress.value}%`;

	return (
		<ProgressBarContext.Provider value={progress}>
			<AnimatePresence onExitComplete={progress.reset}>
				{progress.state !== "complete" && (
					<motion.div
						style={{ width }}
						exit={{ opacity: 0 }}
						className="absolute top-0 h-[3px] shadow-lg shadow-gray-500/20 bg-gray-500 z-40"
					/>
				)}
			</AnimatePresence>

			{children}
		</ProgressBarContext.Provider>
	);
}
