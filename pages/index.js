import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const Home = () => {
	// const router = useRouter();
	// useEffect(() => {
	//   const redirect = setTimeout(() => {
	//     router.push("https://encuesta3.vercel.app/orden/205882");
	//   }, 2000);

	//   return () => clearTimeout(redirect);
	// }, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>MARMOTECH ENCUESTAS</title>
				<meta name="description" content="Juan Soto" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					BIENVENIDO A MARMOTECH ENCUESTAS
				</h1>
				<p>A continuacion: </p>
			</main>

			<footer className={styles.footer}>
				<h1>MARMOTECH, S. A.</h1>
			</footer>
		</div>
	);
};

export default Home;
