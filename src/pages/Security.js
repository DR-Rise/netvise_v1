import React from 'react';
import style from "./page.module.css"
import networkSecurity from "../img/networkSecurity.jpg"
import Footer from "../Footer";


function Security() {
    return(
        <div >
            <div className={style.contentcon}>
                <h1>What Is Network Security?</h1>
                <p>Network security is any activity designed to protect the usability and integrity of your network and data.</p>
                <ul>
                    <li><p>It includes both hardware and software technologies.</p></li>
                    <li><p>It targets a variety of threats.</p></li>
                    <li><p>It stops them from entering or spreading on your network.</p></li>
                    <li><p>Effective network security manages access to the network.</p></li>
                 </ul> 
                 <img className={style.vector} src={networkSecurity} alt="What Is Network Security"/>
                 <h1>How does network security work?</h1>
                 <p>Network security combines multiple layers of defenses at the edge and in the network. Each network security layer implements policies and controls. Authorized users gain access to network resources, but malicious actors are blocked from carrying out exploits and threats.</p>
                 <h1>How do I benefit from network security?</h1>
                 <p>Digitization has transformed our world. How we live, work, play, and learn have all changed. Every organization that wants to deliver the services that customers and employees demand must protect its network. Network security also helps you protect proprietary information from attack. Ultimately it protects your reputation.</p>
                <p>





                </p>
                <h1>Types of network security</h1>

                <ul>
                    <li>
                        <p><span>Firewalls</span> Firewalls put up a barrier between your trusted internal network and untrusted outside networks, such as the Internet. They use a set of defined rules to allow or block traffic. A firewall can be hardware, software, or both. Cisco offers unified threat management (UTM) devices and threat-focused firewalls.</p>
                        <p><span>Email security</span> Email gateways are the number one threat vector for a security breach. Attackers use personal information and social engineering tactics to build sophisticated phishing campaigns to deceive recipients and send them to sites serving up malware. An email security application blocks incoming attacks and controls outbound messages to prevent the loss of sensitive data. </p>
                        <p><span>Anti-virus and anti-malware software</span> "Malware," short for "malicious software," includes viruses, worms, Trojans, ransomware, and spyware. Sometimes malware will infect a network but lie dormant for days or even weeks. The best antimalware programs not only scan for malware upon entry, but also continuously track files afterward to find anomalies, remove malware, and fix damage.</p>
                        <p><span>Network segmentation</span> Software-defined segmentation puts network traffic into different classifications and makes enforcing security policies easier. Ideally, the classifications are based on endpoint identity, not mere IP addresses. You can assign access rights based on role, location, and more so that the right level of access is given to the right people and suspicious devices are contained and remediated.</p>
                        <p><span>Access control</span> Not every user should have access to your network. To keep out potential attackers, you need to recognize each user and each device. Then you can enforce your security policies. You can block noncompliant endpoint devices or give them only limited access. This process is network access control (NAC).</p>
                        <p><span>Application security</span> Any software you use to run your business needs to be protected, whether your IT staff builds it or whether you buy it. Unfortunately, any application may contain holes, or vulnerabilities, that attackers can use to infiltrate your network. Application security encompasses the hardware, software, and processes you use to close those holes.</p>
                        <p><span>Behavioral analytics</span> To detect abnormal network behavior, you must know what normal behavior looks like. Behavioral analytics tools automatically discern activities that deviate from the norm. Your security team can then better identify indicators of compromise that pose a potential problem and quickly remediate threats.</p>
                        <p><span>Cloud security</span> Cloud security is a broad set of technologies, policies, and applications applied to defend online IP, services, applications, and other imperative data. It helps you better manage your security by shielding users against threats anywhere they access the Internet and securing your data and applications in the cloud.</p>
                        <p><span> Data loss prevention</span> Organizations must make sure that their staff does not send sensitive information outside the network. Data loss prevention, or DLP, technologies can stop people from uploading, forwarding, or even printing critical information in an unsafe manner.</p>
                        <p><span> Intrusion prevention systems </span> An intrusion prevention system (IPS) scans network traffic to actively block attacks. Secure IPS appliances do this by correlating huge amounts of global threat intelligence to not only block malicious activity but also track the progression of suspect files and malware across the network to prevent the spread of outbreaks and reinfection.</p>
                        <p><span>Mobile device security </span> Cybercriminals are increasingly targeting mobile devices and apps. Within the next 3 years, 90 percent of IT organizations may support corporate applications on personal mobile devices. Of course, you need to control which devices can access your network. You will also need to configure their connections to keep network traffic private.</p>
                        <p><span>Security information and event management</span>SIEM products pull together the information that your security staff needs to identify and respond to threats. These products come in various forms, including physical and virtual appliances and server software.</p>
                        <p><span>VPN</span> A virtual private network encrypts the connection from an endpoint to a network, often over the Internet. Typically, a remote-access VPN uses IPsec or Secure Sockets Layer to authenticate the communication between device and network.</p>
                        <p><span>Web security</span>A web security solution will control your staff’s web use, block web-based threats, and deny access to malicious websites. It will protect your web gateway on site or in the cloud. "Web security" also refers to the steps you take to protect your own website.</p>
                        <p><span>Wireless security</span>Wireless networks are not as secure as wired ones. Without stringent security measures, installing a wireless LAN can be like putting Ethernet ports everywhere, including the parking lot. To prevent an exploit from taking hold, you need products specifically designed to protect a wireless network.</p>
                        <p><span></span>  </p></li>
                </ul>

            </div>
            <Footer />
        </div>
    )
}

export default Security;