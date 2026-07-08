type EmployeeCardProps = {
  name: string;
  role: string;
  email: string;
};

const EmployeeCard = ({ name, role, email }: EmployeeCardProps) => {
  return (
    <div className="profileContainer">
      <div className="characterImage"></div>
      <div className="profileText">
        <h3 className="nameText">{name}</h3>
        <p className="characterText">{role}</p>
        <p className="characterText">{email}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
