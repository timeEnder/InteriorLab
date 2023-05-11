import React from "react";
import style from './style.module.css';
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import SideMenu from "../../components/SideMenu/SideMenu";
import {SideList} from "../../data/SideList";

export default function Main(){
    return(
        <div className={style.container}>
            <div className={'flex flex-col items-start w-[60%] h-auto'}>
                <Header/>
                <Content/>
            </div>
            <SideMenu elements={SideList}/>
        </div>
    )
}