import React from 'react';
import styles from "../../scss/homePage.module.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbTruck } from "react-icons/tb";
import { RiGlobalLine, RiNewspaperLine } from "react-icons/ri";
import Menu from './Menu';
import { useSelector } from 'react-redux';

function MenuList(){
    const menuList = useSelector((state)=>state.menuList);
    const icons = {
        MdOutlineShoppingCart:<MdOutlineShoppingCart/>, 
        TbTruck:<TbTruck/>, 
        RiNewspaperLine:<RiNewspaperLine/>, 
        RiGlobalLine:<RiGlobalLine/>
    }
    return(
        <div className={styles.sideBar_Container} style={{padding:"0px 16px"}}>
            {
                menuList.map((item, idx) => <Menu key={idx} isUnderLine={item.underLine} text={item.text} icon={icons[item.icon]}/> )
            }
        </div>
    )
}

export default MenuList;

