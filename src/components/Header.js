import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerBox = useRef(null);
  const prevScrollPosition = useRef(0)

  const handleScroll = () => {
    headerBox.current.style.transition = "transform 0.3s ease-in-out 0s";
    if (window.scrollY > "64" && window.scrollY - prevScrollPosition.current > 0) {
      headerBox.current.style.transform = "translate(0px, -200px)";
    }
    else {
      headerBox.current.style.transform = "translate(0px, 0px)";
    }
    prevScrollPosition.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box
      ref={headerBox}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
            {socials.map((social) => (
            <a key={social.icon} href={social.url}>
              <FontAwesomeIcon icon={social.icon} size="2x"/>
            </a>
            ))
            /* Add social media links based on the `socials` data */}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              { <>
                <a onClick={handleClick} href="#projects-section">Projects</a>
                <a onClick={handleClick} href="#contactme-section">Contact Me</a>
                </>
              /* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
