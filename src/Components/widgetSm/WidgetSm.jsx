import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

const style = {
    widgetSm : `flex-1 p-5 md:mr-5 shadow-normal`,
    widgetSmTitle : `text-[22px] font-medium`,
    widgetSmList : `m-0 p-0`,
    widgetSmListItem : `flex justify-between items-center my-5 mx-0`,
    widgetSmImg : `w-[40px] h-[40px] rounded-full object-cover`,
    widgetSmUser : `flex flex-col`,
    widgetSmUserName : `font-bold`,
    widgetSmUserTitle : `font-extralight`,
    widgetSmBtn : `flex items-center border-0 rounded-lg py-[8px] px-[10px] bg-[#eeeef7] text-[#555] cursor-pointer`,
    widgetSmIcon : `text-[16px]`
}

export default function WidgetSm() {
    const [data , setData] = useState([]);

    const fetchNewUsers = async () => {
        try {
            const res = await axios.get('https://dashboard-8d24f-default-rtdb.firebaseio.com/users.json');

            if(data) {

                const dataArray = Object.entries(res.data).map(([key, value]) => ({
                    id: key,
                    ...value
                }));

                setData(dataArray.slice(0,5));
            }else {
                setData([])
            }
        }
        catch (err) {
            console.error('Error :' , err);
        }
    };

    useEffect (() => {
       fetchNewUsers();
    },[])
    
  return (
    <div className={style.widgetSm}>
        <span className={style.widgetSmTitle}>New Join Members</span>
        <ul className={style.widgetSmList}>
            {data ? data.map(member => (
                 <li key={member.id} className={style.widgetSmListItem}>
                 <div className={style.widgetSmUser}>
                     <span className={style.widgetSmUserName}>{member.userFirstName}</span>
                     <span className={style.widgetSmUserTitle}>{member.userJob}</span>
                 </div>
                 <button className={style.widgetSmBtn}>
                 <VisibilityIcon className={style.widgetSmIcon} />
                 </button>
             </li>
            )) : ''}
           
        </ul>
    </div>
  )
}
