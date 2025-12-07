import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { QuickLinks } from "@/components/QuickLinks";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";

export default function Home({ user }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{user.name}</title>
                <meta
                    name="description"
                    content={`Welcome to ${user.name} portfolio`}
                />
            </Head>
            <div className={styles.home}>
                <section className={styles.hero}>
                    <div className={styles.mobileHeroImage}>
                        <img src={user.profileImage} alt="Profile" />
                    </div>
                    <div className={styles.heroTextContainer}>
                        <div className={styles.heroText}>
                            <h1>Hi, I&apos;m {user.name}</h1>
                            <p>{user.title}</p>
                        </div>
                        <div className={styles.linksContainer}>
                            <ul className={styles.linksList}>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://www.linkedin.com/in/venu-avula/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className={styles.icon} /> LinkedIn
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiAcademia
                                            className={styles.icon}
                                        /> ResearchGate
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=8&hl=en&user=IOY5aG0AAAAJ&authuser=8&gmla=AH8HC4wweTT16vb8tpUtcRreHadYf9rim6WXIJcQGJJI9pkw1_k6QuWa6O0PpkaJz4BvuL_AkSjP7T62pVhhLwyP-_ndgCcoejRfyn4FmnY&sciund=6674946815658114893"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGoogleScholar
                                            className={styles.icon}
                                        />{" "} Google Scholar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.heroImage}>
                        <img src={user.profileImage} alt="Profile" />
                    </div>
                </section>
                <h2 className={styles.aboutTitle}>About Me</h2>
                <div className={styles.mainContent}>
                    <div className={styles.aboutmecontainer}>
                        {/* <div className={styles.aboutmeimg}>
                            <img src={user.profileImage} alt="Profile" />
                        </div> */}
                        <div className={styles.contentPanel}>
                            <section id="about" className={styles.about}>
                                <div className={styles.aboutText}>
                                    
                                    <p>{user.about}</p>
                                </div>
                            </section>
                            <div className={styles.heroButtons}>
                                <Link
                                    href="/about"
                                    className={styles.heroButton}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const user = {
        name: "Venu Gopal Avula",
        title: "Senior Data Architect & SAP BW/4HANA Specialist | Enterprise BI & Cloud Analytics Leader",
        profileImage: "/img/Pic.jpg",
        about: `"I am Venu Gopal Avula, a seasoned Data Architect with over 20 years of end-to-end IT experience spanning administration, analysis, design, development, testing, and implementation of enterprise business applications. I specialize in architecting scalable, secure, and high-performance data platforms across industries including Telecom, Oil & Gas, Manufacturing, Healthcare, Finance, Insurance, Mining, and Entertainment. My core expertise lies in SAP BW/BI, HANA, BW4HANA, BO, and cloud data architectures on Azure and AWS, with a proven track record of delivering robust data warehousing, reporting, and analytics solutions that directly support business strategy and decision-making. Throughout my career, I have led complex, full-lifecycle BI and data projects—from requirements gathering, process and data modeling, and system design, through build, testing, user training, go-live, and post-implementation support. I bring deep hands-on experience in HANA data modeling (Attribute, Analytic, and Calculation Views), InfoProviders, BW models, ETL design, and performance optimization, as well as migration of large-scale data warehouses from legacy platforms such as Teradata and Hadoop to modern cloud environments. I am particularly focused on building data foundations that enable predictive analytics, real-time reporting, and self-service BI at scale. In my roles as Senior SAP BI/BW HANA Lead Consultant and Big Data & AWS BI Analytics Architect, I have successfully driven cloud migration initiatives, integrated machine learning and AI-backed analytical workloads, and collaborated closely with business stakeholders, data scientists, and global delivery teams. I am adept at bridging the gap between technology and business, translating complex analytical requirements into practical, maintainable solutions that enhance transparency, governance, and data-driven culture across the organization. I hold certifications including AWS Certified Solutions Architect – Associate and Microsoft Azure Fundamentals (AZ-900), alongside formal training in predictive analytics and ARIS-based process modeling. I remain committed to continuous learning in cloud data platforms, modern BI, and advanced analytics, with a strong focus on delivering data architectures that are future-ready, trusted, and aligned with enterprise objectives."`,
    };

    return {
        props: { user },
    };
}
