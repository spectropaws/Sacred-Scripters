import Header from "./components/Header"
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StreamNow from "./components/StreamNow";
import CollectTokens from "./components/CollectTokens";
import TopFiveGames from "./components/TopFiveGames";
import { Suspense } from "react";
import Loading from "./loading";

async function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <CollectTokens />
      <StreamNow />
      <TopFiveGames />
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
}
