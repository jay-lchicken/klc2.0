"use client";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

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
            <motion.header 
                className="pt-16 pb-10 flex justify-center bg-gradient-to-r mt-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center">
                    <motion.h1 
                        className="text-5xl font-bold text-white"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p 
                        className="font-['Barlow_Semi_Condensed'] text-xl mt-4 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Our Story
                    </motion.p>
                </div>
            </motion.header>
            
            
            <section className="intro">
                <motion.div 
                    className="flex flex-col items-start justify-center bg-white p-5 rounded-3xl text-black"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold">What is Kids Learn Code?</h2>
                    <p>Kids Learn Code is a non-profit educational institution (Ground-Up) in Singapore, which aims to engage and ignite kids' passion for coding in an evolving world. We envision a world where every child has access to quality coding education. As a student-led organisation, we provide free coding education to students aged 7-12 and hope it will ignite their passion and pursue coding as an aspiration in the future.</p>
                </motion.div>
                <br /><br />
                <motion.div 
                    style={{ position: "relative", width: "100%", height: "auto" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <img 
                        src="https://i.ibb.co/KrtgXFP/Screenshot-2024-10-12-at-4-19-00-PM.png"
                        alt="Kids Learn Code class"
                        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                    />
                </motion.div>
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
