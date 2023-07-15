import React, { useContext } from 'react'
import { Mycontext } from './Context'

const Userdetail = () => {
    const{data}=useContext(Mycontext)
  return (
    <div>


   <table style={{ width: "100%", borderCollapse: "collapse" }}>
     <h3 style={{padding:"20px"}}>User Details</h3>
      <tr style={{ backgroundColor: "#f2f2f2" }}>
        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Name</th>
        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Email</th>
      </tr>
      {data.map((x) =>
        <tr key={x.fname}>
          <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{x.fname}</td>
          <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{x.email}</td>
        </tr>
      )}
    </table> 
    </div>
  )
}

export default Userdetail