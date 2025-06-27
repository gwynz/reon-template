import React from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
	return (
		<header className="bg-white sticky top-0 z-50 max-w-[1100px] mx-auto px-4">
			<div className="border-b border-gray-200">
				{/* Top row with search, logo, and user actions */}
				<div className="flex items-center justify-between h-16">
					{/* Search */}
					<div className="flex items-center flex-1 max-w-lg">
						<div className="relative w-full max-w-[350px]">
							<Input
								type="text"
								placeholder="How can we help?"
								rightIcon={Search}
								rightIconClassName="text-yellow-500"
							/>
						</div>
					</div>
					{/* Logo */}
					<div className="flex-shrink-0 mx-8">
						<h1 className="text-3xl font-extrabold text-black font-montserrat">
							REON
						</h1>
					</div>

					{/* User actions */}
					<div className="flex items-center justify-end flex-1 space-x-4">
						<Button variant="outline">Log in</Button>
						<Button variant="tag">Subscribe</Button>
					</div>
				</div>

				{/* Navigation */}
				<nav className="border-t border-gray-100 ">
					<div className="flex items-center justify-center py-4">
						<div className="hidden space-x-8 md:flex">
							{[
								"Home & Garden",
								"Kitchen",
								"Health & Lifestyle",
								"Tech",
								"Baby & Kid",
								"Style",
								"Gifts",
								"Podcast",
								"Deals",
							].map((item) => (
								<a
									key={item}
									href="#"
									className="text-xs font-medium text-black uppercase hover:underline"
								>
									{item}
								</a>
							))}
						</div>
						<button className="md:hidden">
							<Menu className="w-6 h-6 text-gray-600" />
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
