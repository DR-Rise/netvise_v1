import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './Nav';
import style from "./pages/page.module.css";
import Topologies from "./pages/Topologies";
import Fundamental from "./pages/Fundamental";
import Routing from "./pages/Rounting";
import Security from "./pages/Security";
import info from "./pages/Info";
import Footer from './Footer';
import access from "./img/access.jpg";
import wifi from "./img/wifi.jpg";
import switc from "./img/switch.jpg";
import router from "./img/router.jpg"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fundamentals" component = {Fundamental}/>
          <Route path= "/routing" component = {Routing}/>
          <Route path="/topologies" component = {Topologies} />
          <Route path="/security" component = {Security}/>
          <Route path="/info" component = {info} />
        </Switch>
      </Router>
    </div>
  );
}




function Home() {
  return(
    <>
            <div className={style.contentcon}>
                <h1 id={style["title"]}>The foundations of networking : switches, routers, and wireless access points</h1>
                <p>Switches, routers, and wireless access points are the essential networking basics. Through them, devices connected to your network can communicate with one another and with other networks, like the Internet. Switches, routers, and wireless access points perform very different functions in a network.</p>
                <div className={style.merge}>
                  <img className={style.alt} src={switc} alt = "access point" />
                  <h1>Switches</h1>
                </div>             
                <p>Switches are the foundation of most business networks. A switch acts as a controller, connecting computers, printers, and servers to a network in a building or a campus.</p>
                <p>Switches allow devices on your network to communicate with each other, as well as with other networks, creating a network of shared resources. Through information sharing and resource allocation, switches save money and increase productivity.</p>
                <p>There are two basic types of switches to choose from as part of your networking basics: on-premises and cloud-managed.</p>
                <ul>
                  <li><p>- A managed on-premises switch lets you configure and monitor your LAN, giving you tighter control of your network traffic.</p></li>
                  <li><p>- Have a small IT team? A cloud-managed switch can simplify your network management. You get a simple user interface, multisite full-stack management, and automatic updates delivered directly to the switch.</p></li>
                </ul>
                <div className={style.merge}>
                  <img className={style.alt} src={router} alt = "access point" />
                  <h1>Routers</h1>
                </div>
                <p>Routers connect multiple networks together. They also connect computers on those networks to the Internet. Routers enable all networked computers to share a single Internet connection, which saves money.</p>
                <p>A router acts a dispatcher. It analyzes data being sent across a network, chooses the best route for data to travel, and sends it on its way.</p>
                <p>Routers connect your business to the world, protect information from security threats, and can even decide which computers receive priority over others. </p>
                <p>Beyond those basic networking functions, routers come with additional features to make networking easier or more secure. Depending on your security needs, for example, you can choose a router with a firewall, a virtual private network (VPN), or an Internet Protocol (IP) communications system.</p>
                <div className={style.merge}>
                  <img className={style.alt} src={access} alt = "access point" />
                  <h1>Access Points</h1>
                </div>
                <p>An access point* allows devices to connect to the wireless network without cables. A wireless network makes it easy to bring new devices online and provides flexible support to mobile workers.</p>
                <p>An access point acts like an amplifier for your network. While a router provides the bandwidth, an access point extends that bandwidth so that the network can support many devices, and those devices can access the network from farther away.</p>
                <p>But an access point does more than simply extend Wi-Fi. It can also give useful data about the devices on the network, provide proactive security, and serve many other practical purposes.</p>
                <p>*Access points support different IEEE standards. Each standard is an amendment that was ratified over time. The standards operate on varying frequencies, deliver different bandwidth, and support different numbers of channels.</p>
                <div className={style.merge}>
                  <img className={style.alt} src={wifi} alt = "access point" />
                  <h1>Wireless Networking</h1>
                </div>
                <p>To create your wireless network, you can choose between three types of deployment: centralized deployment, converged deployment, and cloud-based deployment. Need help figuring out which deployment is best for your business? Talk to an expert. </p>
                <p>1. Centralized deployment</p>
                <p>The most common type of wireless network system, centralized deployments are traditionally used in campuses where buildings and networks are in close proximity. This deployment consolidates the wireless network, which makes upgrades easier and facilitates advanced wireless functionality. Controllers are based on-premises and are installed in a centralized location. </p>
                <p>2. Converged deployment</p>
                <p>For small campuses or branch offices, converged deployments offer consistency in wireless and wired connections. This deployment converges wired and wireless on one network device—an access switch—and performs the dual role of both switch and wireless controller.</p>
                <p>3. Cloud-based deployment</p>
                <p>This system uses the cloud to manage network devices deployed on-premises at different locations. The solution requires Cisco Meraki cloud-managed devices, which provide full visibility of the network through their dashboards. </p>
            </div>     
            <Footer />  
        </>
  )
}
export default App;

