import { Delius } from "next/font/google";
import { Meie_Script } from "next/font/google";

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});

const meieScript = Meie_Script({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div
      className={`min-h-screen flex flex-col gap-6 items-center justify-center text-4xl `}
    >
      <h1 className={`${delius.className} text-orange-200`}>
        Hello, Welcome to NextJs 😁
      </h1>
      <p className={meieScript.className}>Dharma Bhai</p>
    </div>
  );
};

export default Home;
