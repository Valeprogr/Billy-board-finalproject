import React,{useState}from 'react';

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
        <div>
             <button onClick={() => addToList()}>
            {member.name} {member.lastname}
        </button>
        </div>
    );
}

export default CardMember;
