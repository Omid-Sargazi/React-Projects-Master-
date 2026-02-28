import React, { type ReactNode } from "react"

type CardProps = {
    title:string,
    children : ReactNode
};

function Card({title, children}:CardProps)
{
    return(
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}