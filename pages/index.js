import Head from "next/head";
import Image from "next/image";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SYNCLIVE - Livescore For Sports Event</title>
        <meta
          name="description"
          content="Livescore for Football,Basketball, Tennis, Volleyball"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Table />
      </main>
    </div>
  );
}

