'use client'

import React, { useEffect } from 'react'
import './style.css'

const TopBar = () => {

useEffect(() => {
  toggleTransaction()
},[])

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

function toggleTransaction() {
  let transactions = document.querySelector('.transactions') as HTMLElement
  let toggleButton = document.querySelector('.toggle') as HTMLButtonElement

  if (transactions && toggleButton) {
    toggleButton.onclick = function () {
      toggleButton.classList.toggle('active')
      transactions.classList.toggle('active')
    };
  } else {
    console.error('Either .transactions or .toggle not found in the document.')
  }
}