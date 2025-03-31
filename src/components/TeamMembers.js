import React from 'react';

const TeamMembers = () => {
    return (
        <section id="team">
            <h2 id="sub-title">
                Team Members
            </h2>            
            <h3>Dr. P.S. Vivien Chan (Mentor)</h3>
            <table id="member-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Student Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>YIP Wankit, Daniel</td>
                        <td>3036338678</td>
                    </tr>
                    <tr>
                        <td>CHAN Cheung Hei</td>
                        <td>3036381280</td>
                    </tr>
                    <tr>
                        <td>SONG Insu</td>
                        <td>3036199596</td>
                    </tr>
                    <tr>
                        <td>WONG Kwun Yuet Shavonne</td>
                        <td>2013534309</td>
                    </tr>
                    <tr>
                        <td>YEUNG Hiu Ying</td>
                        <td>3036379976</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default TeamMembers;