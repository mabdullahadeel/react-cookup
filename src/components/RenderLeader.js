import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

const RenderLeader = ({ leaders }) => {
    leaders.map = ((leader) => {
        return (
            <div key={leader.id} className="">
                <Media tag="li">
                    <Media left middle>
                        <Media object className="col-10" src={leader.image} alt={leader.name} style={{ height: 150 }, { width: 150 }} />
                    </Media>
                    <Media body className="">
                        <Media heading>{leader.name}</Media>
                        <h6>👨‍💼 {leader.designation}</h6>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </div>
        )
    })

};

export default RenderLeader;