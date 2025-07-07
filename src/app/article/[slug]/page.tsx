import UnstyledLink from "@/components/links/UnstyledLink";
import { ArrowLeft, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TitleSection from "@/components/common/title-section";
import HorizontalDivider from "@/components/common/horizontal-divider";
import GoodSaleSection from "@/app/article/[slug]/components/sections/good-sale-section";
import ProductBox from "@/app/article/[slug]/components/box/product-box";
import VerticalDivider from "@/components/common/vertical-divider";

const authors = [
	{
		name: "Christine Cyr Clisset",
		role: "Special Projects Director",
		avatar:
			"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
		bio: "Christine Cyr Clisset is the special projects director for Wirecutter, and co-host of The Wirecutter Show podcast. She previously edited cookbooks and craft books for Martha Stewart Living Omnimedia, and she started reviewing kitchen gear back in 2013. She sews many of her own clothes, which has made her obsessive about high-quality fabrics—whether in a dress or bedsheets.",
	},
	{
		name: "Caira Blackwell",
		role: "Senior Staff Writer",
		avatar:
			"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
		bio: "Caira Blackwell is a senior staff writer covering sleep, and co-host of our podcast, The Wirecutter Show. She has spent countless hours testing more than 50 mattresses and has slept on nearly a dozen at home. Her work has been published in Nylon magazine, Okayplayer, and Narratively. When she isn't busy sleeping (for work), she's busy trying new recipes in the kitchen or reading in the sun.",
	},
	{
		name: "Rosie Guerin",
		role: "Creative Executive",
		avatar:
			"https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100",
		bio: "Rosie Guerin is a creative executive, an editor, a showrunner, and a producer foremost, with a background in news and politics and a great love of pop culture. She specializes in new-show development and has produced for television and radio, and she now resides in the world of podcasting as the executive producer and co-host of the brand-new podcast, The Wirecutter Show. She has developed and produced shows for Apple, Audible, Gimlet, New York Public Radio, Spotify, Wondery, and beyond. Rosie is from Maine and especially loves the beach in winter.",
	},
];

const relatedArticles: Article[] = [
	{
		id: 1,
		title: "The Best Air Conditioner",
		excerpt:
			"We've spent more testing window ACs to find the coolest, quietest options for your home.",
		image:
			"https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=200",
	},
	{
		id: 2,
		title: "The Best Portable Air Conditioner",
		excerpt:
			"A good portable AC is hard to find, but we can provide your best option when a window unit isn't right.",
		image:
			"https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=200",
	},
	{
		id: 3,
		title: "The Best Ductless Mini Split Air Conditioner",
		excerpt:
			"Ductless mini-split systems are a great way to add cooling capacity after encountering ducting, maintenance, and temperature with systems of their size.",
		image:
			"https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=200",
	},
	{
		id: 4,
		title: "With Air Conditioners, Bigger Could Actually Be Worse",
		excerpt:
			"When it comes to cooling your home, you might think cooling is best for air* balance heat and humidity.",
		image:
			"https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=200",
	},
	{
		id: 5,
		title: "How to Keep Your Home Cool",
		excerpt:
			"Beat the heat with perfect recommendations for keeping cool, from window fans to tower fans and beyond.",
		image:
			"https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=200",
	},
];

const relatedProducts: Product[] = [
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
];

const ArticlePage = () => {
	return (
		<div>
			{/* Breadcrumb */}
			<div className="border-b">
				<div className="px-3 py-3 mx-auto">
					<div className="flex items-center space-x-2 text-sm text-gray-600">
						<UnstyledLink
							href="#"
							className="flex items-center gap-1 hover:underline"
						>
							<ArrowLeft className="w-4 h-4" />
							<span>Health & Lifestyle</span>
						</UnstyledLink>
					</div>
				</div>
			</div>

			<article className="py-8">
				{/* Article Header */}
				<header className="mb-4">
					<div className="flex items-center justify-between">
						<div className="relative flex-1">
							<h1 className="mb-2 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
								Optimize Your AC
							</h1>
							<div className="flex items-center justify-between mb-6">
								<div className="text-sm text-gray-600">
									<span>Published June 19, 2024</span>
								</div>
							</div>
							<VerticalDivider className="absolute top-0 bottom-0 right-0 shrink-0" />
						</div>
						<div className="px-8 text-lg">
							<div>
								<span className="mr-1 font-semibold">
									{relatedProducts.length}
								</span>
								{`items in this article`}
							</div>
							<div>
								<span className="mr-1 font-semibold text-red-400">{1}</span>
								{`item on sale!`}
							</div>
						</div>
					</div>
				</header>

				<div className="flex items-center space-x-2">
					<div className="flex -space-x-2">
						{authors.slice(0, 3).map((author, index) => (
							<img
								key={index}
								src={author.avatar}
								alt={author.name}
								className="w-8 h-8 border-2 border-white rounded-full"
							/>
						))}
					</div>
					<div className="text-sm text-gray-600">
						<span className="font-semibold">
							By Christine Cyr Clisset, Caira Blackwell, Thom Dunn and Liam
							McCabe
						</span>
					</div>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none">
					<p className="mb-6 text-xl leading-relaxed text-gray-700">
						<strong>Listen and follow The Wirecutter Show</strong>
					</p>

					<p className="mb-6">
						With record-breaking heat on the rise and energy costs soaring,
						keeping your home cool without breaking the bank has become more
						important than ever.
					</p>

					<p className="mb-6">
						On this week's Wirecutter Show episode, we explore strategies to
						optimize your air conditioning, as well as practical ways to keep
						the heat out even if you don't have air conditioning.
					</p>

					<p className="mb-6">
						Senior staff writer Liam McCabe reveals how a heat pump can cut your
						energy bill while it also keeps cool and heats a home year-round.
					</p>

					<p>
						We reveal useful information about the recent Midea T air
						conditioner recall.
					</p>
				</div>

				<HorizontalDivider className="my-8" />

				{/* product section */}
				<div className="mb-8">
					<TitleSection title="Products" className="mb-4" />
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{relatedProducts.map((product, index) => (
							<div key={index} className="relative">
								<ProductBox product={product} />
								{index !== relatedProducts.length - 1 && (
									<VerticalDivider className="absolute top-0 bottom-0 -right-6 shrink-0" />
								)}
							</div>
						))}
					</div>
				</div>
				<HorizontalDivider className="my-8" />

				{/* Newsletter signup */}
				<div className="p-6 mb-12 text-black bg-yellow-50">
					<h3 className="mb-2 text-xl font-bold">Get today's recommendation</h3>
					<p className="mb-4">
						Every week, we'll send you the weekend's best recommendations, along
						with a few behind-the-scenes notes from our editors.
					</p>
					<Button variant="tag" className="rotate-0">
						Subscribe
					</Button>
				</div>

				{/* GoodSaleSection */}
				<GoodSaleSection />

				<HorizontalDivider className="my-8" />

				{/* Additional Reading */}
				<section className="mb-12">
					<TitleSection title="Additional reading" className="mb-8" />

					<div className="space-y-6">
						{relatedArticles.map((article, index) => (
							<div key={index} className="flex space-x-4 cursor-pointer group">
								<div className="flex-1">
									<h3 className="text-3xl font-semibold text-gray-900 transition-colors group-hover:shadow-underline">
										{article.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-gray-600">
										{article.excerpt}
									</p>
								</div>
								<div className="flex-shrink-0 overflow-hidden bg-gray-100 w-60 h-60">
									<img
										src={article.image}
										alt={article.title}
										className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90"
									/>
								</div>
							</div>
						))}
					</div>

					<div className="flex">
						<Button variant="line" className="mt-4">
							See all articles →
						</Button>
					</div>
				</section>
			</article>
		</div>
	);
};

export default ArticlePage;
