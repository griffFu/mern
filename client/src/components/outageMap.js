//import React from "react";
import outageMapImg from './Images/Whole_Plant.png'
import React, { useState, component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function OutageMap() {

return (

    <div style={{height: '100%', width: '100%', overflow: 'none'}}>
    <TransformWrapper initialScale={1}>
        <TransformComponent wrapperStyle={{ width: "100%", maxHeight: "calc(100vh - 50px)" }} contentStyle={{ width: "100%", maxHeight: "calc(100vh - 50px)" }}>
            <img src={outageMapImg} style = {{width: "100%", height: "auto"}}/>
        </TransformComponent>
    </TransformWrapper>
    </div>
);
} 