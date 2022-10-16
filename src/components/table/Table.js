import {useRef} from 'react';
import ReactToPrint from 'react-to-print';

import TableRow from './TableRow';

import EMPLOYEES_DATA from 'data/EmployeesData';

import './Table.css';

const Table=()=>{
    const componentRef=useRef(null);

    return (
        <>
            <div className="print-area" ref={componentRef}>
                <h2 className="title">員工資料</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>編號</th>
                            <th>姓名</th>
                            <th>Email</th>
                            <th>部門</th>
                        </tr>
                    </thead>
                    <tbody>
                        {EMPLOYEES_DATA.map(employee=>(
                            <TableRow key={employee.id} employee={employee} />
                        ))}
                    </tbody>
                </table>
            </div>
            <ReactToPrint trigger={()=><button className="btn-print">列印</button>} content={()=>componentRef.current} />
        </>
    );
}

export default Table;