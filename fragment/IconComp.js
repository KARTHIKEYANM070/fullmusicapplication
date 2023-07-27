import React from 'react'
import '../assets/scss/IconComp.css';
import { Link } from 'react-router-dom';
const IconComp = (props) => {
    return (
        <div className="iconComp" style={{backgroundColor: `${props.bgColor}`}}>
            <h1>{props.heading}</h1>
            <div className='icon-slide'>
                <div>
                    <div><img src={props.img1} alt="" /></div>
                    <p>{props.p1}&nbsp;</p>
                </div>
                <div>
                    <div><img src={props.img2} alt="" /></div>
                    <p>{props.p2}&nbsp;</p></div>
                <div>
                    <div><img src={props.img3} alt="" /> </div><p>{props.p3}&nbsp;</p></div>
                <div>
                    <div><img src={props.img4} alt="" /> </div><p>{props.p4}&nbsp;</p></div>
                <div>
                    <div><img src={props.img5} alt="" /> </div><p>{props.p5}&nbsp;</p></div>
                <div>
                    <div><img src={props.img6} alt="" /> </div><p>{props.p6}&nbsp;</p></div>
                <div>
                    <div><img src={props.img7} alt="" /> </div><p>{props.p7}&nbsp;</p></div>
            </div>
        </div>
    )
}

export default IconComp