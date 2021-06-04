import React from 'react';
import style from "./page.module.css"
import metropolitan from "../img/metropolitan.PNG"
import wanVSlan from "../img/LANvsWAN.PNG"
import bus from "../img/busTopology.jpg"
import Mesh from "../img/meshTopology.jpg"
import Ring from "../img/RingTopology.jpg"
import Star from "../img/starTopology.jpg"
import azur from "../img/AzurVN.PNG"
import Footer from "../Footer";

function Topologies() {
    return(
        <div >
            <div className={style.contentcon}>
                <h1>Network types and topologies to use when you design a network</h1>
                <p>All networks are built on the same principles. You can apply these principles to design and build your organization's local or cloud-based networks. When you build a network, you need to know about the different types of networks, their topologies, and their uses.</p>
                <p>What is a network?</p>
                <h1>What is a network?</h1>
                <p>A network is a collection of network-enabled devices, typically made up of computers, switches, routers, printers, and servers. Networks are a fundamental part of day-to-day life and exist in homes, workplaces, and public areas. Networks allow all types of network-enabled devices to communicate.</p>
                <h1>Network types</h1>
                <p>Networks vary in size, shape, and usage. To make it easier to identify different network types, they're categorized into one of the following network categories:</p>
                <ul>
                    <li><p>Personal area networks.</p></li>
                    <li><p>Local area networks.</p></li>
                    <li><p>Metropolitan area networks.</p></li>
                    <li><p>Wide area networks.</p></li>
                 </ul>    
                <h1>What is a personal area network?</h1>
                <p>A personal area network (PAN) provides networking needs around an individual. An example of a PAN is where a smartphone, smartwatch, tablet, and laptop all connect and share data without the need to connect to an access point or other third-party network services. PAN networks typically use Bluetooth to communicate because it provides a low-power, short-range data-sharing capability. The network standards associated with a PAN are Bluetooth and IEEE 802.15.</p>
                <h1>What is a local area network?</h1>
                <p>A local area network (LAN) provides networking needs around a single location. This location might be an organization's office, a school, a university, a hospital, an airport, and many others. A LAN is usually privately owned and needs authentication and authorization to access. Of the different classifications of a network, a LAN is by far the most commonly used.</p>
                <h1>What is a metropolitan area network?</h1>
                <img className={style.dynamic} src={metropolitan} alt="metropolitan"/>
                <p>A metropolitan area network (MAN) provides networking capabilities between two different locations within a city or metropolitan area to provide a single extensive network. Typically, a MAN requires a dedicated and secure connection between each LAN joined to the MAN.</p>

                <h1>What is a wide area network?</h1>
                <p>A wide area network (WAN) provides networking capabilities between two different geographical locations locally or worldwide. For example, a WAN is used to connect an organization's head office with branch offices all over the country. A WAN links multiple LANs together to create one super network. As a MAN, you use a virtual private network (VPN) to manage the connection between different LANs.</p>
                <h1>Differences between LAN and WAN networks</h1>
                <p>Several aspects set a LAN apart from a WAN. Knowing what these items are makes it easier to plan the services to deploy across these networks.</p>
                <img className={style.vector} src={wanVSlan} alt="WAN vs LAN"/>
                <h1>Network topologies</h1>
                <p>A network topology describes the physical composition of a network. Let's look at four topologies you can choose from when you design a LAN. They are:</p>
                <ul>
                    <li><p>Bus.</p></li>
                    <li><p>Ring.</p></li>
                    <li><p>Mesh.</p></li>
                    <li><p>Star.</p></li>
                 </ul>    
                 <h1>Bus topology</h1>
                 <img className={style.dynamic} src={bus} alt="Bus Topolgy"/>
                 <p>In a bus topology, each network device is connected to a single network cable. Even though it's the simplest type of network to implement, there are limitations to it. The first limitation is the length of the main cable or bus. The longer it gets, the higher the chance of signal dropout. This limitation constrains the physical layout of the network. All devices have to be physically located near each other, for example, in the same room. Finally, if there's a break in the bus cable, the whole network fails.</p>
                 <h1>Ring topology</h1>
                 <img className={style.dynamic} src={Ring} alt="Ring Topolgy"/>
                 <p>In a ring topology, each network device is connected to its neighbor to form a ring. This form of network is more resilient than the bus topology. A break in the cable ring also affects the performance of the network.</p>
                 <h1>Mesh topology</h1>
                 <img className={style.dynamic} src={Mesh} alt="Mesh topology"/>
                 <p>The mesh topology is described as either a physical mesh or a logical mesh.</p>
                 <p>In a physical mesh, each network device connects to every other network device in the network. It dramatically increases the resilience of a network but has the physical overhead of connecting all devices. Few networks today are built as a full mesh. Most networks use a partial mesh, where some machines interconnect, but others connect through one device.</p>
                 <p>There's a subtle difference between a physical mesh network and a logical one. The perception is that most modern networks are mesh based, since each device can see and communicate with any other device on the network. This description is of a logical mesh network and is primarily made possible through the use of network protocols.</p>
                 <h1>Star topology</h1>
                 <img className={style.dynamic} src={Star} alt="Star Topolgy"/>
                 <p>The star topology is the most commonly used network topology. Each network device connects to a centralized hub or switch. Switches and hubs can be linked together to extend and build more extensive networks. This type of typology is, by far, the most robust and scalable.</p>

                <h1>Ethernet</h1>
                <p>Ethernet is a networking standard that's synonymous with wire-based LAN networks and also used in MAN and WAN networks. Ethernet has replaced other wired LAN technologies like ARCNET and Token Ring and is an industry standard.</p>
                <p>While Ethernet is associated with wired networks, keep in mind that it's not limited to wire, since it's used over fiber-optic links as well.</p>
                <p>The Ethernet standard defines a framework for data transmission, error handling, and performance thresholds. It describes the rules for configuring an Ethernet network and how each element in the network interacts with each other.</p>
                <p>Ethernet is used in the OSI model at the data link and physical layers. It formed the basis for the IEEE 802.3 Standard. This standard helped to unify network and hardware development.</p>
                <p>Ethernet is a continually evolving standard, and the original version supported a data transmission rate of only 2.94 Mbps. In recent years, several iterations were released to keep up with the demands for increased speed. Today, rates extend up to 400 Gbps.</p>
                <h1>Fast Ethernet</h1>
                <p>Fast Ethernet (IEEE 802.3u) was developed to support data transmission speeds of up to 100 Mbps. Faster Ethernet is also referred to as the 100BASE-TX standard.</p> 
                <h1>Gigabit Ethernet</h1>
                <p>Gigabit Ethernet (IEEE 802.3ab) was developed to support faster communication networks that can support services like streaming multimedia and Voice over IP (VoIP). The 1000BASE-T standard runs 10 times faster than the 100BASE-TX standard. Gigabit Ethernet is now included in the 802.3 standards and recommended for enterprise networks. The new standard is backward compatible with the 100BASE-T and the older 10BASE-T standards.</p> 
                <h1>10 Gigabit Ethernet</h1>
                <p>The 10 Gigabit Ethernet (IEEE 802.3ae) standard has a nominal data transfer speed of 10 Gbps, which is 10 times faster than its predecessor. This speed improvement is made possible only by using fiber optics. The standard now requires that 10 Gigabit Ethernet networks use area-based routing rather than broadcasting data to all nodes. In that way, network noise and traffic are reduced.</p> 
                <h1>Terabit Ethernet</h1>
                <p>Terabit Ethernet offers data transfer speeds of 200 Gbps and 400 Gbps. It's expected that Terabit Ethernet will offer speeds of 800 Gbps and 1.6 Tbps in the future.</p>
                 <h1>Networks in Azure</h1>
                <p>Azure comes with several networking tools and services.</p>
                <h1>Azure Virtual Network</h1>
                <img className={style.ipv} src={azur} alt="Azur Virtual Network"/>
                <p>Using Azure Virtual Network, you can build complex virtual networks that emulate the structure of your actual on-premises networks. You can provision and manage your cloud-based virtual networks. You also can create hybrid virtual networks that integrate with your on-premises networks when you use Azure Virtual Network.</p>
                <h1>Ethernet</h1>
                <p>Using Azure Virtual Network, you can build complex virtual networks that emulate the structure of your actual on-premises networks. You can provision and manage your cloud-based virtual networks. You also can create hybrid virtual networks that integrate with your on-premises networks when you use Azure Virtual Network.</p>



            </div>
            <Footer />
        </div>
    )
}

export default Topologies;