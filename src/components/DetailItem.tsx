import React, { useState } from 'react';

interface Props{
    class: string;
    children: React.ReactNode;
}

const DetailItem:React.FC<Props> = (props:Props)=>{
    return <div className={props.class}>{props.children}</div>;
}

export default DetailItem;
