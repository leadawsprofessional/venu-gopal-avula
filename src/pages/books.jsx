import React from "react";
import Head from "next/head";
import styles from "@/styles/Books.module.css";
import Link from "next/link";

export default function Books({ books = [] }) {
	return (
		<div className={styles.booksContainer}>
			<Head>
				<title>Venu Gopal Avula</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.booksContent}>
				<h1 className={styles.heading}>Books Authored</h1>
				<div className={styles.booklist}>
					{books.length > 0 ? (
						books.map((book, index) => (
							<div className={styles.bookCard} key={index}>
							  <a
							    href={book.link}
							    target="_blank"
							    rel="noopener noreferrer"
							    className={styles.bookImageLink}
							  >
							    <img
							      src={book.image.startsWith("/") ? book.image : `/${book.image}`}
							      alt={book.title}
							      className={styles.bookImage}
							    />
							  </a>
							  <div className={styles.bookInfo}>
							    <h5 className={styles.bookTitle}>{book.title}</h5>
							    <a
							      href={book.link}
							      target="_blank"
							      rel="noopener noreferrer"
							      className={styles.amazonButton}
							    >
							      📘 Buy Now on Amazon
							    </a>
							  </div>
							</div>
						))
					) : (
						<p>No books available at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const books = [
			{
				title: "Intelligent ERP Analytics: Machine Learning Applications for Enhanced Business Intelligence",
				link: "https://www.amazon.in/Intelligent-ERP-Analytics-Applications-Intelligence-ebook/dp/B0FSVHZT3S/ref=sr_1_1?crid=15ZZ3K22QTJ3&dib=eyJ2IjoiMSJ9.9REVCeQifmvr9Hol5d5PnQ.Pvc7z2U2WcRjR8NfqqrWIEz6EGqnv_FahxIdNvtxJKI&dib_tag=se&keywords=Venu+Gopal+Avula&qid=1764263572&sprefix=venu+gopal+avula%2Caps%2C245&sr=8-1",
				image: "img/book.png",
			},
		];

		return {
			props: { books },
		};
	} catch (error) {
		console.error("Error fetching books:", error);
		return {
			props: { books: [] },
		};
	}
}
