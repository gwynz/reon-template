import { Button } from "@/components/ui/button";

type GoodSaleBoxProps = {
	product: Product;
};

export default function GoodSaleBox({ product }: GoodSaleBoxProps) {
	return (
		<div className="flex flex-col items-center justify-center cursor-pointer group">
			<div className="p-2 overflow-hidden transition-colors border border-gray-300 rounded-full">
				<img
					src={product.image}
					alt={"Product image"}
					className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
				/>
			</div>
			<Button variant="line" className="z-10 -mt-2 !bg-white">
				{/* {<span className="-mr-1 text-gray-700 line-through">$128</span>}  */}
				Buy At {product.source}
			</Button>
			<span className="mt-1 text-xs font-medium tracking-widest text-gray-700">
				with code: KSPMRLW
			</span>
		</div>
	);
}
