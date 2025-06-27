import React from "react";
import { Button } from "@/components/ui/button";
import HorizontalDivider from "@/components/common/horizontal-divider";
import TagSaleIcon from "~/svg/icons/tag-sale.svg";
import { cn } from "@/lib/utils";
import DealHotTag from "~/svg/icons/deal-hot-tag.svg";
import DailyDealSpecialBox from "@/app/(index)/components/box/daily-deal-special-box";
import DailyDealBox from "@/app/(index)/components/box/daily-deal-box";
const DailyDeals = () => {
	const deals: Product[] = [
		{
			id: 1,
			title: "Fero 6 Wi-Fi Router",
			price: 65,
			originalPrice: 75,
			source: "from Amazon",
			image:
				"https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=600",
			category: "Tech",
		},
		{
			id: 2,
			title: "Epicka Universal Travel Adapter",
			price: 18,
			originalPrice: 24,
			source: "from Amazon",
			image:
				"https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200",
			category: "Travel",
		},
		{
			id: 3,
			title: "Levi's Premium 501 Original Fit Women's Jeans",
			price: 59,
			originalPrice: 98,
			source: "from Levi's",
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

			<p className="mb-12 text-sm text-gray-600">
				Price drops on products we already love
			</p>

			<div className="space-y-4">
				{deals &&
					deals.length > 0 &&
					deals.slice(0, 1).map((deal, index) => (
						<div key={index}>
							<DailyDealSpecialBox product={deal} />
							<HorizontalDivider className="pl-8 mt-3" />
						</div>
					))}
				{deals &&
					deals.length > 2 &&
					deals.slice(1, 3).map((deal, index) => (
						<div key={index}>
							<DailyDealBox product={deal} />
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
