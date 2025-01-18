"use client";

import {
  About,
  Header,
  Nav,
  TheWorld,
  WhatsNew,
  Works,
  PeopleOnWorld,
  Insight,
  Footer,
} from "../components/index";

export default function Home() {
  return (
    <main className={"size-full overflow-x-hidden"}>
      <Nav />
      <Header />
      <div className={"relative"}>
        <About />
        <div className="gradient-03 z-0" />
        <TheWorld />
      </div>
      <div className={"relative"}>
        <Works />
        <WhatsNew />
      </div>
      <div className={"relative"}>
        <div className="gradient-04 z-0" />
        <PeopleOnWorld />
        <Insight />
      </div>
      <Footer />
    </main>
  );
}
