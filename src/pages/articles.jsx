import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Mohamed Abdul Kadar</title>
                <meta name="author" content="Your Name" />
            </Head>
            <div className={styles.articleContent}>
                <h1>Articles</h1>
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
                                    {/* <div className={styles.linkBox}>
										<span>Read Article:</span>
										<Link
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.link}
										</Link>
									</div> */}

                                    <p className={styles.publisher}>
                                        Publisher : {item.publisher}
                                    </p>
                                    <p className={styles.year}>
                                        Year of publication : {item.year}
                                    </p>
                                    <a href={item.link}>
                                        <button
                                            className={styles.readMoreButton}
                                        >
                                            Read Article
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
                title: "MEDAI-GUARD: An Intelligent Software Engineering Framework for Real-time Patient Monitoring Systems",
                link: "https://www.ijrar.org/papers/IJRAR19J6380.pdf",
                year: "2019",
                publisher: "IJRAR",
                image: "img/paper/1.png",
            },
            {
                title: "SecureVeil: A Novel Privacy-Enhancing Technology for Preserving User Autonomy in Digital Ecosystems",
                link: "https://wjarr.com/sites/default/files/WJARR-2019-0135.pdf",
                year: "2019",
                publisher: "WJARR",
                image: "img/paper/2.png",
            },
            {
                title: "Adaptive Neural Traffic Orchestration: AI-Driven Network Optimization for Dynamic Congestion Mitigation",
                link: "https://www.ijrar.org/papers/IJRAR19D6943.pdf",
                year: "2020",
                publisher: "IJRAR",
                image: "img/paper/3.png",
            },
            {
                title: "VITA: Conversational AI Health Assistants' Impact on Patient Engagement and Clinical Workflow Integration",
                link: "https://wjarr.com/sites/default/files/WJARR-2021-0236.pdf",
                year: "2021",
                publisher: "WJARR",
                image: "img/paper/4.png",
            },
            {
                title: "Automated Code Review and Vulnerability Detection Using Graph Neural Networks: Enhancing DevSecOps Workflows",
                link: "https://wjaets.com/sites/default/files/WJAETS-2022-0031.pdf",
                year: "2022",
                publisher: "WJAETS",
                image: "img/paper/5.png",
            },
            {
                title: "Beyond Passive Viewing: Neurophysiological Responses to Interactive Immersive Advertisements in Digital Environments",
                link: "https://gjeta.com/sites/default/files/GJETA-2022-0075.pdf",
                year: "2022",
                publisher: "GJETA",
                image: "img/paper/6.png",
            },
            {
                title: "PredictNet: AI-Enabled Predictive Maintenance System for Telecommunications Infrastructure Reliability",
                link: "https://wjarr.com/sites/default/files/WJARR-2022-0954.pdf",
                year: "2022",
                publisher: "WJARR",
                image: "img/paper/7.png",
            },
            {
                title: "Integrating Large Language Models into Agile Software Development: A 2023 Perspective on Productivity and Code Quality",
                link: "https://welltestingjournal.com/index.php/WT/article/view/198",
                year: "2023",
                publisher: "Well Testing Journal",
                image: "img/paper/8.png",
            },
            {
                title: "TrustChain: Blockchain-Based Verification Framework for Transparent Advertisement Attribution and Consumer Trust",
                link: "https://wjaets.com/sites/default/files/WJAETS-2023-0093.pdf",
                year: "2023",
                publisher: "WJAETS",
                image: "img/paper/9.png",
            },
            {
                title: "Harnessing Generative Models for Synthetic Medical Data: Balancing Innovation with Ethical and Regulatory Compliance",
                link: "https://welltestingjournal.com/index.php/WT/article/view/199",
                year: "2024",
                publisher: "Well Testing Journal",
                image: "img/paper/10.png",
            },
            {
                title: "Next-Generation AI-Powered Content Personalization: Adaptive Generation Models for Real-Time User Engagement",
                link: "https://welltestingjournal.com/index.php/WT/article/view/195",
                year: "2025",
                publisher: "Well Testing Journal",
                image: "img/paper/11.png",
            },
        ];

        return {
            props: { articles },
        };
    } catch (error) {
        console.error("Error fetching articles:", error);
        return {
            props: { articles: [] },
        };
    }
}
