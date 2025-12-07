import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Venu Gopal Avula</title>
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
                title: "Revolutionizing enterprise resource planning: The integration of Artificial Intelligence and machine learning in SAP ecosystem transformation",
                link: "https://wjarr.com/sites/default/files/WJARR-2019-0142.pdf",
                year: "2019",
                publisher: "WJARR",
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
                title: "Intelligent Data Processing at Scale: Leveraging SAP HANA In-Memory Computing with Embedded AI/ML for Real-Time Enterprise Decision Making",
                link: "https://www.ijrar.org/papers/IJRAR19S1839.pdf",
                year: "2020",
                publisher: "IJRAR",
                image: "img/paper/3.png",
            },
            {
                title: "Efficient Feature Store Architectures for Real-time Machine Learning Model Deployment in High-Throughput Systems",
                link: "https://www.ijaresm.com/uploaded_files/document_file/Rahul_ModakFfmP.pdf",
                year: "2020",
                publisher: "IJARESM",
                image: "img/paper/4.png",



            },
            {
                title: "Cloud-Native Analytics Integration: Enhancing Business Intelligence Through SAP Analytics Cloud and Enterprise Data Orchestration",
                link: "https://www.ijaresm.com/uploaded_files/document_file/Venu_Gopal_Avula36Fu.pdf",
                year: "2020",
                publisher: "IJARESM",
                image: "img/paper/5.png",
            },
            {
                title: "Predictive Intelligence in Retail Operations: AI-Powered Forecasting Models for Demand Planning, Customer Behavior Analysis, and Supply Chain Optimization",
                link: "https://wjaets.com/sites/default/files/WJAETS-2021-0074.pdf",
                year: "2021",
                publisher: "WJAETS",
                image: "img/paper/6.png",
            },
            {
                
                title: "Advanced predictive analytics in enterprise systems: Machine learning models for business forecasting and strategic decision support",
                link: "https://wjaets.com/sites/default/files/WJAETS-2022-0078.pdf",
                year: "2022",
                publisher: "WJAETS",
                image: "img/paper/7.png",
            },
            {
                title: "Embedded artificial intelligence capabilities in SAP HANA: Exploring native machine learning functions for enterprise data science applications",
                link: "https://gjeta.com/sites/default/files/GJETA-2023-0033.pdf",
                year: "2023",
                publisher: "GJETA",
                image: "img/paper/8.png",
            },
            {
                title: "Advancing Enterprise Intelligence: Integrating AI-Driven Predictive Analytics within SAP HANA for Real-Time Business Decision Optimization",
                link: "https://welltestingjournal.com/index.php/WT/article/view/197",
                year: "2023",
                publisher: "Well Testing Journal",
                image: "img/paper/9.png",
            },
            {
                title: "Leveraging the convergence of SAP HANA's advanced data management capabilities and generative AI's predictive analytics for next-generation enterprise intelligence",
                link: "https://wjaets.com/sites/default/files/WJAETS-2024-0216.pdf",
                year: "2024",
                publisher: "WJAETS",
                image: "img/paper/10.png",
            },
            {
                title: "Architecting Intelligent Enterprise Applications: AI and ML Convergence within SAP S/4HANA Ecosystem",
                link: "https://welltestingjournal.com/index.php/WT/article/view/196",
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
