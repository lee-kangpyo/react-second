import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbTruck } from "react-icons/tb";
import { RiGlobalLine, RiNewspaperLine } from "react-icons/ri";
import Menu from './Menu';

function MenuList({isShrinked}){
    return(
        <div className={styles.sideBar_Container} style={{padding:"0px 16px"}}>
            <Menu isUnderLine={true} text="주문"  icon={<MdOutlineShoppingCart/>}/>
            <Menu isUnderLine={true} text="주문 / 배송 상태" icon={<TbTruck/>}/>
            <Menu isUnderLine={true} text="거래원장" icon={<RiNewspaperLine/>}/>
            <Menu isUnderLine={false} text="커넥트 디아이" icon={<RiGlobalLine/>}/>
        </div>
    )
}

export default MenuList;

