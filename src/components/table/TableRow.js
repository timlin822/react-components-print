import './Table.css';

const TableRow=({employee})=>{
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
        </tr>
    );
}

export default TableRow;