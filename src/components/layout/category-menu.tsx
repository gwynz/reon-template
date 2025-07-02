"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import HorizontalDivider from "@/components/common/horizontal-divider";

const categories = [
	{
		title: "Sales",
		color: "bg-yellow-300",
		items: [
			"By Recipient",
			"By Interest",
			"By Budget",
			"By Occasion",
			"The Gift Scout",
		],
	},
	{
		title: "Gift Guides",
		color: "bg-orange-300",
		items: [
			"By Recipient",
			"By Interest",
			"By Budget",
			"By Occasion",
			"The Gift Scout",
		],
	},
	{
		title: "Beauty",
		color: "bg-pink-300",
		items: [
			"Bath + Body",
			"Fragrance",
			"Grooming",
			"Hair",
			"Makeup",
			"Skin-Care",
		],
	},
	{
		title: "Home",
		color: "bg-orange-300",
		items: [
			"Air Quality",
			"Bathroom",
			"Cleaning",
			"Decor",
			"Furniture",
			"Organization",
			"Sleep",
		],
	},
	{
		title: "Kitchen & Dining",
		color: "bg-green-300",
		items: [
			"Appliances",
			"Baking",
			"Coffee + Tea",
			"Cookware",
			"Food Storage",
			"Kitchen Tools",
			"Tableware",
		],
	},
	{
		title: "Electronics",
		color: "bg-blue-300",
		items: [
			"Audio",
			"Cameras",
			"Computers",
			"Gaming",
			"Phones",
			"Smart Home",
			"TV + Streaming",
		],
	},
	{
		title: "Fashion",
		color: "bg-purple-300",
		items: ["Accessories", "Bags", "Clothing", "Jewelry", "Shoes", "Watches"],
	},
	{
		title: "Health & Lifestyle",
		color: "bg-teal-300",
		items: [
			"Fitness",
			"Health",
			"Mental Health",
			"Nutrition",
			"Outdoor",
			"Travel",
			"Wellness",
		],
	},
	{
		title: "Tech",
		color: "bg-indigo-300",
		items: ["Laptops", "Tablets", "Accessories", "Software", "Gadgets"],
	},
	{
		title: "Baby & Kid",
		color: "bg-pink-300",
		items: ["Baby Gear", "Toys", "Kids Clothing", "School Supplies", "Safety"],
	},
	{
		title: "Style",
		color: "bg-rose-300",
		items: ["Men's Fashion", "Women's Fashion", "Accessories", "Seasonal"],
	},
	{
		title: "Gifts",
		color: "bg-emerald-300",
		items: [
			"Holiday Gifts",
			"Birthday Gifts",
			"Wedding Gifts",
			"Corporate Gifts",
		],
	},
	{
		title: "Deals",
		color: "bg-red-300",
		items: ["Daily Deals", "Weekly Sales", "Clearance", "Limited Time"],
	},
];
const CategoryMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<div className="p-1 cursor-pointer" onClick={() => setIsOpen(true)}>
					<Menu className="w-8 h-8 text-black" />
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className="w-96 max-h-[calc(100vh-220px)] overflow-y-auto shadow-[5px_5px_rgb(1,1,1)]"
				align="start"
				side="bottom"
				sideOffset={-50}
				alignOffset={-10}
			>
				<div className="space-y-4">
					<div className="sticky top-0 z-50 mb-4 bg-white">
						<div
							className="p-4 cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							<X className="w-8 h-8 text-c-yellow" />
						</div>
						<HorizontalDivider />
					</div>
					{categories.map((category, index) => (
						<div key={index} className="space-y-2">
							{/* Category header with colored badge */}
							<div className="flex items-center px-2 space-x-3">
								<div
									className={cn(
										`${category.color}`,
										`text-black px-6 py-3 font-bold text-base transform`,
										index % 3 ? "-rotate-1" : index % 2 ? "rotate-1" : ""
									)}
								>
									{category.title}
								</div>
							</div>

							{/* Category items */}
							{category.items.length > 0 && (
								<div className="ml-4 space-y-1">
									{category.items.map((item, itemIndex) => (
										<div key={itemIndex}>
											<DropdownMenuItem className="px-2 py-1 text-sm text-black cursor-pointer">
												{item}
											</DropdownMenuItem>
											{itemIndex < category.items.length - 1 && (
												<div className="my-1 ml-2 border-b border-gray-300 border-dotted"></div>
											)}
										</div>
									))}
								</div>
							)}

							{/* Dotted separator between categories */}
							{index < categories.length - 1 && <HorizontalDivider />}
						</div>
					))}
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default CategoryMenu;
