import React from 'react';
import style from "./page.module.css"
import Footer from "../Footer";
import dynamicRout from "../img/dynamicRouting.png";
import distVector from "../img/DistVector.PNG";
import Classfuless from "../img/ClassfulVSclassless.PNG";
import Summary from"../img/summary.PNG";

function Routing() {
    return(
        <div>
            <div className={style.contentcon}>
                <h1>Routing Protocols Types: Static, Dynamic, IP </h1>
                <ul>
                    <li>
                        <p><span>Routing Protocols</span> are the set of defined rules used by the routers to communicate between source and destination. They do not move the information to the source to a destination, but only update the routing table that contains the information.</p>
                        </li></ul>

                <p>Network Router protocols helps you to specify way routers communicate with each other. It allows the network to select routes between any two nodes on a computer network.</p>
                <h1>Types of Routing Protocols </h1>
                <p>There are mainly two types of Network Routing Protocols</p>
                <ul>
                    <li>
                        <p><span>Static</span> </p>
                        <p><span>Dynamic</span> </p>
                    </li>
                </ul>
                
                <h1>Static Routing Protocols</h1>
                <p>Static routing protocols are used when an administrator manually assigns the path from source to the destination network. It offers more security to the network.</p>
                <ul>
                    <li>
                        <p><span>Advantages</span> </p>
                        <p>No overhead on router CPU.</p>
                        <p>No unused bandwidth between links.</p>
                        <p>Only the administrator is able to add routes</p>
                        <p><span>Disadvantages</span> </p>
                        <p>The administrator must know how each router is connected.</p>
                        <p>Not an ideal option for large networks as it is time intensive.</p>
                        <p>Whenever link fails all the network goes down which is not feasible in small networks.</p>
                    </li>
                </ul>
                <h1>Dynamic Routing Protocols </h1>
                <img className={style.dynamic} src={dynamicRout} alt="Dynamic Routing Protocols"/>
                <p>Dynamic routing protocols are another important type of routing protocol. It helps routers to add information to their routing tables from connected routers automatically. These types of protocols also send out topology updates whenever the network changes' topological structure.</p>
                <ul>
                    <li>
                        <p><span>Advantages</span> </p>
                        <p>Easier to configure even on larger networks.</p>
                        <p>It will be dynamically able to choose a different route in case if a link goes down.</p>
                        <p>It helps you to do load balancing between multiple links.</p>
                        <p><span>Disadvantages</span> </p>
                        <p>Updates are shared between routers, so it consumes bandwidth.</p>
                        <p>Routing protocols put an additional load on router CPU or RAM.</p>
                    </li>
                </ul>
                <h1>Distance Vector Routing Protocol (DVR)</h1>
                <p>Distance Vector Protocols advertise their routing table to every directly connected neighbor at specific time intervals using lots of bandwidths and slow converge.</p>
                <p> In the Distance Vector routing protocol, when a route becomes unavailable, all routing tables need to be updated with new information.</p>
                <ul>
                    <li>
                        <p><span>Advantages</span> </p>
                        <p>Updates of the network are exchanged periodically, and it is always broadcast.</p>
                        <p>This protocol always trusts route on routing information received from neighbor routers.</p>
                        <p><span>Disadvantages</span> </p>
                        <p>As the routing information are exchanged periodically, unnecessary traffic is generated, which consumes available bandwidth.</p>
                    </li>
                </ul>
                <h1>Internet Routing Protocols:</h1>
                <p>The following are types of protocols which help data packets find their way across the Internet:</p>
                <h1>Routing Information Protocol (RIP)</h1>
                <p>RIP is used in both LAN and WAN Networks. It also runs on the Application layer of the OSI model. The full form of RIP is the Routing Information Protocol. Two versions of RIP are</p>
                <ul>
                    <li>
                        <p><span>RIPv1</span> </p>
                        <p><span>RIPv2</span> </p>
                        
                    </li>
                </ul>
                <p>The original version or RIPv1 helps you determine network paths based on the IP destination and the hop count journey. RIPv1 also interacts with the network by broadcasting its IP table to all routers connected with the network.</p>
                <p>RIPv2 is a little more sophisticated as it sends its routing table on to a multicast address.</p>
                <h1>Interior Gateway Protocol (IGP)</h1>
                <p>IGRP is a subtype of the distance-vector interior gateway protocol developed by CISCO. It is introduced to overcome RIP limitations. The metrics used are load, bandwidth, delay, MTU, and reliability. It is widely used by routers to exchange routing data within an autonomous system.</p>
                <p>This type of routing protocol is the best for larger network size as it broadcasts after every 90 seconds, and it has a maximum hop count of 255. It helps you to sustain larger networks compared to RIP. IGRP is also widely used as it is resistant to routing loop because it updates itself automatically when route changes occur within the specific network. It is also given an option to load balance traffic across equal or unequal metric cost paths.</p>
                <h1>Link State Routing Protocol</h1>
                <p>Link State Protocols take a unique approach to search the best routing path. In this protocol, the route is calculated based on the speed of the path to the destination and the cost of resources.</p>
                <h1>Routing protocol tables</h1>
                <p>Link state routing protocol maintains below given three tables:</p>
                <ul>
                    <li>
                        <p><span>Neighbor table</span> This table contains information about the neighbors of the router only. For example, adjacency has been formed.</p>
                        <p><span>Topology table</span>This table stores information about the whole topology. For example, it contains both the best and backup routes to a particular advertised network. </p>
                        <p><span>Routing table</span>This type of table contains all the best routes to the advertised network. </p>
                        <p><span>Advantages</span> </p>
                        <p>This protocol maintains separate tables for both the best route and the backup routes, so it has more knowledge of the inter-network than any other distance vector routing protocol.</p>
                        <p>Concept of triggered updates are used, so it does not consume any unnecessary bandwidth.</p>
                        <p>Partial updates will be triggered when there is a topology change, so it does not need to update where the whole routing table is exchanged.</p>
                    </li>
                </ul>
                <h1>Exterior Gateway Protocol (EGP)</h1>
                <p>EGP is a protocol used to exchange data between gateway hosts that are neighbors with each other within autonomous systems. This routing protocol offers a forum for routers to share information across different domains. The full form for EGP is the Exterior Gateway Protocol. EGP protocol includes known routers, network addresses, route costs, or neighboring devices.</p>
                <h1>Enhanced Interior Gateway Routing Protocol (EIGRP)</h1>
                <p>EIGRP is a hybrid routing protocol that provides routing protocols, distance vector, and link-state routing protocols. The full form routing protocol EIGRP is Enhanced Interior Gateway Routing Protocol. It will route the same protocols that IGRP routes using the same composite metrics as IGRP, which helps the network select the best path destination.</p>
                <h1>Open Shortest Path First (OSPF)</h1>
                <p>Open Shortest Path First (OSPF) protocol is a link-state IGP tailor-made for IP networks using the Shortest Path First (SPF) method.</p>
                <p>OSPF routing allows you to maintain databases detailing information about the surrounding topology of the network. It also uses the Dijkstra algorithm (Shortest path algorithm) to recalculate network paths when its topology changes. This protocol is also very secure, as it can authenticate protocol changes to keep data secure.</p>
                <p>Here are some main difference between these Distance Vector and Link State routing protocols:</p>
                <img className={style.vector} src={distVector} alt="Distance Vector and Link State routing protocols"/>
                <h1>Intermediate System-to-Intermediate System (IS-IS)</h1>
                <p>ISIS CISCO routing protocol is used on the Internet to send IP routing information. It consists of a range of components, including end systems, intermediate systems, areas, and domains.</p>
                <p>The full form of ISIS is Intermediate System-to-Intermediate System. Under the IS-IS protocol, routers are organized into groups called areas. Multiple areas are grouped to make form a domain.</p>
                <h1>Border Gateway Protocol (BGP)</h1>
                <p>BGP is the last routing protocol of the Internet, which is classified as a DPVP (distance path vector protocol). The full form of BGP is the Border Gateway Protocol.</p>
                <p>This type of routing protocol sends updated router table data when changes are made. Therefore, there is no auto-discovery of topology changes, which means that the user needs to configure BGP manually.</p>

                <h1>What is the purpose of Routing Protocols?</h1>
                <p>Routing protocols are required for the following reasons:</p>

                

                <ul>
                    <li>
                        <p>Allows optimal path selection</p>
                        <p>Offers loop-free routing</p>
                        <p>Fast convergence</p>
                        <p>Minimize update traffic</p>
                        <p>Easy to configure</p>
                        <p>Adapts to changes</p>
                        <p>Scales to a large size</p>
                        <p>Compatible with existing hosts and routers</p>
                        <p>Supports variable length</p>

                        
                    </li>
                </ul>    

                <h1>Classful Vs. Classless Routing Protocols</h1>
                <p>Here are some main difference between these routing protocols:</p>
                <img className={style.vector} src={Classfuless} alt="Classful Vs. Classless Routing Protocols"/>
                <p>RIPv1 and IGRP are classful protocols. These two are classful protocols as they do not include subnet mask information.	</p>
                <img className={style.vector} src={Summary} alt="Summary"/>


            </div>
            <Footer />
        </div>
       
    )
}

export default Routing;