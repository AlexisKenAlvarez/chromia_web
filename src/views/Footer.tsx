import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".white-footer", {
      height: 0,
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });

  const socials = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: FaFacebook,
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: FaInstagramSquare,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      icon: FaLinkedin,
    },
  ];

  return (
    <div
      className="relative flex h-96 w-full items-center justify-center bg-[#303030]"
      ref={container}
    >
      <div className="white-footer absolute left-0 top-0 h-44 w-full rounded-bl-[100%] rounded-br-[100%] bg-background shadow-md"></div>

      <div className="" id="contact">
        <ul className="flex gap-5 text-3xl text-white items-center justify-center">
          {socials.map((items) => (
            <a href={items.link} rel="noopener noreferrer" target="_blank">
              <li>
                <items.icon />
              </li>
            </a>
          ))}
        </ul>
        <h1 className="mt-4 text-center text-3xl font-bold text-white">
          CHROMIA
        </h1>
        <h3 className="text-white text-sm mt-4 opacity-50">
          Copyright © All rights reserved. 2024
        </h3>
      </div>
    </div>
  );
};

export default Footer;
