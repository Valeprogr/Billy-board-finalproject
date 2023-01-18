import React,{useState}from 'react';
import "./cardMember.css"

const CardMember = ({ member, setMembersToAdd }) => {
    const [clicked, setClicked] = useState(false)
    const addToList = () => {

        
        if (!clicked) {
            setMembersToAdd(prev => [...prev, member._id]);
            setClicked(prev => !prev);
        } else {
            setClicked(prev => !prev);
        }
    }
    return (
        <div className='container-name-btn'>
             <button class="btn btn-outline-secondary" onClick={() => addToList()}>
            {member.name} {member.lastname}
        </button>
        </div>
    );
}

export default CardMember;
