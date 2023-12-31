'use client'

import React, { useEffect } from 'react'
import './style.css'
import { useToggleTransaction } from '@/app/helper/customHooks'

const TopBar = () => {

  useToggleTransaction()

  return (
    <>
      <div className="topBar">
        <div className="transactions">
          <div className="toggle"><span></span></div>
          <ul>
            <li  style={{ "--i": "0" } as React.CSSProperties}><a href="#">Refused Transfers</a></li>
            <li  style={{ "--i": "1" } as React.CSSProperties}><a href="#">Returned Transfers</a></li>
            <li  style={{ "--i": "2" } as React.CSSProperties}><a href="#">Successful Transfers</a></li>
          </ul>
        </div>
        <div className="filters">
          <span>Filters</span>
          <span>Filters</span>
          <span>Filters</span>
          <span>Filters</span>
        </div>
      </div>
    </>
  )
}

export default TopBar


