import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import CardMember from './CardMember';
import "./cardMember.css";
import BtnSpinner from '../../../btnSpinner/BtnSpinner';
import { Toaster } from 'react-hot-toast';
import { useMessage } from '../../../hooks/message.hook';


const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;


const AddMemberCard = ({ company, projectId }) => {
    const { request, loading, clearError } = useHttp();
    const message= useMessage();
    const [members, setMembers] = useState();
    const [membersToAdd, setMembersToAdd] = useState([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const res = async () => {
            const data = await request(`${REACT_APP_URL_CYCLIC}user`);
            const members = data.filter(item => item.company_name === auth.company)
            setMembers(members);
        }
        res();
    }, []);

    const saveHandler = async () => {
        try {
            const res = await request(`${REACT_APP_URL_CYCLIC}project/members/add`, 'POST', { "projectID": projectId, "members": membersToAdd });
            message({ message: "Member added." })
            console.log(res);
        } catch (error) {
            message(error);
        }
        clearError();
    }
    return (
        <div className='add-member-card'>
            <Toaster />
            <h3>Select members for the project:</h3>
            {
                members && members.map(member => <CardMember id={member._id} setMembersToAdd={setMembersToAdd} key={member._id} member={member} />)
            }
            <button className='btn btn-secondary container-name-btn' onClick={saveHandler}>
                {loading && <BtnSpinner />}Save
            </button>
        </div>
    );
}

export default AddMemberCard;
