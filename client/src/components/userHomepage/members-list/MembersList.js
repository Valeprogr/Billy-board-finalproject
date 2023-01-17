import React,{useState,useEffect,useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';
import AddMemberCard from '../card/AddMemberCard';



const MembersList = ({projects}) => {
    const auth = useContext(AuthContext);
    const [addMemberVisible, setAddMemberVisible] = useState(false);
    
    return (
        <div className="px-0 border-top">
            <div className="card border-0" style={{ width: "auto" }}>
                <div className="card-body">
                {addMemberVisible && <AddMemberCard company={auth.company}/>}
                    <button className="btn btn-dark"
                     onClick={() => setAddMemberVisible(prev => !prev)}>add Member</button>
                    
                </div>
            </div>

        </div>

       
    );
}

export default MembersList;
