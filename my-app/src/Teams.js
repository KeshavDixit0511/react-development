const teams = ({selectedTeam,handleTeamSelectionChange})=>{
    return(
        <div className="team-list" >
        <select className="selection-list" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TeamA"> TeamA</option>
                        <option value="TeamB"> TeamB</option>
                        <option value="TeamC"> TeamC</option>
                        <option value="TeamD"> TeamD</option>
                    </select>
                    </div>
    )
}
export default teams;