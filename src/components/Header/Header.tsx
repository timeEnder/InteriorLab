import React from "react";
import Menu from "../Menu/Menu";
import {MenuList} from "../../data/MenuList";
import Button from "../Button/Button";

export default function Header(){
    return(
        <div className={'w-[100%] h-[68%] bg-black flex flex-col items-start justify-start overflow-visible'}>
            <Menu elements={MenuList}/>
            <div className={'text-amber-400 text-9xl ml-12'}>We create</div>
            <div className={'text-9xl ml-[17rem]'}>more than</div>
            <div className={'flex flex-row overflow-visible'}>
                <div className={'overflow-hidden w-[22rem] h-[22rem]'}>
                    <div className={'flex flex-row items-center justify-center border-2 rounded-r-full rounded-t-full border-amber-50 w-[32rem] h-[32rem] ml-[-10rem]'}>
                        <Button/>
                    </div>
                </div>
                <div className={'flex flex-row  h-[128px] text-9xl ml-[15rem] whitespace-nowrap'}>just interior</div>
            </div>
        </div>
    )
}