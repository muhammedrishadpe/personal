"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After enrolling in my higher secondary education with a focus on {" "}
        <span className="font-medium">commerce</span>, I realized that it wasn't my cup of tea and discovered my passion for programming. I began my programming journey in 2019 and taught myself online, initially focusing on frontend development.  I learned a variety of stacks and eventually secured my first job as a{" "}
        <span className="font-medium"> Flutter developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
        Flutter
        </span>
        . I am also familiar with  React, Node.js, and have some familiarity with MongoDB. I am always looking to
        learn new technologies.Currently, I'm seeking an {" "}
        Ausbildung in Fachinformatik with a focus on Anwendungsentwicklung (application development).
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy cooking, traveling , and playing with kids. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        improving my{" "}
        <span className="font-medium">German language skills.</span>. 
      </p>
    </motion.section>
  );
}
