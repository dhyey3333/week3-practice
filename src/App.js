import { useState } from "react";

function App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John",
      department: "Development"
    },
    {
      id: 2,
      name: "Sarah",
      department: "HR"
    }
  ]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const addEmployee = () => {

    if(name === "" || department === ""){

      alert("Please fill all fields");
      return;

    }

    const newEmployee = {

      id: employees.length + 1,
      name: name,
      department: department

    };

    setEmployees([...employees,newEmployee]);

    setName("");
    setDepartment("");

  };

  return (

    <div
      style={{
        minHeight:"100vh",
        background:
        "linear-gradient(135deg,#0f172a,#1e3a8a)",
        padding:"30px",
        color:"white",
        fontFamily:"Segoe UI"
      }}
    >

      <h1>
        🚀 Digizura Employee Management Portal
      </h1>

      <p>
        Week 2 Day 4 - Forms & Validation
      </p>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          marginTop:"30px"
        }}
      >

        <div style={cardStyle}>
          <h1>{employees.length}</h1>
          <p>Total Employees</p>
        </div>

        <div style={cardStyle}>
          <h1>15</h1>
          <p>Projects</p>
        </div>

        <div style={cardStyle}>
          <h1>320</h1>
          <p>Tasks Completed</p>
        </div>

        <div style={cardStyle}>
          <h1>₹2.5 Cr</h1>
          <p>Revenue</p>
        </div>

      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"1fr 2fr",
          gap:"20px",
          marginTop:"40px"
        }}
      >

        <div style={glassCard}>

          <h2>Add Employee</h2>

          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e)=>
              setName(e.target.value)
            }
            style={inputStyle}
          />

          <select
            value={department}
            onChange={(e)=>
              setDepartment(e.target.value)
            }
            style={inputStyle}
          >

            <option value="">
              Select Department
            </option>

            <option>
              Development
            </option>

            <option>
              HR
            </option>

            <option>
              Sales
            </option>

            <option>
              Marketing
            </option>

          </select>

          <button
            onClick={addEmployee}
            style={buttonStyle}
          >
            Add Employee
          </button>

        </div>

        <div style={glassCard}>

          <h2>Employee Directory</h2>

          <table
            style={{
              width:"100%",
              borderCollapse:"collapse"
            }}
          >

            <thead>

              <tr>

                <th style={tableHead}>
                  ID
                </th>

                <th style={tableHead}>
                  Name
                </th>

                <th style={tableHead}>
                  Department
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.map((emp)=>(

                <tr key={emp.id}>

                  <td style={tableCell}>
                    {emp.id}
                  </td>

                  <td style={tableCell}>
                    {emp.name}
                  </td>

                  <td style={tableCell}>
                    {emp.department}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

const cardStyle = {

  background:"rgba(255,255,255,0.12)",
  backdropFilter:"blur(10px)",
  padding:"25px",
  borderRadius:"20px",
  textAlign:"center"

};

const glassCard = {

  background:"rgba(255,255,255,0.12)",
  backdropFilter:"blur(10px)",
  padding:"25px",
  borderRadius:"20px"

};

const inputStyle = {

  width:"100%",
  padding:"12px",
  marginTop:"15px",
  borderRadius:"10px",
  border:"none"

};

const buttonStyle = {

  width:"100%",
  padding:"12px",
  marginTop:"20px",
  border:"none",
  borderRadius:"10px",
  background:"#22c55e",
  color:"white",
  cursor:"pointer"

};

const tableHead = {

  padding:"12px",
  borderBottom:"1px solid white"

};

const tableCell = {

  padding:"12px",
  textAlign:"center"

};

export default App;