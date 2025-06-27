import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-white container-fluid min-h-screen">
			<Header />
			<div className="max-w-[1100px] mx-auto px-4">{children}</div>
			<Footer />
		</div>
	);
}
