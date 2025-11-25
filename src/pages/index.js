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
                                        href="https://www.linkedin.com/in/mohamedabdulkadar/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className={styles.icon} /> LinkedIn
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://www.researchgate.net/profile/Mohamed-Abdul-Kadar-Mohamed-Jabarullah?ev=hdr_xprf"
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
                                        href="https://scholar.google.com/citations?hl=en&user=GWgCO9gAAAAJ&authuser=9&scilu=&scisig=ACUpqDcAAAAAaEVFOnSavwhK2T0VjIJC5mT8_BA&gmla=AH8HC4wkrpNjveoAY5p-VdLtj9DA-vVhyvYeIB2nhKw-3B5WxWcreSIsjQDcvJ7hnLfOFALAIHj-_yYOz-XHYlGzFh_nLnLs8O4eDcw&sciund=6366508824389086822&gmla=AH8HC4yiTW0jdbMbvpGvdZolUVTRxMvNitfqGecmXtK3KM4gEod_jwyKKXuMoNz9aDkEb1DW7gCQenvBjw4nOZUgR8yk0y1pkG9xRY40puo&sciund=17620689195893747889&gmla=AH8HC4y1yCu2sS03tORD3zObROWIopicqfMxWXJKNTBau99IbIbiSIzOmqfg-1GIpqLustQ74VKiVQBpuM61-Z6xLAuu5CnADYTigv15yvw&sciund=4130726072484617652&gmla=AH8HC4z8eNL_XdilQvQurLDGtmH59KDHiUZ8p-pdCH5h6e0UzMZRGuIEKAPcezwKzdP4Rq3Xck4KNtYaWCejz8MY-5ohB_Lktp9HOjXld2M&sciund=5655965417567264097"
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
        name: "Mohamed Abdul Kadar",
        title: "Senior Cloud & Automation Architect | GCP-Certified | DevOps, Microservices & Test Engineering Leader",
        profileImage: "/img/Pic.jpg",
        about: `"I am Mohamed Abdul Kadar, a results-driven Technology Leader and Google Cloud Certified Professional Cloud Architect with 17+ years of experience delivering high-quality, scalable cloud-native solutions, robust API-driven microservices, and enterprise-grade test automation frameworks. I specialize in designing and implementing end-to-end CI/CD pipelines, automated testing strategies (web, mobile, API, and backend), and reliable deployment architectures using GCP, Kubernetes, Docker, Jenkins, and infrastructure-as-code. My strength lies in bridging engineering and quality — building resilient automation frameworks, enabling observability and testability, and mentoring teams to adopt best practices in software development, testing, and DevOps. I bring a pragmatic approach to quality engineering, a deep commitment to test coverage and performance, and a proven track record of improving release velocity while maintaining production stability."`,
    };

    return {
        props: { user },
    };
}
