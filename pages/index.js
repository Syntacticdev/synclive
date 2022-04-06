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
        {console.log(
          data.map(
            ({
              country: {
                england: {
                  epl: { club },
                },
              },
            }) => club.chelsea
          )
        )}

        <Table />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
