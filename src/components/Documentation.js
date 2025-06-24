import React from 'react';
import proposal from '../assets/Project_Proposal.pdf';
import progress1 from '../assets/Project_Progress_Update_1.pdf';
import progress2 from '../assets/Project_Progress_Update_2.pdf';
import progress3 from '../assets/Project_Progress_Update_3.pdf';
import interim_report from '../assets/Interim_Report.pdf';
import interim_report_PPT from '../assets/Interim_Report_PPT.pptx';

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
                    <tr>
                        <td>Progress Update 1 (April)</td>
                        <td><a href={progress1} download="CCRP_Progress_Update_1.pdf">Download PDF</a></td>
                    </tr>
                    <tr>
                        <td>Progress Update 2 (May)</td>
                        <td><a href={progress2} download="CCRP_Progress_Update_2.pdf">Download PDF</a></td>
                    </tr>
                    <tr>
                        <td>Interim Report</td>
                        <td><a href={interim_report} download="CCRP_Interim_Report.pdf">Download PDF</a></td>
                    </tr>
                    <tr>
                        <td>Interim Report PPT</td>
                        <td><a href={interim_report_PPT} download="CCRP_Interim_Report.pptx">Download PPT</a></td>
                    </tr>
                    <tr>
                        <td>Progress Update 3 (June)</td>
                        <td><a href={progress3} download="CCRP_Progress_Update_3.pdf">Download PDF</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Documentation;