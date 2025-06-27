import DailyDeals from "@/app/(index)/components/sections/head-daily-deals";
import HorizontalDivider from "@/components/common/horizontal-divider";
import VerticalDivider from "@/components/common/vertical-divider";
import UnderlineLink from "@/components/links/UnderlineLink";
import style from "../../style.module.scss";
import { cn } from "@/lib/utils";
import HeadArticleBox from "@/app/(index)/components/box/head-article-box";

const featuredArticle = {
	id: 1,
	title: "Chiếc Rèm Tắm Khiến Căn Nhà Của Tôi Nổi Bật",
	date: "JUNE 24, 2024",
	author: "Wirecutter Staff",
	image:
		"https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&w=600",
	category: "Fashion",
	description: `Phòng tắm của tôi đã từ một điểm yếu trở thành một điểm nhấn nổi bật
						sau khi tôi nâng cấp lên chiếc rèm dài hơn này, vượt trội hơn hẳn so
						với giá trị của nó. Dưới đây là cách một thay đổi đơn giản đã biến
						đổi toàn bộ không gian và thu hút sự chú ý của mọi người mua tiềm
						năng.`,
};

const featuredArticle2 = {
	id: 2,
	title: "Epicka Universal Travel Adapter",
	date: "JUNE 24, 2024",
	author: "Wirecutter Staff",
	image:
		"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	category: "Travel",
	description: `Phòng tắm của tôi đã từ một điểm yếu trở thành một điểm nhấn nổi bật
						sau khi tôi nâng cấp lên chiếc rèm dài hơn này, vượt trội hơn hẳn so
						với giá trị của nó. Dưới đây là cách một thay đổi đơn giản đã biến
						đổi toàn bộ không gian và thu hút sự chú ý của mọi người mua tiềm
						năng.`,
};

export default function HeadSection() {
	return (
		<div>
			{/* Disclaimer banner */}
			<div className="bg-white">
				<div className="py-3 ">
					<p className="text-sm">
						Shopping the Internet Smartly | Every product is independently
						selected by (obsessive) editors, whom you can read about{" "}
						{<UnderlineLink href="#">here</UnderlineLink>}. Things you buy
						through our links may earn us a commission.{" "}
						<UnderlineLink href="#">Learn more →</UnderlineLink>
					</p>
				</div>
			</div>
			<HorizontalDivider />

			{/* Main content */}
			<main className="pt-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
					{/* Featured article */}
					<section className="order-1 lg:col-span-8 lg:order-2">
						<article>
							{/* Featured image */}
							<HeadArticleBox size="lg" article={featuredArticle} />
							<div className="pt-6 mt-6">
								<HorizontalDivider className="mb-6" />
								<div className="grid grid-cols-12 gap-6">
									<div className="col-span-4">
										<HeadArticleBox
											imageClassName="group-hover:-rotate-2"
											size="sm"
											article={featuredArticle2}
										/>
										<HorizontalDivider className="my-4" />
										<HeadArticleBox size="sm" article={featuredArticle2} />
									</div>
									<div className="flex col-span-8">
										<VerticalDivider className="pl-6" />
										<HeadArticleBox size="md" article={featuredArticle2} />
									</div>
								</div>
							</div>
							{/* Related section */}
							<div className="pt-8 mt-8 border-black border-t-3 ">
								<h3 className="mb-4 text-xl font-bold text-black ">Related</h3>
								<div className="flex flex-col gap-3">
									<div className={cn("flex items-center", style.relatedLink)}>
										<UnderlineLink href="#" className="w-fit">
											50(ish) Wirecutter Picks to Glow Up Your Bathroom for $50
											or Less
										</UnderlineLink>
									</div>
									<div className={cn("flex items-center", style.relatedLink)}>
										<UnderlineLink href="#" className="w-fit">
											The Best Bathroom Rugs and Bath Mats
										</UnderlineLink>
									</div>
									<div className={cn("flex items-center", style.relatedLink)}>
										<UnderlineLink href="#" className="w-fit">
											The Best Shower Curtains
										</UnderlineLink>
									</div>
								</div>
							</div>
						</article>
					</section>

					{/* Daily deals sidebar */}
					<aside className="flex order-3 lg:col-span-4">
						<VerticalDivider />
						<DailyDeals />
					</aside>
				</div>
			</main>
		</div>
	);
}
