import React from "react";

import { IconDownload } from "./Icons";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import ExternalLink from "./ExternalLink";
import "./About.css";

const SkillBadge = ({ subject }) => (
  <div
    className={`border border-default inline-block margin-right-half 
    margin-bottom-half padding-left-half padding-right-half border-radius`}
  >
    {subject}
  </div>
);

const Skills = () => (
  <div className="margin-bottom">
    <SkillBadge subject="C/C++" />
    <SkillBadge subject="Algorithm" />
    <SkillBadge subject="JavaScript" />
    <SkillBadge subject="Java &amp; Android" />
    <SkillBadge subject="HTML5 &amp; CSS3" />
    <SkillBadge subject="Git &amp; GitHub" />
    <SkillBadge subject="ReactJS" />
    <SkillBadge subject="Refine" />
    <SkillBadge subject="Gatsby" />
    <SkillBadge subject="NextJS" />
    <SkillBadge subject="Astro" />
    <SkillBadge subject="AngularJS" />
    <SkillBadge subject="NodeJS &amp; ExpressJS" />
    <SkillBadge subject="MongoDB &amp; Mongoose" />
    <SkillBadge subject="Go" />
    <SkillBadge subject="GraphQL" />
    <SkillBadge subject="Hasura" />
    <SkillBadge subject="QT/QML" />
    <SkillBadge subject="Kotlin" />
    <SkillBadge subject="Ant Design" />
    <SkillBadge subject="Chakra UI" />
    <SkillBadge subject="MUI" />
    <SkillBadge subject="Mantine" />
    <SkillBadge subject="Bootstrap" />
    <SkillBadge subject="jQuery" />
    <SkillBadge subject="Mocha &amp; Chai" />
    <SkillBadge subject="Jest" />
  </div>
);

const About = () => {
  return (
    <section className="container-full row" id="about">
      <div className="col-xs-12 margin-top-3">
        <SectionTitle title="About" />
        <SectionDescription content="A little bit about me." />
        <div className="about-content">
          <p>
            Hi, My name is <strong className="color-red">Lam Pham</strong> from
            Vietnam. I am a Software Engineer with a focus on{" "}
            <strong className="color-red">C/C++</strong>. Besides, I am really
            passionate about <strong className="color-blue">JavaScript</strong>{" "}
            and
            <strong className="color-blue"> Web Development</strong>. I got a
            bachelor of Electronics and Telecommunication Engineering at Ha Noi
            University of Science and Technology (2011 - 2016).
          </p>
          <ul>
            <li>
              From 06/2016 - 03/2019, I work for Samsung Vietnam Mobile R&amp;D
              Center (SVMC) as a C/C++ Software Engineer.
            </li>
            <li>
              From 03/2019 - 10/2021, I work for VinSmart as a C/C++, Qt/QML
              Software Engineer and Front-end web developer with ReactJS.
            </li>
            <li>
              From 10/2021 - 04/2025, I work for Vinhomes as a Senior Front-end
              developer.
            </li>
            <li>
              From 05/2025 - present, I work for JMT technology as a Fullstack
              developer.
            </li>
          </ul>
          <p>
            As you can see, this website is my personal portfolio webpage, which
            I created while learning Web Development from{" "}
            <ExternalLink href="https://www.freecodecamp.org">
              freeCodeCamp
            </ExternalLink>{" "}
            in my spare time. And from now on, I am going to share my latest
            work consistently. Each project consists of its link for preview on
            Github and <strong className="color-red">how-to</strong>, which I
            explain how I created it. In fact, before digging deeper into
            freeCodeCamp or Web Development, I self-learned JavaScript, HTML5
            &amp; CSS3, Bootstrap &amp; jQuery, AngularJS and NodeJS &amp;
            ExpressJS... So, below are some information about me that I
            self-evaluate honestly:
          </p>

          <Skills />

          <p>
            Besides, I love coding and blogging. I try to code every day and
            write blogs to share my experiences with people. Here are my blogs
            (in Vietnamese):
            <span>
              <ExternalLink href="https://completejavascript.com">
                {" "}
                Complete JavaScript
              </ExternalLink>
            </span>{" "}
            <strong>·</strong>
            <span>
              <ExternalLink href="https://tools.completejavascript.com">
                {" "}
                Complete Tools
              </ExternalLink>
            </span>{" "}
            <strong>·</strong>
            <span>
              <ExternalLink href="https://thuattoan.phamvanlam.com">
                {" "}
                Algorithm
              </ExternalLink>
            </span>{" "}
            <strong>·</strong>
            <span>
              <ExternalLink href="https://phamvanlam.com">
                {" "}
                Personal Blog
              </ExternalLink>
            </span>
            .
          </p>
          <p>
            I enjoy instrument musical. In my free time, I usually play Ukulele.
            And, I like Street Workout. I am training it four times a week to
            get fit and healthy. Thanks for visiting my website!
          </p>
          <p className="text-center margin-bottom-3">
            <ExternalLink href="https://drive.google.com/file/d/1nLGq_nWaed8LO_OPhMr-mcEkINIgdcIr/view" className="btn btn-primary">
              <IconDownload color="#FFF" />
              <strong className="padding-left-half">MY CV</strong>
            </ExternalLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
