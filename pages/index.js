import HomePage from "@/components/templates/HomePage";
import { getCars } from "@/services/apiCars";
import Head from "next/head";

export default function Home({ cars }) {
  return (
    <>
      <Head>
        <title>Shopping App</title>
      </Head>
      <HomePage cars={cars} />
    </>
  );
}

// Get Static Props

export async function getStaticProps() {
  const cars = await getCars();

  return {
    props: { cars },
  };
}
