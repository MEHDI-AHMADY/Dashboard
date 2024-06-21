import React from 'react';
import { ResponsiveContainer , LineChart , Line , XAxis , CartesianGrid , Tooltip } from 'recharts';


const style = {
    chart : `m-5 p-5 shadow-chart dark:text-white`,
    chartTitle : `mb-5`,
}

export default function Chart({title = 'Month Sale' , data = [] , dataKey = 'sale' , grid}) {
  return (
    <div className={style.chart}>
        <h3 className={style.chartTitle}>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray='10' />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
