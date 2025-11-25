import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [], highlights = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Mohamed Abdul Kadar</title>
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
  "I am Mohamed Abdul Kadar, a results-driven Technology Leader and Google Cloud Certified Professional Cloud Architect with 17+ years of experience delivering high-quality, scalable cloud-native solutions, robust API-driven microservices, and enterprise-grade test automation frameworks. I specialize in designing and implementing end-to-end CI/CD pipelines, automated testing strategies (web, mobile, API, and backend), and reliable deployment architectures using GCP, Kubernetes, Docker, Jenkins, and infrastructure-as-code. My strength lies in bridging engineering and quality — building resilient automation frameworks, enabling observability and testability, and mentoring teams to adopt best practices in software development, testing, and DevOps. I bring a pragmatic approach to quality engineering, a deep commitment to test coverage and performance, and a proven track record of improving release velocity while maintaining production stability."
];


		const highlights = [
  "Google Cloud Certified Professional Cloud Architect with 17+ years of experience in cloud engineering, automation, DevOps, and end-to-end software quality engineering.",
  "Expert in designing and implementing scalable cloud-native solutions using GCP, Kubernetes, Docker, and microservices-based architectures.",
  "Strong background in building robust automation frameworks for Web, Mobile, API, and E2E testing using Selenium, Appium, RestAssured, Karate, and Playwright.",
  "Proficient in CI/CD pipeline design and automation using Jenkins, GitLab CI, GitHub Actions, Terraform, and Infrastructure-as-Code principles.",
  "Proven ability to streamline release cycles by enhancing automation coverage, integrating shift-left testing, and improving test reliability and quality gates.",
  "Hands-on experience with distributed systems, event-driven architecture, Kafka, Pub/Sub, Cloud Tasks, and asynchronous workflow orchestration.",
  "Adept at implementing observability, logging, monitoring, and alerting using ELK Stack, Prometheus, Grafana, and Cloud Monitoring.",
  "Experienced in Agile delivery, cross-functional team leadership, code reviews, and mentoring teams in quality, automation, and DevOps best practices.",
  "Strong problem-solving mindset with a deep focus on reliability, scalability, performance, and production readiness of enterprise applications.",
  "Recognized for driving engineering excellence, improving build stability, reducing defects, and enabling high-velocity, high-confidence deployments."
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
