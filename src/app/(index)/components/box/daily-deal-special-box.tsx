import DealHotTag from "~/svg/icons/deal-hot-tag.svg";

type DailyDealBoxProps = {
	product: Product;
};

export default function DailyDealSpecialBox({ product }: DailyDealBoxProps) {
	return (
		<div className="relative cursor-pointer group">
			{/* Product image */}
			<DealHotTag className="absolute -top-6 left-0 z-10 w-auto h-auto transform rotate-[-25deg] text-white" />
			<div className="p-3 mx-auto mb-4 overflow-hidden border border-gray-300 rounded-full max-w-80">
				<img
					src={product.image}
					alt={product.title}
					className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
				/>
			</div>

			{/* Product info */}
			<div className="space-y-2 text-center">
				<div className="mx-auto font-semibold tracking-widest text-gray-700 w-fit shadow-underline">
					{product.category}
				</div>
				<h3 className="font-semibold text-black transition-colors">
					<span className="group-hover:shadow-underline">{product.title}</span>
				</h3>

				<div className="flex items-center justify-center space-x-2">
					<span className="text-lg font-bold text-c-green">
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
