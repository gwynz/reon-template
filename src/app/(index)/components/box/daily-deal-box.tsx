import { cn } from "@/lib/utils";
import DealHotTag from "~/svg/icons/deal-hot-tag.svg";

type DailyDealBoxProps = {
	product: Product;
};

export default function DailyDealBox({ product }: DailyDealBoxProps) {
	return (
		<div className="relative cursor-pointer group">
			{/* Product image */}
			<div className="mx-auto mb-4 overflow-hidden transition group-hover:scale-101">
				<img
					src={product.image}
					alt={product.title}
					className={cn(
						"object-cover transition-opacity w-full h-full transform aspect-square group-hover:opacity-90",
						product.id % 2
							? "rotate-1 group-hover:-rotate-1"
							: "group-hover:rotate-1"
					)}
				/>
			</div>

			{/* Product info */}
			<div className="space-y-2 text-center">
				<div className="mx-auto font-semibold tracking-widest text-gray-700 w-fit shadow-underline">
					{product.category}
				</div>
				<h3 className="font-semibold text-black">
					<span className="group-hover:shadow-underline">{product.title}</span>
				</h3>

				<div className="flex items-center justify-center space-x-2">
					<span className="text-xl font-bold text-c-green">
						{product.price}$
					</span>
					<span className="text-sm text-gray-500 line-through">
						{product.originalPrice}$
					</span>
					<span className="text-sm text-gray-600">{product.source}</span>
				</div>
			</div>
		</div>
	);
}
