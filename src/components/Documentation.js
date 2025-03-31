import React from 'react';
import proposal from '../assets/Project_Proposal.pdf';

const Documentation = () => {
    return (
        <section id="documentation">
            <h2 id="sub-title">Documentation</h2>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Download Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Project Proposal</td>
                        <td><a href={proposal} download="CCRP_Project_Proposal.pdf">Download PDF</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Documentation;