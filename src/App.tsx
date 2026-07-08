import EmployeeCard from './EmployeeCard'
import employees from'./Employees'

const App = () => {
  return (
      <div className="characterContainer">
        <h1>Employees</h1>
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            email={employee.email}
            />
        ))
        }
      </div>
  )
}

export default App;