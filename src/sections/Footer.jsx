import { copyrightSign } from "../assets/icons";
import {footerLogo} from "../assets/images";
import {footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        
        <div className="flex flex-col items-start">
          <a href="/" >
            <img 
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Get shoes from your nearest store and you can count on us for the quality that is amazing indeed
          </p>

          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) => (
              <div className="bg-white flex justify-center items-center w-12 h-12 rounded full">
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
            <ul>
              {section.links.map((links) => (
                <li className="mt-3 font-montserrat text-white-400 text-base leading-normal hover:text-slate-gray">
                  <a href= {links.link}>
                  {links.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> 
      </div>

      <div className="flex justify-between text-white-400 items-center mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-monospaced ">
          <img
            className="rounded-full m-0"
            src={copyrightSign}
            alt="copy rights"
            width={20}
            height={20}
          />
          <p>CopyRight. All rights reserved</p>
        
        </div>
        <a
          className="text-montserrat text-cyan-300 text-base leading-normal hover:text-white"
          href="https://github.com/OsmanArshid"
          target="_blank"
          rel="norefferer">
          Made by Osman
        </a>
      </div>
    </footer>
  )
}

export default Footer