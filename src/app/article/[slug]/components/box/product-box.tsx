import { Button } from "@/components/ui/button";

type ProductBoxProps = {
	product: Product;
};

export default function productBox({ product }: ProductBoxProps) {
	return (
		<div className="flex cursor-pointer group">
			<div className="w-[200px]">
				<img
					src={product.image}
					alt={"Product image"}
					className="object-cover w-full aspect-square group-hover:opacity-90"
				/>
			</div>
			<div className="px-4">
				<h3 className="text-xl font-semibold text-gray-900 group-hover:shadow-underline">
					{product.title}
				</h3>
				<div className="flex items-center my-3 space-x-2">
					<span className="text-xl font-bold text-c-green">
						{product.price}$
					</span>
					<span className="text-sm text-gray-500 line-through">
						{product.originalPrice}$
					</span>
				</div>
				<Button variant="line">
					{/* {<span className="-mr-1 text-gray-700 line-through">$128</span>}  */}
					Buy At {product.source}
				</Button>
			</div>
		</div>
	);
}
