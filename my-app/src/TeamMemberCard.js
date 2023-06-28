import React from 'react';
import femaleProfile from './images/femaleprofile.png';
import maleProfile from './images/maleprofile.png';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (
        <div key={employee.id} className={(employee.teamName === selectedTeam ? 'cards m-2 standout' : 'cards m-2')} id={employee.id} onClick={handleEmployeeCardClick}>
          {(employee.gender === 'Male') ? <img style={{background:"transparent"}} src={maleProfile} alt='male profile' /> : <img style={{height: '35vh',background:"transparent"}} src={femaleProfile} alt='female profile' />}
          <div>
            <h5>Full Name: {employee.fullName}</h5>
            <p><b>Designation:</b>{employee.designation}</p>
          </div>
        </div>
  );
};

export default TeamMemberCard;
