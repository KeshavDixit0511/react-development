import './App.css';
import { useState, useEffect } from "react";
import Header from './header';
import Employee from './Employee';
import Footer from './footer';
import Nav from './nav';
import NotFound from './NotFound';
import GroupedTeamMeambers from './GroupTeamMember';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

    const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
        id: 1,
        fullName: "Keshav Dixit",
        designation: "Web Developer",
        gender: "Male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Kunal Punjabi",
        designation: "Trader",
        gender: "Male",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Ria Bansal",
        designation: "Web Developer",
        gender: "Female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Ishita Soni",
        designation: "Designer",
        gender: "Female",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "Madhuri Singh",
        designation: "Velli",
        gender: "Female",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Himanshi",
        designation: "Ashique",
        gender: "Female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "Kartikeya",
        designation: "T&P",
        gender: "Male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Ishaan",
        designation: "Web Developer",
        gender: "Male",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "KHushi",
        designation: "Cloud Manager",
        gender: "Female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Dimple Parmar",
        designation: "Graphic Designer",
        gender: "Female",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Khush Sarswat",
        designation: "MArketing ",
        gender: "Male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "charmi",
        designation: "cyber security",
        gender: "Female",
        teamName: "TeamD"
    }
    ]);

    useEffect(() => {

        localStorage.setItem('employeeList', JSON.stringify(employee));

    }, [employee]);

    useEffect(() => {

        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

    }, [selectedTeam]);

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value)
    }
    function handleEmployeeCardClick(event) {
        const transformedEmployee = employee.map((employee) => employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee);
        setEmployee(transformedEmployee);
    }
    return (
        <Router>
            <Nav />
            <Header selectedTeam={selectedTeam}
                teamMemberCount={employee.filter((employee) => employee.teamName === selectedTeam).length}
            />
            <Routes>
                <Route path='/'
                    element={<Employee employee={employee}
                        selectedTeam={selectedTeam}
                        handleEmployeeCardClick={handleEmployeeCardClick}
                        handleTeamSelectionChange={handleTeamSelectionChange}
                    />}>

                </Route>
                <Route path='/GroupedTeamMeambers' element={<GroupedTeamMeambers employee={employee}
                    selectedTeam={selectedTeam}
                    setTeam={setTeam} />}>

                </Route>
                <Route path='*' element={<NotFound/>}>

                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
