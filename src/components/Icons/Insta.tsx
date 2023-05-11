import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import { createSvgIcon } from '@mui/material/utils';


const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
);

export default function Insta(){
    return(
            <div className={'flex flex-row items-center justify-center bg-gray-500 border-gray-500 border-2 rounded-full w-[25px] h-[25px]'}>
                <InstagramIcon
                    sx={{
                        '& > :not(style)': {
                            m: 2,
                        }, width:'16px', height:'16px', color:'black'
                    }}
                >
                    <HomeIcon />
                    <HomeIcon color="primary" />
                </InstagramIcon>
            </div>
    )
}