import FavoriteListContextWrapper from "@/context/FavoriteListContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <FavoriteListContextWrapper>
      <Component {...pageProps} />
      <Toaster />
    </FavoriteListContextWrapper>
  );
}
