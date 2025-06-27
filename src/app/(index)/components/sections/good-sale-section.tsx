import GoodSaleBox from "@/app/(index)/components/box/good-sale-box";
import VerticalDivider from "@/components/common/vertical-divider";
import UnderlineLink from "@/components/links/UnderlineLink";
import { Button } from "@/components/ui/button";
import TagPriceDottedIcon from "~/svg/icons/tag-price-dotted.svg";

const prod_data = [
	{
		id: 1,
		title: "Epicka Universal Travel Adapter",
		price: 18,
		originalPrice: 24,
		source: "Amazon",
		image:
			"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		category: "Travel",
	},
	{
		id: 2,
		title: "Levi's Premium 501 Original Fit Women's Jeans",
		price: 59,
		originalPrice: 98,
		source: "Levi's",
		image:
			"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		category: "Fashion",
	},
	{
		id: 3,
		title: "Epicka Universal Travel Adapter",
		price: 18,
		originalPrice: 24,
		source: "Amazon",
		image:
			"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		category: "Travel",
	},
	{
		id: 4,
		title: "Epicka Universal Travel Adapter",
		price: 18,
		originalPrice: 24,
		source: "Amazon",
		image:
			"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		category: "Travel",
	},
];

export default function GoodSaleSection() {
	return (
		<div className="my-8">
			<div className="flex justify-between gap-2 pb-2 mb-4 border-black border-b-3">
				<div className="flex items-center gap-3 text-3xl font-extrabold md:text-4xl">
					<TagPriceDottedIcon className="w-12 h-auto " />
					Very Good Sale
				</div>
				<div className="flex items-center gap-2">
					Very good deals on our favorite Things
					<span className="mx-2">|</span>
					<UnderlineLink href="#" className="text-base">
						See all products →
					</UnderlineLink>
				</div>
			</div>

			<div className="flex items-center gap-8 pt-6">
				{prod_data.map((product, index) => (
					<div key={product.id} className="relative flex-1">
						<GoodSaleBox product={product} />
						{index !== prod_data.length - 1 && (
							<VerticalDivider className="absolute top-0 bottom-0 -right-4 shrink-0" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
