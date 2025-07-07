import ArticleListBox from "@/app/articles/components/box/article-list-box";
import TitleSection from "@/components/common/title-section";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const articles: Article[] = [
	{
		id: 1,
		title: "Fero 6 Wi-Fi Router",
		image:
			"https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=600",
		category: "Tech",
	},
	{
		id: 2,
		title: "Epicka Universal Travel Adapter",
		image:
			"https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Travel",
	},
	{
		id: 3,
		title: "Levi's Premium 501 Original Fit Women's Jeans",
		image:
			"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Fashion",
	},
	{
		id: 4,
		title: "Epicka Universal Travel Adapter",
		image:
			"https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Travel",
	},
	{
		id: 5,
		title: "Levi's Premium 501 Original Fit Women's Jeans",
		image:
			"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Fashion",
	},
	{
		id: 6,
		title: "Epicka Universal Travel Adapter",
		image:
			"https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Travel",
	},
	{
		id: 7,
		title: "Levi's Premium 501 Original Fit Women's Jeans",
		image:
			"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Fashion",
	},
];

export default function ArticlesPage() {
	return (
		<div className="py-8">
			<TitleSection
				title="Latest articles"
				className="mb-8"
				rightComponent={
					<Input
						className="w-full max-w-[300px]"
						type="text"
						placeholder="Find anything"
						rightIcon={Search}
						rightIconClassName="text-yellow-500"
					/>
				}
			/>
			<div className="grid gap-12 lg:grid-cols-3">
				{articles.map((article, index) => (
					<div key={index} className="relative">
						<ArticleListBox article={article} />
					</div>
				))}
			</div>
		</div>
	);
}
