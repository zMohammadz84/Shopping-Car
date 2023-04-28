import FavoritPage from "@/components/templates/FavoritePage";
import Head from "next/head";

const favorite = () => {
  return (
    <>
      <Head>
        <title>Favorite Car</title>
      </Head>
      <FavoritPage />
    </>
  );
};

export default favorite;
