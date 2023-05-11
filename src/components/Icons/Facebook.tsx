import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { createSvgIcon } from '@mui/material/utils';
import {grey, pink} from "@mui/material/colors";


const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
);

export default function Facebook(){
    return(
        <div className={'flex flex-row items-center justify-center border-gray-500 border-2 rounded-full w-[25px] h-[25px]'}>
            <FacebookRoundedIcon
                sx={{
                    '& > :not(style)': {
                        m: 2,
                    }, width:'25px', height:'25px', color: '#6b7280',
                }}
            >
                <HomeIcon />
                <HomeIcon color="primary" />
            </FacebookRoundedIcon>
        </div>
    )
}