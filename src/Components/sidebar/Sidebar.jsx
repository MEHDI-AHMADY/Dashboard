import React, { useEffect } from "react";
import { sidebarItems } from "../../datas.jsx";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  mobileSidebar : `fixed top-0 bottom-0 translate-x-[-194px] transition-transform duration-300 flex-[2] z-50 bg-[rgba(251,251,255)] dark:bg-slate-800 px-7 py-5 lg:hidden`,
  sidebar: `hidden lg:block flex-1 bg-[rgba(251,251,255)] sticky top-[50px] overflow-y-auto z-40 dark:bg-gray-700`,
  sidebarWrapper: `p-2 text-[#555]`,
  sidebarMenu: `mb-[2px]`,
  sidebarTitle: `text-[13px] text-[rgba(187,186,186)]`,
  sidebarList: `p-[5px]`,
  sidebarListItem: `flex items-center rounded-xl hover:bg-[rgba(240,240,255)] dark:hover:bg-gray-800 p-[5px] cursor-pointer my-1 dark:text-white`,
  sidebarIcon: `mr-[5px] text-[20px]`,
};

export default function Sidebar({ isVisible , showMenuHandler }) {
  useEffect(() => {
    if(isVisible){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  } , [isVisible])

  const location = useLocation();

  return (
    <>

    {/* mobile sidebar  */}

      <div className={`${style.mobileSidebar} ${isVisible ? 'translate-x-[0] overflow-y-auto' : ''}`}>

        <div className="mobileSidbarWrapper relative">
          <CloseIcon className="absolute top-[-10px] right-0 cursor-pointer dark:text-white" onClick={showMenuHandler}/>
        {sidebarItems.map((menu, index) => (
            <div key={index} className={style.sidebarMenu}>
              <h3 className={style.sidebarTitle}>{menu.title}</h3>
              <ul className={style.sidebarList}>
                {menu.items.map((item, idx) => (
                  <Link key={idx} to={item.link} onClick={showMenuHandler}>
                    <li
                      className={`${style.sidebarListItem} ${
                        location.pathname === item.link ? "activeSidebarItem" : ""
                      }`}
                    >
                      {item.icon}
                      {item.text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.sidebar} sidebar-scrollbar`} style={{height : 'calc(100vh - 70px)'}}>
        <div className={style.sidebarWrapper}>
          {sidebarItems.map((menu, index) => (
            <div key={index} className={style.sidebarMenu}>
              <h3 className={style.sidebarTitle}>{menu.title}</h3>
              <ul className={style.sidebarList}>
                {menu.items.map((item, idx) => (
                  <Link key={idx} to={item.link}>
                    <li
                      className={`${style.sidebarListItem} ${
                        location.pathname === item.link ? "activeSidebarItem" : ""
                      }`}
                    >
                      {item.icon}
                      {item.text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
