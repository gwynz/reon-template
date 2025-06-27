import HorizontalDivider from "@/components/common/horizontal-divider";
import VerticalDivider from "@/components/common/vertical-divider";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import React from "react";
import "./featured-article.scss";

const FeaturedArticle = () => {
	return (
		<article>
			{/* Featured image */}
			<div className="cursor-pointer group">
				<div className="relative mb-8">
					<div className="bg-transparent border border-black p-8 min-h-[400px] flex items-center justify-center">
						<div className="w-full h-full transition-transform duration-300 transform rotate-0 bg-white shadow-lg group-hover:rotate-2 group-hover:scale-105">
							<img
								src="https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="Modern bathroom with shower"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>

				{/* Article content */}
				<div className="space-y-4">
					<h1 className="text-3xl font-bold text-black md:text-4xl">
						<span className="group-hover:shadow-underline">
							Chiếc Rèm Tắm Khiến Căn Nhà Của Tôi Nổi Bật
						</span>
					</h1>

					<div className="flex items-center space-x-2 text-sm text-gray-600">
						<span>by</span>
						<span className="font-semibold text-black">Ivy Elrod</span>
					</div>

					<p className="max-w-2xl mb-0 text-lg text-gray-700">
						Phòng tắm của tôi đã từ một điểm yếu trở thành một điểm nhấn nổi bật
						sau khi tôi nâng cấp lên chiếc rèm dài hơn này, vượt trội hơn hẳn so
						với giá trị của nó. Dưới đây là cách một thay đổi đơn giản đã biến
						đổi toàn bộ không gian và thu hút sự chú ý của mọi người mua tiềm
						năng.
					</p>
				</div>
			</div>
			<div className="pt-6 mt-6">
				<HorizontalDivider className="mb-6" />
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-4">
						<div className="group">
							<div className="mb-2 aspect-square">
								<img
									src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
									alt="Product image"
									className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90 -rotate-1 group-hover:rotate-0 group-hover:scale-101"
								/>
							</div>
							<UnstyledLink href="#">
								<div className="tracking-widest text-gray-700">Furniture</div>
							</UnstyledLink>
							<h3 className="mt-2 font-semibold text-black transition-colors ">
								<span className="group-hover:shadow-underline">
									Epicka Universal Travel Adapter
								</span>
							</h3>
						</div>
						<HorizontalDivider className="my-4" />
						<div>
							<div className="group">
								<div className="mb-2 aspect-square">
									<img
										src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
										alt="Product image"
										className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90 rotate-1 group-hover:rotate-0 group-hover:scale-101"
									/>
								</div>
								<UnstyledLink href="#">
									<div className="tracking-widest text-gray-700">Furniture</div>
								</UnstyledLink>
								<h3 className="mt-2 font-semibold text-black transition-colors ">
									<span className="group-hover:shadow-underline">
										Epicka Universal Travel Adapter
									</span>
								</h3>
							</div>
						</div>
					</div>
					<div className="flex col-span-8">
						<VerticalDivider className="pl-6" />
						<div className="group">
							<div className="mb-2 aspect-square">
								<img
									src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
									alt="Product image"
									className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90 rotate-1 group-hover:rotate-0 group-hover:scale-101"
								/>
							</div>
							<UnstyledLink href="#">
								<div className="tracking-widest text-gray-700">Furniture</div>
							</UnstyledLink>
							<h3 className="mt-2 text-3xl font-semibold text-black transition-colors ">
								<span className="shadow-underline">
									Epicka Universal Travel Adapter
								</span>
							</h3>
							<div className="mt-2 text-gray-700">
								Phòng tắm của tôi đã từ một điểm yếu trở thành một điểm nhấn nổi
								bật sau khi tôi nâng cấp lên chiếc rèm dài hơn này, vượt trội
								hơn hẳn so với giá trị của nó. Dưới đây là cách một thay đổi đơn
								giản đã biến đổi toàn bộ không gian và thu hút sự chú ý của mọi
								người mua tiềm năng.
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Related section */}
			<div className="pt-8 mt-8 border-black border-t-3 ">
				<h3 className="mb-4 text-xl font-bold text-black ">Related</h3>
				<div className="flex flex-col gap-3">
					<div className="flex items-center related-link">
						<UnderlineLink href="#" className="w-fit">
							50(ish) Wirecutter Picks to Glow Up Your Bathroom for $50 or Less
						</UnderlineLink>
					</div>
					<div className="flex items-center related-link">
						<UnderlineLink href="#" className="w-fit">
							The Best Bathroom Rugs and Bath Mats
						</UnderlineLink>
					</div>
					<div className="flex items-center related-link">
						<UnderlineLink href="#" className="w-fit">
							The Best Shower Curtains
						</UnderlineLink>
					</div>
				</div>
			</div>
		</article>
	);
};

export default FeaturedArticle;
