import React from 'react';
import {GetInTouchBlocksInfo} from "../../constants/GetInTouchBlocksInfo";
import './GetInTouch.css'
const GetInTouch = () => {
    return (
        <div className='GetInTouch'>
            <div className="GetInTouch_background">
                <div className="text-information">
                    <h1>Get in touch</h1>
                    <h5>Let us know know about your requirements</h5>
                </div>

            </div>
            <div className="background-peace">
                <div className="GetInTouch-information-blocks">

                    <div className="address">
                        {
                            GetInTouchBlocksInfo.map((item , idx) =>{
                                return(
                                    <div  key={idx}>
                                        <img className='geo-img' src={item.src} alt=""/>
                                        <h2> {item.title}</h2>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                    <div className="book"></div>
                    <div className="mail"></div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;