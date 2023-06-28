import { useState } from "react";



const GroupedTeamMeambers = ({employee,selectedTeam,setTeam}) => {

    const [groupedEmployee,setGroupedData] = useState(GroupedTeamMeambers());

    function GroupedTeamMeambers(){
        var teams = [];
        var teamAMembers = employee.filter((employee) => employee.teamName === 'TeamA');
        var teamA = {team:'TeamA',members:teamAMembers,collapsed: selectedTeam === 'TeamA'?false:true}
        teams.push(teamA);

        var teamBMembers = employee.filter((employee) => employee.teamName === 'TeamB');
        var teamB = {team:'TeamB',members:teamBMembers,collapsed: selectedTeam === 'TeamB'?false:true}
        teams.push(teamB);

        var teamCMembers = employee.filter((employee) => employee.teamName === 'TeamC');
        var teamC = {team:'TeamC',members:teamCMembers,collapsed: selectedTeam === 'TeamC'?false:true}
        teams.push(teamC);

        var teamDMembers = employee.filter((employee) => employee.teamName === 'TeamD');
        var teamD = {team:'TeamD',members:teamDMembers,collapsed: selectedTeam === 'TeamD'?false:true}
        teams.push(teamD);
        
    }
    function handleTeamClick(event){
        var transformedGroupData = groupedEmployee.map((groupedData)=> groupedData.team === event.currentTarget.id?{...groupedData,collapsed:!groupedData.collapsed}:groupedData);
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main>
            {
                groupedEmployee.map((item) =>{
                    return(
                        <div key={item.team}>
                            <h4 id={item.team} onClick={handleTeamClick}>Team Name: {item.team}</h4>
                            <div id={"colapse"+ item.team} className={item.collapsed === true?"collapse":""}>
                                <hr/>
                                {
                                   item.members.map(member =>{
                                    return(
                                        <div>
                                            <h5>
                                                <span>Full Name : {member.fullName}</span>
                                            </h5>
                                            <p>Designation : {member.designation}</p>
                                        </div>
                                    )
                                   })
                                }

                            </div>
                        </div>
                        
                    )
                })
            }
        </main>
    )
}
export default GroupedTeamMeambers