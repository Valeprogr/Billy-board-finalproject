import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';

const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
const AddMemberCard = ({ company }) => {
    const { request, loading } = useHttp();
    const [members, setMembers] = useState();
    const [membersToAdd, setMembersToAdd] = useState([]);
    const auth = useContext(AuthContext);
    // console.log(auth.company)

    useEffect(() => {
        const res = async () => {
            const data = await request(`${REACT_APP_URL_CYCLIC}user`);
            const members = data.filter(item => item.company_name == auth.company)
            setMembers(members);
        }
        res();
    }, []);

    const onClickHandler = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        setMembersToAdd(prev => [...prev, event.target.id]);
    }
    console.log(membersToAdd)
    return (
        <div>
            <h3>Select members for the project</h3>
            {
                members && members.map(ele => <button  className="btn btn-outline-dark" id={ele._id} onClick={onClickHandler} key={ele._id}>{ele.name} {ele.lastname}</button>)
            }
        </div>
    );
}

export default AddMemberCard;
