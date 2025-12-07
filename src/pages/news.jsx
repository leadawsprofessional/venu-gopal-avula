import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";

export default function News({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Venu Gopal Avula</title>
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
				title: "Venu Gopal Avula: The Future of Data-Driven Enterprise Intelligent ERP Analytics",
				link: "https://www.dnaindia.com/insights/report-venu-gopal-avula-the-future-of-data-driven-enterprise-intelligent-erp-analytics-3183633/amp",
				image: "img/news1.png",
				content: "In the modern data-driven economy, business organizations are faced with a lot of pressure to convert raw data into actionable intelligence. ERP systems have been in operation as the basic of business operations over many years, but they fail to provide real-time information or prediction. Integration of machine learning technology with enterprise resource planning systems enables businesses to transform their conventional systems into smart operating platforms that create business value. In his current study titled Intelligent ERP Analytics: Machine Learning Applications to Improved Business Intelligence, Venu Gopal Avula offers a more detailed system of combining ML with ERP systems. Avula is the lead in technical direction due to his two-decade experience in the direct industry and geographic experience coupled with the demonstration of how smart ERP analytics can help increase operational efficiency, business growth, and decision-making."
			},
			{
				title: "From Andhra Pradesh to Cloud Architecture: Venu Gopal Avula’s Journey in Data Transformation",
				link: "https://techbullion.com/from-andhra-pradesh-to-cloud-architecture-venu-gopal-avulas-journey-in-data-transformation/",
				image: "img/news2.png",
				content: "In an era defined by digital acceleration, organizations grapple with an overwhelming influx of data, often fragmented across legacy systems, cloud environments, and hybrid infrastructures. The challenge lies not just in storing or processing this data—but in transforming it into a strategic asset that informs real-time decisions, supports innovation, and drives competitive advantage. It is in solving these complexities that professionals like Venu Gopal Avula have become indispensable."
			},
			{
				title: "Shaping Intelligent Enterprise Systems: A Conversation with Venu Gopal Avula on the Future of ERP Analytics",
				link: "https://www.indiehackers.com/post/shaping-intelligent-enterprise-systems-a-conversation-with-venu-gopal-avula-on-the-future-of-erp-analytics-3TR5Wa0Z66gtrrY6O36l",
				image: "img/news3.png",
				content: "Enterprises operate between innovation and information overload as part of the digital economic framework. Every business organization, regardless of size or industry, faces the same challenge—transforming massive amounts of raw data into actionable intelligence. Achieving this transformation demands both technical mastery and strategic foresight. Few professionals embody this balance as seamlessly as Venu Gopal Avula, a seasoned consultant and architect at Zillion Technologies, Virginia, USA."
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
