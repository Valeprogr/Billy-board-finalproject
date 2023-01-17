import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import CardMember from './CardMember';

const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;


const AddMemberCard = ({ company,projectId }) => {
    const { request, message,clearError } = useHttp();
    const [members, setMembers] = useState();
    const [membersToAdd, setMembersToAdd] = useState([]);
    const auth = useContext(AuthContext);
    // console.log(auth.company)

    useEffect(() => {
        const res = async () => {
            const data = await request(`${REACT_APP_URL_CYCLIC}user`);
            const members = data.filter(item => item.company_name === auth.company)
            setMembers(members);
        }
        res();
    }, []);

    const saveHandler = async() => {
        try {
            const res = await request(`${REACT_APP_URL_CYCLIC}project/members/add`, 'POST', {"projectID": projectId, "members": membersToAdd});
            console.log(res);
        } catch(error) {
            message(error);
        }
        clearError();
    }
    console.log(membersToAdd)
    return (
        <div>
            <h3>Select members for the project</h3>
            {
                members && members.map(member => <CardMember id={member._id} setMembersToAdd={setMembersToAdd} key={member._id} member={member}/>)
            }
            <button onClick={saveHandler}>SAVE</button>
        </div>
    );
}

export default AddMemberCard;
