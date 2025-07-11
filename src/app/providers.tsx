"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import type * as React from "react";

import { getQueryClient } from "@/lib/react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
