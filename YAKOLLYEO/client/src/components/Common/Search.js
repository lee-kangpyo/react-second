import React, { useState } from 'react';
import styles from "../../scss/loginPage.module.scss";
import { MdOutlineSearch } from 'react-icons/md' ; 

function Search(){
    const [LabelShow, setLabelShow] = useState(true)
    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value);
        (e.target.value == "")?setLabelShow(true):setLabelShow(false)
    }
    return (
        <>
            <div>
                <div className={styles.search_el}>
                    <input 
                        id="searchWrd"
                        type="text" 
                        className={styles.search_el_ip}
                        value={text}
                        onChange={onChange}
                    />
                    <MdOutlineSearch />
                    {(LabelShow)?<label htmlFor='searchWrd' className={`H4 f_g2 ${styles.search_el_ph}`}>제조사, 상품명 검색</label>:false}
                    
                </div>
            </div>
            <div style={{width:"74px"}}></div>
        </>
    )
}

export default Search;