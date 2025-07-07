import React from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryMenu from "@/components/layout/category-menu";
import UnstyledLink from "@/components/links/UnstyledLink";

const Header = () => {
	return (
		<header className="bg-white sticky top-0 z-50 max-w-[1100px] mx-auto px-4 w-full">
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
					{/* User actions */}
					<div className="flex items-center justify-end flex-1 space-x-4">
						<Button variant="outline">Log in</Button>
						<Button variant="tag">Subscribe</Button>
					</div>
				</div>

				{/* Navigation */}
				<nav className="border-t border-gray-100 ">
					<div className="flex items-center justify-center py-4">
						<div className="flex items-center justify-between w-full space-x-8">
							{/* Category dropdown menu */}
							<div className="flex items-center gap-2">
								<CategoryMenu />
								<UnstyledLink href="/">
									<h1 className="text-5xl font-extrabold text-black uppercase font-montserrat">
										REON
									</h1>
								</UnstyledLink>
							</div>
							<div className="flex gap-4 justify-end flex-wrap text-[10px]">
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
										className="font-medium text-black uppercase hover:underline"
									>
										{item}
									</a>
								))}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
