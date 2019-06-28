import React from 'react';
import { IconDownload } from './Icons';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';

const SkillBadge = ({ subject, percentage }) => (
  <div className={`border border-default inline-block margin-right-half 
    margin-bottom-half padding-left-half padding-right-half`}>
    {subject}{" "}{percentage}
  </div>
)

const Skills = () => (
  <div className="margin-bottom">
    <SkillBadge subject="C/C++" percentage={90} />
    <SkillBadge subject="Algorithm" percentage={90} />
    <SkillBadge subject="JavaScript" percentage={85} />
    <SkillBadge subject="Java &amp; Android" percentage={80} />
    <SkillBadge subject="HTML5 &amp; CSS3" percentage={80} />
    <SkillBadge subject="Git &amp; GitHub" percentage={90} />
    <SkillBadge subject="ReactJS" percentage={95} />
    <SkillBadge subject="Gatsby" percentage={80} />
    <SkillBadge subject="AngularJS" percentage={75} />
    <SkillBadge subject="NodeJS &amp; ExpressJS" percentage={80} />
    <SkillBadge subject="Bootstrap" percentage={70} />
    <SkillBadge subject="jQuery" percentage={85} />
    <SkillBadge subject="Mocha &amp; Chai" percentage={65} />
    <SkillBadge subject="MongoDB &amp; Mongoose" percentage={80} />
  </div>
)

const About = () => {
  return (
    <section className="container-full row" id="about">
      <div className="col-xs-12 margin-top-3">
        <SectionTitle title="About" />
        <SectionDescription content="A little bit about me." />
        <div className="padding-left-3 padding-right-3">
          <p>
            Hi, My name is <strong className="color-red">Lam Pham</strong> from Vietnam. I am a Software Engineer with a focus on <strong className="color-red">C/C++</strong>.
              Beside, I am really passionate about <strong className="color-blue">JavaScript</strong> and
              <strong className="color-blue"> Web Development</strong>. I got a bachelor of Electronics and Telecommunication Engineering at
            Ha Noi Uninversity of Science and Technology (2011 - 2016). And 2016 - present, I work for Samsung Vietnam Mobile R&amp;D Center (SVMC)
            as a C/C++ Software Engineer.
            </p>
          <p>
            As you can see, this website is my personal portfolio webpage, which
              I created while learning Web Development from <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org">freeCodeCamp</a> in my spare time.
            And from now on, I am going to share my latest work consistently. Each project consists of its link for preview on Github
              and <strong className="color-red">how-to</strong>, which I explain how I created it.
            In fact, before digging deeper into freeCodeCamp or Web Development, I self-learned JavaScript, HTML5 &amp; CSS3, Bootstrap &amp; jQuery,
            AngularJS and NodeJS &amp; ExpressJS... So, below are some informations about my that I self-evaluate honestly:
            </p>

          <Skills />

          <p>Besides, I love coding and blogging. I try to code everyday and write blogs to share my experiences to people.
            Here are my blogs (in Vietnamese):
              <span><a target="_blank" rel="noopener noreferrer" href="https://completejavascript.com"> Complete JavaScript</a></span> <strong>·</strong>
            <span><a target="_blank" rel="noopener noreferrer" href="http://thuattoan.phamvanlam.com"> Algorithm</a></span> <strong>·</strong>
            <span><a target="_blank" rel="noopener noreferrer" href="http://phamvanlam.com"> Personal Blog</a></span>.
            </p>
          <p>
            I enjoy instrument musical. In my free time, I usually play Ukulele. And, I like Street Workout. I am training it four times a week to get fit and healthy.
            Thanks for visiting my website!
            </p>
          <p className="text-center margin-bottom-3">
            <a target="_blank" rel="noopener noreferrer" href="/cv/LamPham.pdf" className="btn btn-primary" id="download-cv">
              <IconDownload color="#FFF" /><strong className="padding-left-half">MY CV</strong>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
