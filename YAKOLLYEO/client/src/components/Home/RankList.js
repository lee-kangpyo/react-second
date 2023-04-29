import React from 'react';
import homeStyles from "../../scss/homePage.module.scss";

const RankEl = ({el}) => {
    return(
        <p className={homeStyles.rnk_lst}>
            <span>
                <span className={homeStyles.rnk_lst_no}>{el.no}</span> 
                <span>{el.name}</span>
            </span>
            <span className={homeStyles.rnk_lst_stat}>{el.state}</span>
        </p>
    )
}

const RankList = () => {
    const rankList = [
        {
            no:"01",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"02",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"03",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"04",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"05",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"06",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"07",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"08",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"09",
            name:"수다페드정 60mg",
            state:"-"
        },
        {
            no:"10",
            name:"수다페드정 60mg",
            state:"-"
        },
    ]
    return (
        <div className={homeStyles.yak_rank}>
            <div>
                <div>
                    <div>
                        <ul className={homeStyles.tab}>
                            <li className={homeStyles.active}>품절약</li> 
                            <li>리워드</li> 
                        </ul>
                    </div> 
                    <div className={homeStyles.more_show}>더보기</div>
                </div>
                    {
                    rankList.map(el => <RankEl el={el} />)
                }
            </div>
        </div>
    )
}

export default RankList;