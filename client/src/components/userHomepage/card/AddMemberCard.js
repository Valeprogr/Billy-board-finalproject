import React,{useState,useEffect,useContext} from 'react';
import { useHttp } from '../../../hooks/http.hook';

const AddMemberCard = ({company}) => {
    const { request, loading } = useHttp();
    const [members, setMembers] = useState([]);
    const [membersToAdd, setMembersToAdd] = useState([]);

    useEffect(() => {
        const res = async () => {
            const data = await request('http://localhost:4000/user/all-by-compname', 'POST', { "company_name": company });
            setMembers(prev => [...data]);
        }

        res();
    }, []);


    const onClickHandler = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        setMembersToAdd(prev => [...prev, event.target.id]);
        console.log(membersToAdd)
        //event.target.className = "btn btn-primary"
    }
    return (
        <>
            
            {
                members.length !== 0 && members.map(member => <button  className="btn btn-outline-secondary" id={member._id} onClick={onClickHandler} key={member._id}>{member.name} {member.lastname}</button>)
            }
        </>
    );
}

export default AddMemberCard;
