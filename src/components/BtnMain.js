import React from 'react'

export const BtnMain = ({url, targ, btnTxt}) => {
  return (
      <a  className='me-3'
          href={url}
          target={targ}
      >
          <button
              className='btn btn-primary'
          >
              {btnTxt}
          </button>
      </a>
  )
}
