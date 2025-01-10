"use client";

import {About, Header, Nav,TheWorld,Works} from "../components/index";

export default function Home() {
    return (
        <main className={"size-full"}>
            <Nav/>
            <Header/>
            <About/>
            <TheWorld/>
            <Works/>
        </main>
    );
}
