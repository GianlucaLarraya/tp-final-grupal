import React from 'react'

export const BtnPrimary = ({url, targ, btnTxt}) => {
  return (
      <a  className='me-3'
          href={url}
          target={targ}
      >
          <button
              className='btn btn-primary'
          >
              Documentación {btnTxt}
          </button>
      </a>
  )
}
