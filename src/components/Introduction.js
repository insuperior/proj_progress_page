import React from 'react';

const Introduction = () => {
    return (
        <section id="introduction">
            <h2 id="sub-title">
                Introduction
            </h2>
            <p>
                <strong>Background:</strong> 
                Hong Kong faces increasing cybersecurity threats. According to The Hong Kong Computer Emergency Response Team Coordination Centre (HKCERT) statistics [25], common attacks including phishing attacks, ransomware, web server and app attacks and malware attacks (botnets) pose significant risks to organizations and endanger personal data, financial assets, and critical infrastructure for IT environments. This evolving threat landscape is intensified by the digitalization of more businesses in Hong Kong. With the rising trend mentioned above, organizations are expected to strengthen their cybersecurity measures in their IT environments. In addition, more regulatory requirements and guidelines will be introduced to protect the public interest and ensure the stability of various industries. An upcoming legal requirement, the Protection of Critical Infrastructure (Computer System) Bill, is expected to be fully implemented by mid-2026.
            </p>
            <p>
                <strong>Problem Statement and Motivation:</strong> 
                Organizations in Hong Kong face considerable challenges in cyber incident handling, including addressing complex regulatory expectations, determining incident severity, and preparing incident reporting materials due to limited resources such as experience, knowledge, and expertise. Cybersecurity threats are becoming more sophisticated, further complicating these challenges. These problems cause delays and operational disruptions, highlighting the need for an integrated platform to streamline and reduce the time spent on the workflow and ensure consistency in cybersecurity compliance and reporting. Unlike traditional incident reporting tracking, this project is empowered by cutting-edge technologies, including NLP, AI, and machine learning, to integrate regulatory requirements, severity classification, and standardized incident reporting into a single platform. Additionally, the application of a decentralized file system (IPFS) ensures tamper-proof and transparent audit trails for cybersecurity incidents. This project will significantly enhance cybersecurity compliance, reduce incident reporting inefficiencies, and improve data management of incident cases for businesses.
            </p>
            <p>
                <strong>Objective and Expected Deliverables:</strong> 
                This project aims to design and develop an intelligent, AI-driven, and decentralized cybersecurity management solution, tentatively named “Cybersecurity Compliance and Reporting Platform,” to assist organizations in Hong Kong with:
            </p>
            <ul>
                <li>
                    <strong>Incident Severity Classification:</strong> 
                    The platform features an AI chatbot that helps users classify the severity of cybersecurity incidents and provides real-time regulatory guidance to ensure consistency in incident severity determination.
                </li>
                <li>
                    <strong>AI-Powered Incident Reporting:</strong> 
                    It allows users to input key details and instantly create standardized reports for submission to the appropriate government departments for reporting. During the incident case input stage, reviewers can always provide comments and request clarifications quickly, making the reporting process smoother and more efficient. The report generation function enables users to generate incident reports with standardized and clear formats for both external and internal reporting.
                </li>
                <li>
                    <strong>Secure Data Storage & Encryption:</strong> 
                    The platform ensures secure and tamper-proof data storage using IPFS (Inter-Planetary File System), making all records immutable and highly available. Strict access controls and RSA encryption protect incident reports, ensuring that only authorized entities can access sensitive information. This approach guarantees data confidentiality, integrity, and compliance with cybersecurity regulations.
                </li>
                <li>
                    <strong>Regulatory Compliance & Knowledge Management:</strong> 
                    The regulatory dashboard keeps organizations updated on the latest cybersecurity laws and compliance requirements. The knowledge base is regularly updated to reflect new regulations, reducing the risk of noncompliance. The platform also integrates AI-powered search (RAG framework), which retrieves and provides the most up-to-date regulatory information when users seek compliance guidance. This ensures accurate and reliable recommendations for cybersecurity reporting.
                </li>
                <li>
                    <strong>Streamlined Compliance & Efficiency:</strong> The platform serves as an all-in-one compliance tool, combining incident classification, reporting, and regulatory tracking in one place. By automating these processes, it helps organizations save time, reduce manual effort, and minimize errors in cybersecurity incident reporting. The system’s structured workflow ensures faster response times, greater accuracy, and improved regulatory compliance, making it a practical solution for managing cybersecurity risks.
                </li>
            </ul>
        </section>
    );
};

export default Introduction;