import React from 'react'
import {Link} from 'react-router-dom'
import logoLong from '../../../assets/img/logo_Long.svg'
import {IoMdArrowDropdown} from 'react-icons/io'

const NaviLittle = () => {
  return (
    <div className='naviLittle'>
      <div>
        <Link to={"/"}>
            <img src={logoLong} alt="" />
        </Link>
        <div className='naviNumbers'>
              <p>+353 1 512 4400</p>   
              <IoMdArrowDropdown/>
        </div>
      </div>
    </div>
  )
}

export default NaviLittle
