import React from "react";
import { Button } from "@/components/ui/button";
import HorizontalDivider from "@/components/common/horizontal-divider";
import TagSaleIcon from "~/svg/icons/tag-sale.svg";
import { cn } from "@/lib/utils";

const DailyDeals = () => {
	const deals = [
		{
			title: "Fero 6 Wi-Fi Router",
			price: "$65",
			originalPrice: "$75",
			source: "from Amazon",
			note: "(one unit)",
			image:
				"https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=600",
			category: "Tech",
		},
		{
			title: "Epicka Universal Travel Adapter",
			price: "$18",
			originalPrice: "$24",
			source: "from Amazon",
			note: "(3 USB-C, 2 USB-A port model)",
			dealNote: "(deal on black)",
			image:
				"https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200",
			category: "Travel",
		},
		{
			title: "Levi's Premium 501 Original Fit Women's Jeans",
			price: "$59",
			originalPrice: "$98",
			source: "from Levi's",
			note: "Free Red Tab membership required",
			dealNote: "(deal on medium or black washes)",
			image:
				"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=200",
			category: "Fashion",
		},
	];

	return (
		<div className="pl-6">
			<div className="flex items-center gap-2 pb-2 mb-6 border-black border-b-3">
				<TagSaleIcon className="w-12 h-auto" />
				<h2 className="text-2xl font-bold text-black ">Daily deals</h2>
			</div>

			<p className="mb-4 text-sm text-gray-600">
				Price drops on products we already love
			</p>

			<div className="space-y-4">
				{deals &&
					deals.length > 0 &&
					deals.slice(0, 1).map((deal, index) => (
						<div key={index}>
							<div className="cursor-pointer group">
								{/* Product image */}
								<div className="p-3 mx-auto mb-4 overflow-hidden border border-black border-dashed rounded-full max-w-80">
									<img
										src={deal.image}
										alt={deal.title}
										className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
									/>
								</div>

								{/* Product info */}
								<div className="space-y-2 text-center">
									<div className="mx-auto font-semibold tracking-widest text-gray-700 w-fit shadow-underline">
										{deal.category}
									</div>
									<h3 className="font-semibold text-black transition-colors">
										<span className="group-hover:shadow-underline">
											{deal.title}
										</span>
									</h3>

									<div className="flex items-center justify-center space-x-2">
										<span className="text-lg font-bold text-c-green">
											{deal.price}
										</span>
										<span className="text-sm text-gray-500 line-through">
											{deal.originalPrice}
										</span>
										<span className="text-sm text-gray-600">{deal.source}</span>
									</div>

									{deal.note && (
										<p className="text-sm text-gray-600">{deal.note}</p>
									)}
								</div>
							</div>
							<HorizontalDivider className="pl-8 mt-3" />
						</div>
					))}
				{deals &&
					deals.length > 2 &&
					deals.slice(1).map((deal, index) => (
						<div key={index}>
							<div className="cursor-pointer group">
								{/* Product image */}
								<div className="mx-auto mb-4 overflow-hidden transition group-hover:scale-101">
									<img
										src={deal.image}
										alt={deal.title}
										className={cn(
											"object-cover transition-opacity w-full h-full transform aspect-square group-hover:opacity-90",
											index % 2
												? "rotate-1 group-hover:-rotate-1"
												: "group-hover:rotate-1"
										)}
									/>
								</div>

								{/* Product info */}
								<div className="space-y-2 text-center">
									<div className="mx-auto font-semibold tracking-widest text-gray-700 w-fit shadow-underline">
										{deal.category}
									</div>
									<h3 className="font-semibold text-black transition-colors">
										<span className="group-hover:shadow-underline">
											{deal.title}
										</span>
									</h3>

									<div className="flex items-center justify-center space-x-2">
										<span className="text-lg font-bold text-c-green">
											{deal.price}
										</span>
										<span className="text-sm text-gray-500 line-through">
											{deal.originalPrice}
										</span>
										<span className="text-sm text-gray-600">{deal.source}</span>
									</div>

									{deal.note && (
										<p className="text-sm text-gray-600">{deal.note}</p>
									)}
								</div>
							</div>
							<HorizontalDivider className="pl-8 mt-3" />
						</div>
					))}
			</div>
			<div className="flex justify-center mt-6">
				<Button variant="line" className="mx-auto">
					See all 94 deals →{" "}
				</Button>
			</div>
			{/* <button className="flex items-center mt-8 space-x-2 text-blue-600 transition-colors border-b border-blue-600 hover:text-blue-800 hover:border-blue-800">
				<span>See all 94 deals</span>
				<ExternalLink className="w-4 h-4" />
			</button> */}
		</div>
	);
};

export default DailyDeals;
