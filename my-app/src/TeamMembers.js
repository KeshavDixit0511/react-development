import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (
    employee.map((employee) =>(
        <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} key={employee.id}/>
    ))
  )
}
export default TeamMembers;