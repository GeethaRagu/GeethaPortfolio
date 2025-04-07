import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const About = () => {
  return (
    <div>
      <p className="font-bold mb-2 ml-2">MY KEYSKILLS</p>
      <ul className="flex flex-row pl-8 pb-1">
        <li>HTML&nbsp;</li>
        <li>
          <TiHtml5 />
        </li>
      </ul>
      <ul className="flex flex-row pl-8 pb-1">
        <li>CSS&nbsp;</li>
        <li>
          <FaCss3Alt />
        </li>
      </ul>

      <ul className="flex flex-row pl-10">
        <li>Bootstrap&nbsp;</li>
        <li>
          <FaBootstrap />
        </li>
      </ul>
      <ul className="flex flex-row pl-10 pb-1">
        <li>Tailwind&nbsp;</li>
        <li>
          <RiTailwindCssFill />
        </li>
      </ul>

      <ul className="flex flex-row pl-8 pb-1">
        <li>Javascript&nbsp;</li>
        <li>
          <TbBrandJavascript />
        </li>
      </ul>
      <ul className="flex flex-row pl-8 pb-1">
        <li>React&nbsp;</li>
        <li>
          <FaReact />
        </li>
      </ul>
      <ul className="flex flex-row pl-8 pb-1">
        <li>Redux(basics)&nbsp;</li>
        <li>
          <SiRedux />
        </li>
      </ul>
      <ul className="flex flex-row pl-8">
        <li>MongoDb&nbsp;</li>
        <li>
          <DiMongodb />
        </li>
      </ul>
      <ul className="flex flex-row pl-8">
        <li>Node JS&nbsp;</li>
        <li>
          <DiMongodb />
        </li>
      </ul>
      <p className="font-bold mt-4 mb-2 ml-2">MY WORK HISTORY</p>
      <div className="ml-4">
        <ul className="pl-4 list-none hover:list-disc">
          <li>
            Started career as Application developer in Ecweb Software Pvt Ltd.,
            Chennai from Dec’ 2006 till Jan’2008 and worked as Team Lead from
            Feb’ 2008 till July’2009. Developed e-commerce websites using HTML,
            CSS, JavaScript, XML , XSLT.
          </li>
          <li>
            Designed few projects as a freelancer from Feb’2010 to March’2011.
          </li>
          <li>Paraphrased few projects from Sep ‘2021 to Nov’2021.</li>
          <li>
            Established Aadavan Farmer Producer Company Limited in Erode and
            maintaining day to day activities from Mar ‘2010 till now.
          </li>
          <li>
            Designed multiple dynamic and browser compatible pages using HTML5,
            CSS3, JavaScript (React)
          </li>
        </ul>
      </div>

      <p className="font-bold mt-4 mb-2 ml-2">MY EDUCATION</p>
      <div className="ml-4">
        <ul className="pl-4 list-none hover:list-disc">
          <li>
            Completed the Bachelor’s degree in Engineering from Mahendra
            Engineering College, Salem. (Affltd. to Anna University), in the
            year 2005.
          </li>
          <li>
            Higher secondary from Swami Vivekanda Matric Hr. Sec School,
            Krishnagiri in the year 2001.
          </li>
          <li>
            SSLC from Navarasam Matric Hr. Sec School, Erode in the year 1999.
          </li>
        </ul>
      </div>

      <p className="font-bold mt-4 mb-2 ml-2">FUNCTIONAL SKILLS</p>
      <div className="ml-4">
        <ul className="pl-4 list-none hover:list-disc">
          <li>Web application development</li>
          <li>Frontend and Backend Integration</li>
          <li>RESTful API management</li>
          <li>Authentication and Authorization</li>
         
        </ul>
      </div>
    </div>
  );
};

export default About;
