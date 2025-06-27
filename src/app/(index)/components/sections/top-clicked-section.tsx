import TopClickedBox from "@/app/(index)/components/box/top-clicked-box";
import TitleSection from "@/components/common/title-section";
import VerticalDivider from "@/components/common/vertical-divider";
import UnderlineLink from "@/components/links/UnderlineLink";
import TagPriceDottedIcon from "~/svg/icons/tag-price-dotted.svg";

const articleData: Article[] = [
	{
		id: 1,
		title: "Chiếc Rèm Tắm Khiến Căn Nhà Của Tôi Nổi Bật",
		date: "JUNE 24, 2024",
		author: "Wirecutter Staff",
		image:
			"https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&w=600",
		category: "Fashion",
	},
	{
		id: 2,
		title: "Epicka Universal Travel Adapter",
		date: "JUNE 24, 2024",
		author: "Wirecutter Staff",
		image:
			"https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Travel",
	},
	{
		id: 3,
		title: "Levi's Premium 501 Original Fit Women's Jeans",
		date: "JUNE 24, 2024",
		author: "Wirecutter Staff",
		image:
			"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=200",
		category: "Fashion",
	},
];

export default function TopClickedSection() {
	return (
		<div className="my-8">
			<TitleSection
				title="Top Clicked Today"
				icon={TagPriceDottedIcon}
				rightComponent={
					<UnderlineLink href="#" className="text-base">
						See all articles →
					</UnderlineLink>
				}
			/>

			<div className="flex items-start gap-16 pt-6">
				{articleData.map((article, index) => (
					<div key={article.id} className="relative flex-1">
						<TopClickedBox article={article} />
						{index !== articleData.length - 1 && (
							<VerticalDivider className="absolute top-0 bottom-0 -right-8 shrink-0" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
