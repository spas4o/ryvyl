import React, { useEffect } from 'react'

export const useToggleTransaction = () => {

  useEffect(() => {
    toggleTransaction()
  },[])

}

const toggleTransaction = () => {
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
