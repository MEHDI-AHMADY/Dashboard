import React from 'react';
import Features from '../../Components/features/Features.jsx';
import Chart from '../../Components/chart/Chart.jsx';
import { xAxisData } from "../../datas.jsx";
import WidgetSm from '../../Components/widgetSm/WidgetSm.jsx';
import WidgetLg from '../../Components/widgetLg/WidgetLg.jsx';


const style ={
  home : `flex-[3] lg:flex-[4]`,
  homeWidgets : `flex flex-col md:flex-row gap-2 m-5`
}

export default function Home() {
  return (
    <div className={style.home}>
      <Features/>
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className={style.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
