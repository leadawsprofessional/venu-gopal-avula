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
                    <h1 className={styles.logo}>Venu Gopal Avula</h1>
                    <p className={styles.tagline}>
                    Languages: SQL, PL/SQL, Python (working knowledge), Shell Scripting
                    Frontend: SAP BO (WebI, Lumira, Dashboards), SAC, Tableau (exposure)
                    Backend: SAP BW, BW/4HANA, HANA Modeling (CV/AV/ATV), ABAP (basic)
                    Databases: SAP HANA, BW/4HANA, Oracle, Teradata, Hadoop (HDFS/Hive)
                    Cloud: AWS (Certified Solutions Architect – Associate), Azure (AZ-900)
                    DevOps & Tools: Git, Jenkins, JIRA, ServiceNow, SAP Solution Manager, Autosys
                    Testing: HP ALM, SAP Test Workbench, Unit & Integration Testing
                    Big Data: Hadoop, Hive, Spark (working knowledge), Big Data Migration Architecture
                    Workflow & Integration: BODS, SLT, Data Services, ETL Pipelines, Process Chains
                    Others: SAP BO Suite, Predictive Analytics, ARIS Modeling, Data Modeling, Performance Optimization 
                    </p>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.heading}>Connect Me</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.linkedin.com/in/venu-avula/">
                            <FaLinkedin />{" "}
                            {/* <span className={styles.linkText}>LinkedIn</span> */}
                        </Link>
                        <Link href="">
                            {/* <SiAcademia />  */}
							ResearchGate
                        </Link>
                        <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=8&hl=en&user=IOY5aG0AAAAJ&authuser=8&gmla=AH8HC4wweTT16vb8tpUtcRreHadYf9rim6WXIJcQGJJI9pkw1_k6QuWa6O0PpkaJz4BvuL_AkSjP7T62pVhhLwyP-_ndgCcoejRfyn4FmnY&sciund=6674946815658114893">
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
                    &copy; {new Date().getFullYear()} Venu Gopal Avula. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};
