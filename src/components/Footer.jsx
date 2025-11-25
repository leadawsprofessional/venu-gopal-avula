import React from "react";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <h1 className={styles.logo}>Mohamed Abdul Kadar</h1>
                    <p className={styles.tagline}>
                    Languages: Java, Python, JavaScript, SQL
                    Frontend: Angular, React (working knowledge), HTML, CSS
                    Backend: Spring Boot, Node.js, Microservices, REST APIs
                    Databases: MySQL, PostgreSQL, MongoDB, Cloud SQL, Firestore
                    Cloud: Google Cloud Platform (GCP), AWS (working knowledge)
                    DevOps & Tools: Jenkins, GitLab CI/CD, GitHub Actions, Docker, Kubernetes, Terraform, Helm, ArgoCD
                    Testing: Selenium, Appium, RestAssured, Karate, Playwright, JUnit, TestNG, Postman
                    Big Data & Messaging: Kafka, Google Pub/Sub, Cloud Tasks
                    Workflow & Automation: CI/CD Pipelines, IaC, Test Automation Frameworks
                    Others: ELK Stack, Prometheus, Grafana, Cloud Monitoring, Agile/Scrum Practices 
                    </p>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.heading}>Connect Me</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.linkedin.com/in/mohamedabdulkadar/">
                            <FaLinkedin />{" "}
                            {/* <span className={styles.linkText}>LinkedIn</span> */}
                        </Link>
                        <Link href="https://www.researchgate.net/profile/Mohamed-Abdul-Kadar-Mohamed-Jabarullah?ev=hdr_xprf">
                            {/* <SiAcademia />  */}
							ResearchGate
                        </Link>
                        <Link href="https://scholar.google.com/citations?hl=en&user=GWgCO9gAAAAJ&authuser=9&scilu=&scisig=ACUpqDcAAAAAaEVFOnSavwhK2T0VjIJC5mT8_BA&gmla=AH8HC4wkrpNjveoAY5p-VdLtj9DA-vVhyvYeIB2nhKw-3B5WxWcreSIsjQDcvJ7hnLfOFALAIHj-_yYOz-XHYlGzFh_nLnLs8O4eDcw&sciund=6366508824389086822&gmla=AH8HC4yiTW0jdbMbvpGvdZolUVTRxMvNitfqGecmXtK3KM4gEod_jwyKKXuMoNz9aDkEb1DW7gCQenvBjw4nOZUgR8yk0y1pkG9xRY40puo&sciund=17620689195893747889&gmla=AH8HC4y1yCu2sS03tORD3zObROWIopicqfMxWXJKNTBau99IbIbiSIzOmqfg-1GIpqLustQ74VKiVQBpuM61-Z6xLAuu5CnADYTigv15yvw&sciund=4130726072484617652&gmla=AH8HC4z8eNL_XdilQvQurLDGtmH59KDHiUZ8p-pdCH5h6e0UzMZRGuIEKAPcezwKzdP4Rq3Xck4KNtYaWCejz8MY-5ohB_Lktp9HOjXld2M&sciund=5655965417567264097">
                            <FaGoogleScholar />{" "}
                            {/* <span className={styles.linkText}> */}
                                {/* Google Scholar */}
                            {/* </span> */}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>
                    &copy; {new Date().getFullYear()} Mohamed Abdul Kadar. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};
