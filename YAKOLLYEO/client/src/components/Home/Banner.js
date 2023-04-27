import React, {useState} from 'react';

import PHmanual1 from '../../img/home/PH_manual_01.png'
import PHmanual2 from '../../img/home/PH_manual_02.png'
import styles from "../../scss/homePage.module.scss";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";


function Banner(){
    const [cnt, setCnt] = useState(0);
    const [right, setright] = useState(0);
    const imgList = [PHmanual1, PHmanual2]
    const end = String(imgList.length).padStart(2,"0");
    let cur = String(cnt+1).padStart(2,"0");

    const clkLeft = () => {
        setright(right - 680);
        setCnt(cnt - 1)
    }
    const clkRight = () => {
        setright(right + 680);
        setCnt(cnt + 1)
    }

    return(
        <div className={styles.banner}>
            <div style={{right:right}}>
                {imgList.map(img => <img src={img} />)}
            </div>
            <div className={styles.controller}>
                {
                    (cur > 1)
                        ?
                            <RxTriangleLeft className={`${styles.vm} ${styles.cw}`} onClick={clkLeft}/>
                        :
                            <RxTriangleLeft className={styles.vm}/>   
                
                }
                <span><span className={styles.cw}>{cur}</span> / {end}</span>
                {
                    (cur < end)
                        ?
                            <RxTriangleRight className={`${styles.vm} ${styles.cw}`} onClick={clkRight}/>
                        :
                            <RxTriangleRight className={styles.vm}/>
                }
            </div>
        </div> 
    )
}

export default Banner;