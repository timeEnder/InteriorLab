import React from "react";
import style from './style.module.css';
import mebel from '../../resourses/mebel.png'
import Slider from "../Slider/Slider";
import {ISideList} from "../../model/ISideMenu";
import Button from "../Button/Button";
import {SlideList} from "../../data/SlideList";

export default function SideMenu(box:ISideList){
    return(
        <div className={style.container}>
            <Slider elements={SlideList}/>
            <div className={'flex flex-row w-[100%] h-[25%] text-black'}>
                {box.elements.map((value)=>
                    <div className={style.box}>
                        <div className={'text-8xl'}>{value.number}</div>
                        <div className={'mt-2 ml-1 text-base'}>{value.name}</div>
                        <div className={'flex flex-row items-center font-bold mt-12 text-lg'}>{value.text}
                            <div className={'ml-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                               className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
