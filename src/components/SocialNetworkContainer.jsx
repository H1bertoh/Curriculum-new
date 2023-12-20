import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import "/src/styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, hhref:"https://www.linkedin.com/in/humberto-henrique-ferreira-de-assis-261026207/" },
  {name: "github", icon: <FaGithub />, hhref: "https://www.linkedin.com/in/humberto-henrique-ferreira-de-assis-261026207/"},

];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.hhref} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
