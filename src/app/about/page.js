"use client";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Image from "next/image";

export default function About() {
    return(
        <div>
            
            <Navigation />
            <style jsx>{`
                header {
                    padding-top: 2em;
                    display: flex;
                    justify-content: center;
                }
                
                .intro img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                    border-color: black;
                    border-radius: 8px;
                }
                
                .header {
                    text-align: center;
                }
                
                .typewriter h1 {
                    font-size: 2em;
                }
                
                .typewriter p {
                    font-family: 'Barlow Semi Condensed', sans-serif;
                }
                
                .intro {
                    padding: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .intro h2 {
                    margin-bottom: 1rem;
                }
            `}</style>
            
            <header className="mt-20">
                <section className="header">
                    <div className="typewriter">
                        <h1 style={{ fontSize: "2em" }}>About Us</h1>
                        <p style={{ fontFamily: "Barlow Semi Condensed" }}>Our Story</p>
                    </div>
                </section>
            </header>
            
            <section className="intro">
                <h2>What is Kids Learn Code?</h2>
                <p>Kids Learn Code is a non-profit educational institution (Ground-Up) in Singapore, which aims to engage and ignite kids' passion for coding in an evolving world. We envision a world where every child has access to quality coding education. As a student-led organisation, we provide free coding education to students aged 7-12 and hope it will ignite their passion and pursue coding as an aspiration in the future.</p>
                <br /><br />
                <div style={{ position: "relative", width: "100%", height: "auto" }}>
                    <img 
                        src="https://i.ibb.co/KrtgXFP/Screenshot-2024-10-12-at-4-19-00-PM.png"
                        alt="Kids Learn Code class"
                        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                    />
                </div>
            </section>
            
            <script 
                dangerouslySetInnerHTML={{
                    __html: `//code.tidio.co/erjlitousguh6i2nteif96hubirmdwdp.js`
                }}
                async
            />
            </div>
            
    );
};
