import React from 'react';


export default function Caixa(props) {
    return (
        <div>
            <p>{props.site}</p>
            {props.children[0]}
            {props.children[1]}
        </div>
    )
}