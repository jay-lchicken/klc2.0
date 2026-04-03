"use client";
import { Users, Heart, Award, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StatCard from "@/components/StatCard";
import BenefitCard from "@/components/BenefitCard";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import FloatingElements from "@/components/FloatingElements";

export default function Volunteer() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <FloatingElements />
      <motion.header
        className="pt-16 pb-10 flex justify-center mt-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1
            className="gradient-text-white text-5xl font-bold"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Volunteers
          </motion.h1>
          <motion.p
            className="font-['Barlow_Semi_Condensed'] text-xl mt-4 text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To give without any limits
          </motion.p>
        </div>
      </motion.header>

      <div className="w-full flex justify-center items-center flex-col">
        <motion.p
          className="w-[90%] text-center my-8 text-lg leading-relaxed text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          If you would like to join us to make a difference in the lives of underprivileged children, and are a Secondary School student, fill out the form at the bottom to add you to our volunteering list to be informed of the latest workshops or events you can volunteer at. Service hours will definitely be provided to you to build up your portfolio while helping others! Your response will be kept at the strictest confidentiality.
        </motion.p>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4 sm:gap-8 z-10 w-full px-4 sm:w-[85%]">
          <StatCard
            icon={
              <Users size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={50}
            suffix="+"
            description="Active student volunteers helping our community"
          />
          <StatCard
            icon={
              <Heart size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={500}
            suffix="+"
            description="Service hours completed by our volunteers"
          />
          <StatCard
            icon={
              <Award size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={15}
            suffix="+"
            description="Workshops successfully organised with volunteers"
          />
        </ScrollReveal>

        <ScrollReveal className="w-full px-4 sm:w-[85%] mt-12">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Volunteer With Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <BenefitCard
              icon={<Users size={24} className="text-blue-500" />}
              title="Make New Friends"
              description="Connect with like-minded students who share your passion for helping others and making a positive impact in the community."
            />
            <BenefitCard
              icon={<Heart size={24} className="text-blue-500" />}
              title="Give Back to Society"
              description="Do something meaningful by helping underprivileged children learn valuable coding skills and build their confidence."
            />
            <BenefitCard
              icon={<Award size={24} className="text-blue-500" />}
              title="Build Your Portfolio"
              description="Earn service hours to strengthen your portfolio while gaining valuable leadership and teaching experience."
            />
          </div>
        </ScrollReveal>

        

        <ScrollReveal className="w-[90%] text-center mb-8">
          <motion.div
            className="glow-card bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center justify-center mb-4">
              <Mail size={32} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-800">Have Questions?</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Contact us now at{" "}
              <motion.a
                href="mailto:volunteer@kidslearncode.org"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                volunteer@kidslearncode.org
              </motion.a>
            </p>
            <p className="text-lg font-semibold text-blue-700">
              Join us now to make a positive impact!
            </p>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal className="w-full px-4 mb-12">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
              Join Our Volunteer Team
            </h2>

            <div className="flex justify-center">
              <MagneticButton strength={0.3} threshold={80}>
                <a href="https://forms.kidslearncode.org/s/cmj3n8c8m000ikc01x8ujva79">
                  <div className="glow-button w-52 h-12 bg-blue-500 text-white font-semibold flex items-center justify-center rounded-xl shadow-lg hover:bg-blue-600 transition-colors duration-300">
                    Join Us!
                  </div>
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}