'use client'

import React, {useEffect, useState } from "react";
import { DiVim } from "react-icons/di";

export default function ClientOnly({ children }: { children : React.ReactNode }) {

    const [isClient, setIsClient] = useState(false)
    useEffect( () => { setIsClient(true)} , [])

    return ( <> {isClient ? <div>{ children }</div> : null} </>)
}