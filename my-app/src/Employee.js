import Teams from './Teams';
import TeamMembers from './TeamMembers';


const Employee = ({employee,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange})=>{



    return(
        <main>
            <div>
                <div>
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
                </div>
            </div>
            <div>
                <div>
                    <div className="card-collection">
                        
                          <TeamMembers employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Employee