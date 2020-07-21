
import React from 'react';

const Profile =props=> {
    function handleName (){
    
        alert(`Name of profile user is: ${props.FulName}`)
       }
  
    return (
        <div>
            <div style={{paddingBottom:20, textAlign:"justify", marginLeft:"40%", marginRight:"-50%"}}> 
            <span className="font-weight-bold" style={{color:'blue', fontFamily:'time new roman', fontSize:30}}>FulName: </span><span className="text-capitalize" style={{fontFamily:"time new roman", fontSize:20}}>{props.FulName}</span> 
            <br/>
            <span className="font-weight-bold" style={{color:'blue', fontFamily:'time new roman', fontSize:30}}>Bio: </span><span className="text-capitalize" style={{fontFamily:"time new roman", fontSize:20}}>{props.Bio}</span>
            <br/>
            <span className="font-weight-bold"style={{color:'blue', fontFamily:'time new roman', fontSize:30}}>Profession: </span><span className="text-capitalize" style={{fontFamily:"time new roman", fontSize:20}}>{props.profession}</span>
            </div>
            {props.children}
            {handleName(props.FulName)}
            
        </div>

    )}
    Profile.defaultProps={
      FulName:"nihel", Bio:"welcome", profession:"student"
    }
   

export default Profile;