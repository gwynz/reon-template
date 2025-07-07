import ProductListBox from "@/app/products/box/product-list-box";

const products: Product[] = [
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

export default function ProductsPage() {
	return (
		<div className="py-8">
			<div className="grid gap-12 lg:grid-cols-3">
				{products.map((product, index) => (
					<div key={index} className="relative">
						<ProductListBox product={product} />
					</div>
				))}
			</div>
		</div>
	);
}
