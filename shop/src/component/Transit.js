import React, { useState, useTransition, useDeferredValue } from 'react';

let a = new Array(10000).fill(0)

function Transit(){
    let [name, setName] = useState("")
    let [isPending, startTransition] = useTransition();

    let state = useDeferredValue(name);
    return(
        <div>

            <input onChange={(e) => {
                startTransition(()=>{
                    setName(e.target.value)
                })
            }} />
            {
                isPending ? '로딩중' :
                a.map(()=>{
                    return <div>{state}</div>
                })
            }
        </div>
    )
}

export default Transit;