import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import fitnessPal from "../../assets/images/fitnesspal.png";
import flash from "../../assets/images/flash.png"
import video from "../../assets/images/video_recorder.png";
import excel from "../../assets/images/excel.png";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/max/875/1*VWWyKuzBCGh2ipERuP4d_Q.png"
                  alt="uniqlo-pic"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Uniqlo Clone</h2>
              <p>
              UNIQLO India offers high-quality fashion clothes online for Men,
              Women, Kids & Babies.A collaborative project built by a team of 6
              executed in 5 days.
              </p>
              <div>
                
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                
              </div>
              <div>
                <a
                  href="https://uniqlo-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shreyasgkhakal100/uniqlo-clone-masai-unit-3-project.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={fitnessPal}
                  
                  alt="Myfitnesspal"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>MyFitnessPal Clone </h2>
              <p>
              MyFitnessPal helps you keep track of your daily food and beverage intake, calculating all
your nutrients, calories, and vitamins for you.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://my-fitness-pal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/vikash-vashistha/cloneMyFitnessPal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={flash}
                  alt="Typing"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Flash Type</h2>
              <p>
                Mini project of A dynamic typing speed calculation app that helps in improving
              typing speed.It has timer , counter of words per minute. Built
              this cool app while learning React.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://typingspeedcalc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/HrgChampion/flashtype"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/max/875/1*2PD7SlV8Eh5aoQGcnK-uLw.png"
                  alt="Mednear"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mednear Clone</h2>
              <p>
              Mednear is the Primary Online Pharmacy in India that provides
              prescription, and generic medicines all over India.A collaborative project built by team of 6 executed
              in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=BRRmteRFgLc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/HrgChampion/Mednear-clone.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={video}
                  alt="video_streaming"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Video Streaming</h2>
              <p>
              An app in which you can stream your camera and microphone and get a live video of it. You can record,click pictures while recording,
              download,delete and can apply filters.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://video-recorder-gallery.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/HrgChampion/video-recording"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={excel}
                  alt="excel_sheet_clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Excel Clone</h2>
              <p>
              Clone of Excel sheets having basic functions like copy, cut, paste, delete, undo, redo,font style,font color,basic formulas,cycle detection etc.
              You can also add new sheets,dowload and upload your file.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://excelsheetclone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/HrgChampion/video-recording"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>





      </div>
    </>
  );
};