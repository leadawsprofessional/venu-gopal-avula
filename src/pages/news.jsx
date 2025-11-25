import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";

export default function News({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Mohamed Abdul Kadar</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.articleContent}>
				<h1>News</h1>
				<div className={styles.articlelist}>
					{articles.length > 0 ? (
						articles.map((item, index) => (
							<div className={styles.card} key={index}>
								<div className={styles.imageWrapper}>
									<img
										className={styles.cardImage}
										src={item.image}
										alt={`Article: ${item.title}`}
									/>
								</div>
								<div className={styles.cardText}>
									<p className={styles.title}>{item.title}</p>									
									<p className={styles.year}>
										{item.content}
									</p>
									<a href={item.link}>
										<button className={styles.readMoreButton}>
											Read more
										</button>
									</a>
								</div>
							</div>
						))
					) : (
						<p>No articles available at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const articles = [
			{
				title: "Mohamed Abdul Kadar Releases His Thought-Inducing Publication From Data to Decisions – Navigating the AI and Machine Learning Landscape",
				link: "https://www.indiehackers.com/post/mohamed-abdul-kadar-releases-his-thought-inducing-publication-from-data-to-decisions-navigating-the-ai-and-machine-learning-landscape-i5pRVBsiRVlNPDaSTKX6",
				image: "img/news1.png",
				content: "The growing need for AI solutions that integrate both ethical principles and practical implementation methods becomes increasingly important in our automated and algorithmically driven world. Mohamed Abdul Kadar Mohamed Jabarullah bridges the gap between needs and action through his book From Data to Decisions: Navigating the AI and Machine Learning Landscape which delivers crucial knowledge about developing AI systems with technological sophistication and human-centric design.Throughout his near twenty-year career in digital media and advertising technology and telecom and healthcare innovation Abdul Kadar gained multiple viewpoints about AI's most critical issues. Through engineering-based case studies combined with responsible innovation reflections the book shows readers a transparent path to intelligent machine adaptation in society. The book functions beyond technical instruction to present a strategic plan for developing extensive systems which prioritize ethics alongside privacy and resilience while showing that authentic progress requires value-based deployment methods."
			},
			{
				title: "From Ad Tech to AI Ethics: Mohamed Abdul Kadar’s Vision for Responsible Innovation",
				link: "https://techbullion.com/from-ad-tech-to-ai-ethics-mohamed-abdul-kadars-vision-for-responsible-innovation/",
				image: "img/news2.png",
				content: "As digital technologies become more powerful, a troubling gap persists: innovations often outpace our ability to apply them responsibly. From AI algorithms that overlook privacy to automation systems that ignore real-world complexity, too many tech solutions prioritize speed over impact, efficiency over ethics. This disconnect leaves businesses struggling to adopt tools that are both effective and trustworthy. Mohamed Abdul Kadar, a seasoned IT professional in New York’s Digital Media sector, offers a compelling alternative. With nearly two decades of experience, he has built a career on the principle that technology must serve people—not the other way around. His work bridges technical excellence with ethical integrity, turning complex digital systems into practical solutions that drive progress in advertising, healthcare, and beyond—while safeguarding user trust and societal good."
			},
			{
				title: "Engineering Ethical Innovation: Mohamed Abdul Kadar's Role in Shaping the Future of Automation and Responsible AI",
				link: "https://www.dnaindia.com/insights/report-engineering-ethical-innovation-mohamed-abdul-kadar-s-role-in-shaping-the-future-of-automation-and-responsible-ai-3183105",
				image: "img/news3.png",
				content: "The technological revolution that all industries are undergoing today necessitates the development of robust systems that are also ethical to be the hallmark. Mohamed Abdul Kadar is a senior technology executive in New York and leads various technical projects that range in scale to enterprise-level engineering to AI integration and digital advertising and healthcare innovation. Mohamed Abdul Kadar has demonstrated his capacity to lead significant technical initiatives that can resolve global challenges such as privacy concerns and ethical innovation and data security through his twenty-year professional career. In the work of Mohamed Abdul Kadar, one can see the use of complex technology infrastructures to integrate robust engineering and social responsibility to generate enduring benefits to the masses."
			},

		];

		return {
			props: { articles },
		};
	} catch (error) {
		console.error("Error fetching news:", error);
		return {
			props: { articles: [] },
		};
	}
}
