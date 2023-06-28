//import React from "react";
import outageMapImg from './Images/Whole_Plant.png'
import React, { useState, component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function OutageMap() {

return (

    <div >
    <TransformWrapper initialScale={1}>
        <TransformComponent>
            <img src={outageMapImg} style = {{width: "100%", height: "100%"}}/>
        </TransformComponent>
    </TransformWrapper>
    </div>

);
} 