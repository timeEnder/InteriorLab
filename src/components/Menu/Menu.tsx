import React from "react";
import style from './style.module.css';
import IMenu ,{IMenuList} from "../../model/IMenu";
import Insta from "../Icons/Insta";
import Google from "../Icons/Google";
import Facebook from "../Icons/Facebook";


export default function Menu(prod:IMenuList){
    return(
        <div className={style.container}>
            <div className={style.logo}>Interior<div className={'text-amber-400 inline'}>Labs</div></div>
            <div className={style.menu}>
                {prod.elements.map((value, index)=>
                    <div>{value.name}</div>
                )}
            </div >
            <div className={style.but}>
                <Insta/>
                <Google/>
                <Facebook/>
            </div>
        </div>
    )
}