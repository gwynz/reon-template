import DailyDeals from "@/app/(index)/components/daily-deals";
import FeaturedArticle from "@/app/(index)/components/featured-article";
import HorizontalDivider from "@/components/common/horizontal-divider";
import VerticalDivider from "@/components/common/vertical-divider";
import UnderlineLink from "@/components/links/UnderlineLink";

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
						<div>
							<FeaturedArticle />
						</div>
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
