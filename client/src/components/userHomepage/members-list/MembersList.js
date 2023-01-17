import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import AddMemberCard from '../card/AddMemberCard';
import { useHttp } from '../../../hooks/http.hook';
import BtnSpinner from '../../../btnSpinner/BtnSpinner';


const MembersList = ({ projects }) => {

    const { request,  loading } = useHttp();
    const auth = useContext(AuthContext);
    const [addMemberVisible, setAddMemberVisible] = useState(false);
    const [members, setMembers] = useState([]);

    const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;

    useEffect(() => {
        const getMembers = async () => {
            const response = await request(`${REACT_APP_URL_CYCLIC}project`, 'POST', { "project_id": projects._id });
            // console.log(response)
            const membersIds = response.members;
            const members = await request(`${REACT_APP_URL_CYCLIC}project/members`, 'POST', { "members": membersIds });
            setMembers(prev => [...members])
        }
        getMembers();
    }, []);
    console.log(members)
    return (
        <div className="px-0 border-top">
            <div className="card border-0" style={{ width: "auto" }}>
                <div className="card-body">
                    {loading && <BtnSpinner />}
                    {members.length !== 0 ? members.map(member => <div><p>{member} {member}</p></div>) : <p>list empty</p>}
                    {addMemberVisible && <AddMemberCard projectId={projects._id} company={auth.company} />}
                    <button className="btn btn-dark"
                        onClick={() => setAddMemberVisible(prev => !prev)}>add Member</button>

                </div>
            </div>

        </div>


    );
}

export default MembersList;
