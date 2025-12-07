import React from "react";
import styles from "../styles/QuickLinks.module.css";
import { FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const QuickLinks = () => {
    return (
        <div className={styles.quickLinks}>
            <h1>Quick Links</h1>
            <div>
                <li>
                    <Link href="https://www.linkedin.com/in/venu-avula/">
                        <FaLinkedin /> LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <SiAcademia /> ResearchGate
                    </Link>
                </li>
                <li>
                    <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=8&hl=en&user=IOY5aG0AAAAJ&authuser=8&gmla=AH8HC4wweTT16vb8tpUtcRreHadYf9rim6WXIJcQGJJI9pkw1_k6QuWa6O0PpkaJz4BvuL_AkSjP7T62pVhhLwyP-_ndgCcoejRfyn4FmnY&sciund=6674946815658114893">
                        <FaGoogleScholar /> Google Scholar
                    </Link>
                </li>
            </div>
        </div>
    );
};
