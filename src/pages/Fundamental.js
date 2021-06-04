import React from 'react';
import style from "./page.module.css"
import Footer from "../Footer";
import tcp from "../img/tcp.jpg";
import ip from "../img/ip.png";
import diagram from "../img/diagram.svg";
import special from "../img/SpecialIP.png";
import privateip from "../img/PrivateIP.png";

function Fundamental() {
    return(
        <>
            <div className={style.contentcon}>
                <h1>IP address standards and services</h1>
                <p>When you consider a move to the cloud, it's essential in your role as an Azure developer, solution architect, or administrator to know the fundamentals of how your network works. The next step in understanding the composition of a network is to take a detailed look at the interoperability of your network. This knowledge applies whether it's your organization's network or more extensive networks like the web. All networks are built on the same principles.</p>
                <p>In this unit, you'll learn about the main aspects of network communications and why networks are built by using the Transmission Control Protocol/Internet Protocol (TCP/IP). You'll understand the differences between Internet Protocol address standards. Finally, you'll explore subnetting, the Domain Name System (DNS), ports, and the use and role of private IP addresses.</p>
                <h1>What is the Address Resolution Protocol?</h1>
                <p>The Address Resolution Protocol (ARP) is a communications protocol within the Internet Protocol suite. It's a request-response protocol used to resolve the media access control (MAC) address for a given IP address. ARP supports many data link layer technologies, such as Internet Protocol version 4 (IPv4), DECnet, and PUP. When an Internet Protocol version 6 (IPv6) address is resolved, the Neighbor Discovery Protocol (NDP) is used instead of ARP. Without ARP, there would be no means to resolve an IP address to a physical device address.</p>
                <p>There's also the Reverse Address Resolution Protocol (RARP), which retrieves an IP address based on the given MAC address.</p>
                <h1>What is TCP/IP?</h1>
                <p>The Transmission Control Protocol/Internet Protocol is a collection of different communication protocols that support and define how network-enabled devices interconnect with each other over an IP-based network. At its heart are two key protocols: TCP and IP. TCP/IP makes the internet possible, as well as private and public networks like intranets and extranets.</p>
                <p>TCP/IP defines the way data is shared between network-enabled devices by defining the end-to-end communication process. It manages how the message is broken down into packets of data, which are sometimes known as datagrams. TCP/IP also determines how the packet is addressed and transmitted, routed, and received. TCP/IP can determine the most efficient route across a network.</p>
                <p>The TCP/IP model is designed to be stateless. This design means the network stack treats each request as new because it isn't related to the previous request. One part of the TCP/IP model isn't stateless. The transport layer operates in a stateful mode because it maintains a connection until all the packets in the message are received.</p>
                <p>TCP/IP is an open standard. It's governed, but it's not owned by any one organization, so it works with all operating systems, networks, and hardware.</p>
                <h1>TCP/IP model layers</h1>
                <p>The TCP/IP model is made up of four distinct layers. Each layer uses a different type of protocol. Notice how the TCP/IP model is similar to the Internet Protocol suite discussed earlier.</p>
                <div className={style.tcp}>
                <img src={tcp} alt="TCP/IP Model"/>
                <ul>
                    <li><p><span>Application layer</span> : The application layer is responsible for determining which communication protocols are used. This layer includes HyperText Transfer Protocol (HTTP), DNS, File Transfer Protocol (FTP), Internet Message Access Protocol (IMAP), Lightweight Directory Access Protocol (LDAP), Post Office Protocol (POP), Simple Mail Transfer Protocol (SMTP), Simple Network Management Protocol (SNMP), Secure Shell (SSH), Telnet, and TLS/SSL.</p></li>
                    <li><p><span>Transport layer</span> : This layer splits the application data into manageable ordered chunks by using the right port for the application protocol that's used. The protocols associated with this layer are TCP and the User Datagram Protocol (UDP).</p></li>
                    <li><p><span>Internet layer</span> : Also known as the network layer, this layer ensures the data packet gets to its destination. The protocols associated with this layer are IP, IPv4, IPv6, Internet Control Message Protocol (ICMP), and Internet Protocol Security (IPsec).</p></li>
                    <li><p><span>Network access layer</span> : This layer is responsible for defining how the data is sent across the network. The protocols associated with this layer are ARP, MAC, Ethernet, digital subscriber line (DSL), and Integrated Services Digital Network (ISDN).</p></li>
                </ul>
                </div>
                <h1>What are the Internet Protocol standards?</h1>
                <p>Recall from earlier that the Internet Protocol isn't concerned about the order in which the packets are sent or received. It also doesn't guarantee that a packet will be delivered. The Internet Protocol only provides a logical addressing system that's used to route and forward messages to their destinations.</p>
                <p>Today, there are two Internet Protocol versions that work within networks.</p>
                <h1>IPv4</h1>
                <p>Internet Protocol version 4 was released in 1983 and is the standard for all packet-switch-based networks in use today. IPv4 uses a 32-bit address space that gives an upper limit of 4,294,967,296 (4.3 billion) unique logical IP addresses. A large number of these available IP addresses are reserved for a specific purpose, for example, private networks, local hosts, internet relays, documentation, and subnets.</p>
                <h1>Structure of an IPv4 address</h1>
                <p>The structure of an IPv4 address is four decimal numbers in the range of 0 to 255, each separated with a dot. It's also known as the dotted-decimal format. An example of an IP address is 192.168.0.1.</p>
                <h1>Parts of an IPv4 address</h1>
                <p>There are two parts to an IP address, the network and the host. Let's use the address 192.168.0.1 as an example.</p>
                <p>The network part of an IP address covers the first set of decimal numbers. In the example, that's 192.168.0. This number is unique to the network and specifies the class of the network. There are a number of network classes available, described next.</p>
                <p>The host part of the IP address covers the next set of decimal numbers. In the example, that's 1. This number represents the device and has to be unique within the network to avoid address conflicts. Each device on a network segment must have a unique address.</p>
                <h1>IPv4 address classes</h1>
                <p>The Internet Protocol's local address space is split into five logical classes or ranges of IP addresses, each represented by a letter of the alphabet.</p>
                <img className={style.ipv} src={ip} alt="IPv4 classes"/>
                <p>For classes A, B, and C, the start and end IP addresses are reserved and shouldn't be used. Class D is reserved for multicast traffic only. Class E is reserved and can't be used on public networks, like the internet.</p>
                <p>In the previous table, the last column is marked as a subnet mask. The subnet mask uses the same format of the IP address. But its purpose is to identify valid IP addresses in an IP range.</p>
                <p>For example, assume you have an IP address range that starts at 192.168.0.1, and you have a subnet of 255.255.255.0.You'll apply the subnet mask in the following way. For each address segment value specified as 255 in the mask, the corresponding address segment is static. When you want to pick an IP address, you have to pick an address that matches 192.168.0. Where the segment has a value of 0, you're allowed to use any value between 0 to 255. A subnet mask of 255.255.255.0 gives an IP address range of 192.168.0.0 to 192.168.0.255, which are valid values to select.</p>
                <h1>What is a subnet?</h1>
                <p>A subnet defines one or more logical networks within the class A, B, or C network. Without subnets, you're restricted to a single network in each of the class A, B, or C networks.</p>
                <p>An IP address, also known as a network address or routing prefix, represents the address of the device or computer to send the packet of data. A subnet, or host address, represents which network or subnetwork to use. A subnet is a 32-bit number framed by using the dotted-decimal format. For example, 255.255.255.0 is a standard subnet mask.</p>
                <p>In an IPv4 network, for a packet of data to be routed to the correct network and the right network device, a routing prefix is needed. A routing prefix is created by taking the subnet mask and applying a bitwise AND to the IP address.</p>
                <p>A more common way to define the subnet and the routing prefix is to use the Classless Interdomain Routing (CIDR) notation. CIDR applies to the IP address as the number of bits you want to allocate to your subnet. Using CIDR notation, at the end of the IP address, add a "/" and then the number of bits. For example, 198.51.100.0/24 is the same as using the dotted-decimal format subnet mask 255.255.255.0. It offers an address range of 198.51.100.0 to 198.51.100.255.</p>
                <img className={style.diagram} src={diagram} alt="Subnet diagram"/>
                <p>Subnets allow multiple subnetworks to exist within one network. They can be used to enhance routing performance. Subnets can be arranged hierarchically to create routing trees.</p>
                <h1>Special-use addresses</h1>
                <p>Each of the classes has restrictions on the ranges of IP addresses that can be used. This table shows the more common ones.</p>
                <img className={style.ipv} src={special} alt="Special-use addresses"/>
                <h1>IPv4 address space exhaustion</h1>
                <p>Soon after the introduction of IPv4, it became apparent that the pool of available IP addresses was being consumed faster than was expected. For example, think about the number of mobile devices that have been released in the last couple of years.</p>
                <p>Several solutions were introduced to mitigate the threat of running out of IP addresses. These ideas included network address translation (NAT), classful networks, and CIDR. In the 1990s, IPv6 was created to increase the number of IP address spaces to 128 bits. IPv6 was introduced commercially in 2006.</p>
                <h1>Private IP addressing</h1>
                <p>In classes A, B, and C, a range of IP addresses are set aside for private networks. These IP ranges aren't accessible via the internet. All public routers ignore any packets sent to them that contain such an address.</p>
                <img className={style.ipv} src={privateip} alt="Private IPs"/>
                <p>Network devices on a private network can't communicate with devices on a public network. Communication can happen only through network address translation at a routing gateway.</p>
                <p>The only way to connect two private networks in different geographical areas is to use a virtual private network (VPN). A VPN encapsulates each private network packet. The VPN can further encrypt the packet before it sends it across a public network from one private network to another private network.</p>
                <h1>IPv6</h1>
                <p>Internet Protocol version 6 is the latest version of the IP standard. IPv6 was designed and developed by the Internet Engineering Task Force (IETF) to address the problem of IPv4 logical address exhaustion and to eventually replace the IPv4 standard. It was adopted as a recognized internet standard in July 2017.</p>
                <p>IPv6 uses a 128-bit address space, which allows 2128 addresses. This amount is approximately 7.9x1028 times more than IPv4.</p>
                <p>IPv4 and IPv6 weren't designed to be interoperable, which has slowed down the transition to the newer IPv6 standard.</p>
                <p><span>IPv6 also introduced several benefits:</span> </p>
                <ul>
                    <li><p><span>Simplified network configuration </span> : IPv6 has address autoconfiguration built into the protocol. For example, a router broadcasts the network prefix and the network device can append its MAC address to self-assign a unique IPv6 address.</p></li>
                    <li><p><span>Security </span> : IPsec is built into IPv6.</p></li>
                    <li><p><span>New service support </span> : IPv6 eliminates the need for NAT, which makes it easier to create peer-to-peer networks.</p></li>
                    <li><p><span>Multicast and anycast functionality </span> : Multicast allows for the broadcast of messages in a one-to-many fashion. Anycast allows a single destination to have multiple routing paths to two or more endpoint destinations.</p></li>
                    </ul>    
                <h1>Structure of an IPv6 address</h1>
                <p>The structure of IPv6 is different from IPv4. Instead of four decimal numbers, it uses eight groups of four hexadecimal numbers called a hexadectet. Each hexadectet is separated with a colon. A full IPv6 address looks like this: 2001:0db8:0000:0000:0000:8a2e:0370:7334.</p>
                <p>The new standard allows for the address to be simplified by using the following rules:</p>
                <ul>
                    <li><p>One or more leading zeros from any group can be removed, so 0042 becomes 42.</p></li>
                    <li><p>Consecutive sections of zeros are replaced with a double colon (::), which can be used only once in an address.</p></li>
                    </ul>    
                <p>The shortened version of the IPv6 example is 2001:db8::8a2e:370:7334. Notice that all the instances of 0000 are removed.</p>
                <h1>DNS</h1>
                <p>The Domain Name System is a decentralized lookup service that translates a human-readable domain name or URL into the IP address of the server that's hosting the site or service. The worldwide distributed nature of DNS is a vital component of the internet. DNS has been in use since its inception in 1985.</p>
                <p>A DNS server serves two purposes. The first is to maintain a cache of recently searched-for domain names, which improves performance and reduces network traffic. The second is to act as the start of authority (SOA) for all the domains under it. When a DNS server is looking to resolve a domain name that isn't held in its cache, it starts with the highest level, the dot, and then works down the subdomains until it finds the DNS server acting as the SOA. Once found, it stores the IP address of the domain in its local cache.</p>
                <p>The DNS also holds specific records that relate to the domain. These records include the SOA, IP addressing (A and AAAA), SMTP email (MX), name servers (NS), and domain name alias (CNAME) records.</p>
                <h1>What does Azure offer?</h1>
                <p>While many of the concepts discussed here are technical, Azure builds and extends several of these aspects with tools that can help with the configuration of your network.</p>
                <h1>Azure DNS</h1>
                <p>Azure DNS is a service for hosting registered domain names by using the Azure infrastructure. You can use Azure DNS to manage your DNS records, such as A, AAAA, CNAME, SOA, NS, and MX, by using your regular Azure sign-in credentials.</p>
                <p>Azure DNS won't replace domain registrars, where you register and purchase domains.</p>
                <p>One of the core benefits provided by Azure DNS is the alias record, which can use either an A, AAAA, or CNAME record. By using the alias, you can route traffic to an Azure resource.</p>
                <h1>Azure Virtual Network</h1>
                <p>You can use Azure Virtual Network to build a private network in the cloud. With an Azure virtual network, you can build networks that can communicate with other virtual networks and your on-premises network. They're an efficient way to extend your network into the cloud.</p>
                <p>With an Azure virtual network, you can control the addressing that's used. Most virtual networks are assumed to be private networks. As with a regular network, you can use subnetting to segment and give IP address ranges to those subnets.</p>
            </div>
        <Footer />
        </>
    )
}

export default Fundamental;