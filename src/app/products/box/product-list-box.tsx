import { cn } from "@/lib/utils";

type ProductListBoxProps = {
	product: Product;
};

export default function ProductListBox({ product }: ProductListBoxProps) {
	return (
		<div className="relative cursor-pointer group">
			{/* Product image */}
			<div className="mx-auto mb-4 overflow-hidden transition border-[3px] border-black group-hover:scale-101">
				<img
					src={product.image}
					alt={product.title}
					className={cn(
						"object-cover transition-opacity w-full h-full transform aspect-square group-hover:opacity-90"
					)}
				/>
			</div>

			{/* Product info */}
			<div className="space-y-2">
				<div className="mx-auto font-semibold tracking-widest text-gray-700 w-fit shadow-underline">
					{product.category}
				</div>
				<h3 className="font-semibold text-black">
					<span className="group-hover:shadow-underline">{product.title}</span>
				</h3>

				<div className="flex items-center space-x-2">
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
