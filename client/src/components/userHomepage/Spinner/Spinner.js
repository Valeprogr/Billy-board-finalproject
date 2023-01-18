import React from 'react';

const Spinner = () => {
    return (
        <div style={{ width: "5rem", height: "5rem", margin: "50%" }}>
            <div className="spinner-grow"  role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
    <div className="spinner-grow"  role="status">
             <span class="visually-hidden">Loading...</span>
           </div>
    </div>
    );
}

export default Spinner;



