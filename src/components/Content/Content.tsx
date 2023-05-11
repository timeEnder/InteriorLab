import React from "react";
import man from '../../resourses/man.png'
import phone from '../../resourses/phone.png'

export default function Content(){
    return(
        <div className={'flex flex-row justify-between bg-white w-full h-[32%]'}>
            <img className={'w-[50%]'} src={man}/>
            <div className={'w-[1.5rem] h-4 mt-8 bg-amber-400'}></div>
            <div className={' flex flex-col items-start text-black mt-[1.6rem]'}><div className={'font-bold text-xl'}>PHILOSOPHY</div>
                <div className={'text-xl mt-6'}>
                    We create a space where<br/> people can control every<br/>parameter they need.<br/> The relationship between<br/> form and function is at<br/> the heart of our<br/> philosophy.
                </div>
                </div>
            <img src={phone}/>
        </div>
    )
}