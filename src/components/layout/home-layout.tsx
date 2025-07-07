import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col min-h-screen bg-white container-fluid">
			<Header />
			<div className="max-w-[1100px] mx-auto px-4 flex-1">{children}</div>
			<Footer />
		</div>
	);
}
