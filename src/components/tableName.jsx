import React from "react";
import "../style.css"



const TableName = ({data}) => {
    return (<>
        
        <table>
            <thead>
                <tr style={{background:"#00338D",color:"white"}}>
                    <th style={{}}>Table Name</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item)=> (
                    <tr key = {item.id} style={{border:'3px solid white'}}>
                        <td> {item.name}</td>
                    
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}
export default TableName;