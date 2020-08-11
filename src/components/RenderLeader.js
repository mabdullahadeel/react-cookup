import React from 'react';
import { Media } from 'reactstrap';

const RenderLeader = ({ leaders }) => {
    const gteLeaders = leaders.map((leader) => {
        return (
            <div key={leader.id}>
                <Media tag="li">
                    <Media left middle>
                        <Media object className="col-10" src={leader.image} alt={leader.name} style={{ height: 150 }, { width: 150 }} />
                    </Media>
                    <Media body >
                        <Media heading>{leader.name}</Media>
                        <h6>👨‍💼 {leader.designation}</h6>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </div >
        )
    })
    return (gteLeaders);
};

export default RenderLeader;