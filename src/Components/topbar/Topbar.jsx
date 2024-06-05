import React , { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const style = {
    topbar : `w-full h-[50px] bg-white sticky top-0 z-30`,
    topbarWrapper : `flex items-center justify-between h-full py-0 px-5`,
    logo  : `font-bold text-[20px] cursor-pointer text-blue-500`,
    topbarRight : `flex items-center`,
    topbarIconContainer : `relative cursor-pointer mr-[10px] text-[#555]`,
    topIconBadge : `w-[15px] h-[15px] absolute top-[-5px] right-0 bg-red-400 text-white flex items-center justify-center rounded-full text-[10px]`,
    topAvatar : `w-[40px] h-[40px] cursor-pointer rounded-full object-cover`,
}   

export default function Topbar({ showMenuHandler }) {

  return (
    <div className={style.topbar}>
        <div className={style.topbarWrapper}>
            <div className="topbarMenu lg:hidden" onClick={showMenuHandler}>
                <MenuIcon />    
            </div>
            <div>
                <span className={style.logo}>Dashboard</span>
            </div>
            <div className={style.topbarRight}>
                <div className={style.topbarIconContainer}>
                    <NotificationsIcon />
                    <span className={style.topIconBadge}>2</span>
                </div>
                <div className={style.topbarIconContainer}>
                    <LanguageIcon />
                    <span className={style.topIconBadge}>2</span>
                </div>
                <div className={style.topbarIconContainer}>
                    <SettingsIcon />
                </div>
                <img src="/images/shayea.jpg" className={style.topAvatar}/>
            </div>
        </div>
    </div>
  )
}
