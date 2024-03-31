import type { Metadata } from "next";
// import { Counter } from "./components/counter/Counter";
import Competitions from "./components/competitions/Competitions";

export default function IndexPage() {
  return <Competitions />;
  // return <Counter />;
}

export const metadata: Metadata = {
  title: "SportData App",
};
