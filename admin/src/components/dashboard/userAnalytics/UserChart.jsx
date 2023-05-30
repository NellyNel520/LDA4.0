import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const UserChart = ({grid, data, title, dataKey}) => {
  
  return (
    <div className='pr-5'>
         
      <h3 className="chartTitle font-play  text-2xl">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/ 2.5} className="p-5">
        <LineChart data={data} >
          <XAxis dataKey="name" stroke="#1182F4" />
          <Line type="monotone" dataKey={dataKey} stroke="#1182F4" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#5A5A5A" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    
    </div>
  )
}

export default UserChart