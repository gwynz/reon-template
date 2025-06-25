"use client";
import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

import TextButton from "@/components/buttons/TextButton";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	React.useEffect(() => {
		// eslint-disable-next-line no-console
		console.error(error);
	}, [error]);

	return <div>Oops, something went wrong!</div>;
}
