import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
// coloque aqui sua foto:
import Avatar from "/src/img/img.jpeg";

import "/src/styles/components/sidebar.sass";

function Sidebar() {
  return (
    <aside id="sidebar">

      <img src={Avatar} alt="Humberto Henrique Ferreira de Assis" width="280px" height="280px" />
      <p className="title">Engenheiro de software</p>
      <SocialNetworkContainer />
      <InformationContainer />
    </aside>
  );
}

export default Sidebar;
