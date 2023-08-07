import React from "react";
import "../style.css"



const TableDetails = ({data}) => {
    return (<>
        
        <table>
            <thead>
                <tr style={{background:"#00338D",color:"white"}}>
                    <th style={{}}>Table Details</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item)=> (
                    <tr key = {item.id} style={{border:'3px solid white'}}>
                        <td> {item.Column_Name}</td>
                        <td>{item.Field}</td>
                    
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}
export default TableDetails;