import React, {useEffect} from "react";
import style from'./style.module.css';
import {ISliderList} from "../../model/ISlider";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Slider(photo:ISliderList) {
    var id = 1;
    var slider = document.getElementById('slider');

            useEffect(()=>{
                slider = document.getElementById('slider');
                // @ts-ignore
                slider.style.width = `${photo.elements.length * 768}px`
                console.log(photo.elements.length * 768)
            })

        const Next = (event: React.MouseEvent<HTMLElement>) => {
            console.log(slider, id)
            if(photo.elements.length !== id){
                // @ts-ignore
                slider.style.transform = 'translateX(-' + (768 * id) + 'px)';
                id++;
            }
        };

        const Prev = (event: React.MouseEvent<HTMLElement>) => {
            console.log(slider,id)
            if (photo.elements.length !== 4){
                // @ts-ignore
                slider.style.transform = 'translateX(' + (0) + 'px)';
                id=1
            }
        }

        return (
            <div  className={style.container}>
                <div id='slider' className={'flex flex-row duration-[0.5s]'}>
                {photo.elements.map((value) =>
                    <img  className={style.box} src={value.image}></img>
                )}</div>
                <button className={'absolute bottom-64 left-[60vw]'} onClick={Prev}><ArrowBackIcon sx={{fontSize: 45}}/></button>
                <button className={'absolute bottom-64 left-[63vw]'} onClick={Next}><ArrowForwardIcon sx={{fontSize: 45}}/></button>
            </div>
        )
}




// <img className={'w-[768px] h-[700px]'} src={mebel}/>