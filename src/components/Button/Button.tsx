import React from "react";


export default function Button(){
    return(
        <div className={'flex flex-row items-center '}>
            <div className={'w-[4rem] h-[4rem] rounded-full bg-amber-400 flex flex-row items-center ml-28'}>
                <div className={'ml-10'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="42" fill="currentColor"
                     className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </div>
            </div>
            <div className={'w-[5rem] ml-8 uppercase'}>Let's talk</div>
        </div>
    )
}