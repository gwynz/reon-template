"use client";
import * as React from "react";

export default function Error({
	error,
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
