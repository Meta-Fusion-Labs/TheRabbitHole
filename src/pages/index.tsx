import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>The-Rabbit-Hole</title>
        <meta name="description" content="Built For The Root Network" />
        <link rel="icon" href="/Fluf-Logo.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Navbar/>
      </main>
    </>
  );
};

export default Home;
