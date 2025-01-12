"use client";

import {About, Header, Nav, TheWorld, WhatsNew, Works, PeopleOnWorld, Insight,Footer} from "../components/index";

export default function Home() {
    return (
        <main className={"size-full"}>
            <Nav/>
            <Header/>
            <About/>
            <TheWorld/>
            <Works/>
            <WhatsNew/>
            <PeopleOnWorld/>
            <Insight/>
            <Footer/>
        </main>
    );
}
