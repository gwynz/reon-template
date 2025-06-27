import React from "react";

const LatestArticles = () => {
	const articles = [
		{
			title: "Can You Really Disappear Online?",
			category: "Privacy",
			time: "TODAY",
			isNew: true,
		},
		{
			title:
				"Approachable Enough for a Beginner, Versatile Enough for an Expert: The Smart Home Hub That Does It All",
			category: "Smart Home",
			time: "YESTERDAY",
		},
		{
			title: "The Best Roll-Top Dry Bag",
			category: "Outdoor",
			time: "YESTERDAY",
		},
		{
			title: "Our Favorite Ironing Boards",
			category: "Home",
			time: "YESTERDAY",
		},
		{
			title: "How to Keep Your Pet Cool in the Summer Heat",
			category: "Pets",
			time: "YESTERDAY",
		},
		{
			title: "The Best Projectors",
			category: "Electronics",
			time: "YESTERDAY",
		},
		{
			title: "The Coffee Maker That Changed My Morning Routine",
			category: "Kitchen",
			time: "YESTERDAY",
		},
	];

	return (
		<div>
			<div className="pb-2 mb-6 border-black border-b-3 ">
				<h2 className="text-xl font-bold text-black">The latest</h2>
			</div>

			<div className="space-y-6">
				{articles.map((article, index) => (
					<article key={index} className="cursor-pointer group">
						<div>{article.category}</div>
						<h3 className="mb-2 text-lg font-semibold leading-tight text-black transition-colors group-hover:text-c-yellow">
							{article.title}
						</h3>
						<div className="flex items-center space-x-2">
							<span className="text-xs font-medium tracking-wide text-blue-600 uppercase">
								{article.time}
							</span>
							{article.isNew && (
								<span className="px-2 py-1 text-xs text-white bg-red-500 rounded-full">
									NEW
								</span>
							)}
						</div>
					</article>
				))}
			</div>

			<button className="mt-8 font-semibold text-blue-600 transition-colors border-b border-blue-600 hover:text-blue-800 hover:border-blue-800">
				See everything
			</button>
		</div>
	);
};

export default LatestArticles;
