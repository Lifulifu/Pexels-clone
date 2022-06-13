import React from 'react'
import './SearchInput.scss'
import { FaSearch } from 'react-icons/fa'

interface Props {
  placeholder?: string,
}

export default function SearchInput({ placeholder }: Props) {
  return (
    <div className='search-input'>
      <input type='text' placeholder={placeholder}></input>
      <span className='icon-container'>
        <FaSearch size={20} className='icon' />
      </span>
    </div>
  )
}
