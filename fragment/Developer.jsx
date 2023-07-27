import React from 'react';
import '../assets/scss/Developer.scss';
import IconComp from './IconComp';
import {Link} from "react-router-dom";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Albums</h3>
            <div className="Developer-profile">
            <IconComp
                heading='Trending Singers'
                img1={"https://s.yimg.com/fz/api/res/1.2/F6ljKbYwdQ2OB6DmEFyxZg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTcy/https://s.yimg.com/zb/imgv1/a1dfb9bd-8bf0-3310-8a2e-54740f1aace4/t_500x300"}
                img2={'https://s.yimg.com/fz/api/res/1.2/sdFQg7ILFD7i6oWtm3Vv1A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTcy/https://s.yimg.com/zb/imgv1/d5f4297a-a8a9-3d69-b23c-64d5e3cfa4c8/t_500x300'}
                img3={"https://s.yimg.com/fz/api/res/1.2/OrKWA5ahwKbba.UA26THDg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjA0/https://s.yimg.com/zb/imgv1/39f57f22-886e-33cd-aec6-e36816deaade/t_500x300"}
                img4={"https://s.yimg.com/fz/api/res/1.2/cg4qCoeOAeYTBMjwh_fHyw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTc2/https://s.yimg.com/zb/imgv1/41c59e69-8ff0-3c37-8052-25e990dd14cb/t_500x300"}
                img5={"https://s.yimg.com/fz/api/res/1.2/T9ssav3B8LTK44FBO5PvKA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjA4/https://s.yimg.com/zb/imgv1/f2920ee9-9ba3-3577-8886-e8b1416e0061/t_500x300"}
                img6={"https://data1.ibtimes.co.in/en/full/720414/selena-gomez.jpg"}
                img7={"https://s.yimg.com/fz/api/res/1.2/tuA3qKVwKIIP_vL5DCybqA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTcy/https://s.yimg.com/zb/imgv1/b1371772-8cba-333c-92d2-1d37d2a8029b/t_500x300"}

                p1='Anirudh Ravichander'
                p2='Gv Prakash'
                p3='Arijit singh'
                p4='Yo Yo Honey Singh'
                p5='Badshah'
                p6='Selena '
                p7='Shreya Ghoshal'
                bgColor='#00baf2'
            />
            </div>
            
            <Link to="/feed" ><h1>feedback</h1> </Link> 
        </div>
    );
}

export default Developer;