//import React from "react";
import outageMapImg from './Images/Whole_Plant.jpg'
import React, { useState, component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "./projects.module.css"

export default function OutageMap() {

return (


    <div className = "head-text">
        <TransformWrapper initialScale={1}>
            <TransformComponent wrapperStyle={{ width: "100%", maxHeight: "calc(100vh - 25px)" }} contentStyle={{ width: "100%", maxHeight: "calc(100vh - 25px)" }}>
                <img src={outageMapImg} style = {{width: "100%", height: "auto"}}/>
                <div 
                    style = {{    
                        position: "absolute",
                        width: "50px",
                        height: "35px",
                        backgroundColor: "#555",
                        opacity: "25%",
                        left: "50%",
                        bottom: "18%"
                    }}>
                </div>
                <div 
                    style = {{    
                        position: "absolute",
                        width: "50px",
                        height: "35px",
                        backgroundColor: "#000",
                        opacity: "25%",
                        left: "60%",
                        bottom: "18%"
                    }}>
                </div>
            </TransformComponent>
        </TransformWrapper>
    </div>
);
} 