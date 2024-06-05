import React from 'react';
import { transactions } from './../../datas.jsx';
 
export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgBtn ' + type}>{type}</button>
    }

    const style = {
        widgetLg : `flex-[2] p-5 my-3 md:my-0 shadow-normal` , 
        widgetLgTitle : `text-[22px] font-[600]`,
        widgetLgTableWrapper : `overflow-x-auto`,
        widgetLgTable : `border-spacing-[20px] w-full`,
        widgetLgTh : `text-left`,
        widgetLgUser : `flex items-center my-5 whitespace-nowrap`,
        widgetLgImg : `hidden sm:block sm:w-[40px] sm:h-[40px] sm:rounded-full sm:object-cover mr-2` , 
        widgetLgDate : `font-light whitespace-nowrap`,
        widgetLgaAmount : `font-light whitespace-nowrap`,
        widgetLgBtn : `py-[5px] px-[7px] rounded-lg border-0`,
    }

  return (
    <div className={style.widgetLg}>
        <h3 className={style.widgetLgTitle}>Latest Transactions</h3>
        <div className={style.widgetLgTableWrapper}>
            <table className={style.widgetLgTable}>
                <thead>
                <tr>
                    <th className={style.widgetLgTh}>Customer</th>
                    <th className={style.widgetLgTh}>Date</th>
                    <th className={style.widgetLgTh}>Amount</th>
                    <th className={`hidden sm:block ${style.widgetLgTh}`}>Status</th>
                </tr>
                </thead>

                {transactions ? transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td className={style.widgetLgUser}>
                            <img src={transaction.img} className={style.widgetLgImg} />
                            <span className="widgetLgName">{transaction.customer}</span>
                        </td>
        
                        <td className={style.widgetLgDate}>
                            {transaction.date}
                        </td>
        
                        <td className={style.widgetLgaAmount}>
                            {transaction.amount}$
                        </td>
        
                        <td className="hidden sm:block">
                            <Button type={transaction.status}></Button>
                        </td>
                </tr>
                )) : ''}
    
            </table>
        </div>
    </div>
  )
}
