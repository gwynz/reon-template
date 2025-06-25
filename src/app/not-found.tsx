import { Metadata } from "next";
import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

import UnderlineLink from "@/components/links/UnderlineLink";

export const metadata: Metadata = {
	title: "Not Found",
};

export default function NotFound() {
	return <div>Page Not Found</div>;
}
