import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [], highlights = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Venu Gopal Avula</title>
				<meta name="author" content="Name" />
			</Head>
			<div className={styles.aboutContent}>
				<h1>About Me</h1>
				<div className={styles.aboutBody}>
					{aboutData.length > 0 ? (
						aboutData.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					) : (
						<p>No information available at the moment.</p>
					)}
				</div>

				{/* Key Highlights Section */}
				<div className={styles.highlights}>
					{/* <h2>Key Highlights</h2> */}
					<ul>
						{highlights.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.sidebar}>
				{/* <QuickLinks /> */}
				<img src="/img/Pic1.jpg" alt="Profile" />
			</div> 
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
	  "I am Venu Gopal Avula, a seasoned Data Architect with over 20 years of end-to-end IT experience spanning administration, analysis, design, development, testing, and implementation of enterprise business applications. I specialize in architecting scalable, secure, and high-performance data platforms across industries including Telecom, Oil & Gas, Manufacturing, Healthcare, Finance, Insurance, Mining, and Entertainment. My core expertise lies in SAP BW/BI, HANA, BW4HANA, BO, and cloud data architectures on Azure and AWS, with a proven track record of delivering robust data warehousing, reporting, and analytics solutions that directly support business strategy and decision-making.",	
	  "Throughout my career, I have led complex, full-lifecycle BI and data projects—from requirements gathering, process and data modeling, and system design, through build, testing, user training, go-live, and post-implementation support. I bring deep hands-on experience in HANA data modeling (Attribute, Analytic, and Calculation Views), InfoProviders, BW models, ETL design, and performance optimization, as well as migration of large-scale data warehouses from legacy platforms such as Teradata and Hadoop to modern cloud environments. I am particularly focused on building data foundations that enable predictive analytics, real-time reporting, and self-service BI at scale.",
	  "In my roles as Senior SAP BI/BW HANA Lead Consultant and Big Data & AWS BI Analytics Architect, I have successfully driven cloud migration initiatives, integrated machine learning and AI-backed analytical workloads, and collaborated closely with business stakeholders, data scientists, and global delivery teams. I am adept at bridging the gap between technology and business, translating complex analytical requirements into practical, maintainable solutions that enhance transparency, governance, and data-driven culture across the organization.",
	  "I hold certifications including AWS Certified Solutions Architect – Associate and Microsoft Azure Fundamentals (AZ-900), alongside formal training in predictive analytics and ARIS-based process modeling. I remain committed to continuous learning in cloud data platforms, modern BI, and advanced analytics, with a strong focus on delivering data architectures that are future-ready, trusted, and aligned with enterprise objectives."
	];



		const highlights = [
  "20+ years of extensive IT experience specializing in SAP BW, BW/4HANA, HANA Modeling, Enterprise Data Warehousing, and Business Intelligence solutions.",
  "Expert in architecting large-scale data platforms, analytics ecosystems, and cloud-integrated BI landscapes across AWS, Azure, and on-premise environments.",
  "Strong background in SAP BW/4HANA, HANA native modeling, Calculation Views, ETL design, SLT replication, BODS, and enterprise reporting with SAP BO.",
  "Proven track record in executing full lifecycle SAP BI implementations—from blueprinting and data modeling to testing, deployment, and post-production support.",
  "Experienced in migrating legacy platforms such as Teradata, Oracle, and Hadoop ecosystems into modern cloud and HANA-based data architectures.",
  "Skilled in cross-functional leadership, collaborating closely with business stakeholders, data scientists, and global delivery teams to enable data-driven decision-making.",
  "Highly proficient in performance optimization, data governance, complex InfoProvider modeling, and building scalable, future-proof analytical foundations.",
  "Hands-on expertise in cloud data engineering, including AWS data services, Azure fundamentals, and integration of Big Data components such as Hadoop and Spark.",
  "Strong command of ETL orchestration, process chains, workflow automation, and enterprise-level data consolidation strategies.",
  "Recognized for delivering high-quality BI solutions that improve reporting efficiency, enhance data visibility, and support enterprise digital transformation initiatives."
];




		return {
			props: { aboutData, highlights },
		};
	} catch (error) {
		console.error("Error fetching about data:", error);
		return {
			props: { aboutData: [], highlights: [] },
		};
	}
}
