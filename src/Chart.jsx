import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

  const params = useParams();
    console.log(params.index);
  
const data=[
    {name:"G1",value:200},
    {name:"G1",value:params.index},
]
  return <>
    <div className="d-flex justify-content-center align-items-center py-5 flex-column">
    <h1> chart</h1>
      <LineChart
          width={1000}
          height={700}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={`value`} stroke="#FF4C4C" activeDot={{ r: 3 }} />
        </LineChart>
    
    </div>
    </>

}
