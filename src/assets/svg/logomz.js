import React from 'react'

export const LogoSvg = ({ iconFill ='#2CBCBC', iconWidht='100'}) => {
    const ToNum = parseInt(iconWidht,10)
    const AutoHeigth = (ToNum * 0.50)
    const iconHeigth = AutoHeigth.toString(10)
  return (
    
    <svg 
      width={iconWidht} 
      height={iconHeigth}
      version="1.0"
      viewBox="0 0 600 186"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      
      <path d="M114.3 42.5c0 3.3.2 4.5.4 2.7.2-1.8.2-4.5 0-6s-.4 0-.4 3.3zm120 12.2c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5-1.9 0-2.7.2-1.7.5z" stroke-width=".2" fill="#722292" stroke="#722292" fill-opacity=".47" stroke-opacity=".47"/>
      <path d="M204.6 37.1c-9.1 2.2-13.9 7.7-14 16 0 9.1 5.2 12.7 23.3 15.9 12.2 2.2 16.1 3.7 18.5 7.2 3.5 4.9.9 11.7-5.4 14.2-5.3 2.1-17.7 2.1-23 0-4.5-1.8-7.4-5.3-8.5-10.2-.6-2.7-1.1-3.2-3.6-3.2-3.5 0-3.8 2.4-1 8.5 3.5 7.6 9.8 11.3 21 12.2 17.1 1.4 28.5-5.7 28.5-17.8 0-9-5.1-12.8-21.4-15.9-13.9-2.6-17.9-4-20.1-6.8-6-7.7 1.5-15.1 15.5-15.2 9.3 0 14.8 2.6 17.3 8.1 1.4 3.2 2.2 3.9 4.6 3.9 2.7 0 2.9-.2 2.2-2.8-1-4.4-3.9-8.5-7.3-10.9-5.8-3.9-17.6-5.3-26.6-3.2zM303 66.5V97h6V36h-6v30.5zm98-26c0 4.3.1 4.5 3 4.5s3-.2 3-4.5-.1-4.5-3-4.5-3 .2-3 4.5zM40 67v30h12l.2-20.5.3-20.5 7.1 20.3 7.1 20.2 5.1.3 5 .3 2-5.3c1-2.9 4.3-12.3 7.3-20.8l5.4-15.5.3 20.7L92 97h12V37H85.5l-6.6 20.6-6.6 20.5-7-20.3-7-20.3-9.2-.3-9.1-.3V67zm75-24.5V48h14c7.7 0 14 .3 14 .6s-7 8.9-15.5 19.2L112 86.5V97h50V86l-16.1-.2-16.1-.3 15.6-18.9 15.6-19V37h-46v5.5zM375 47v7h-4.5c-4.1 0-4.5.2-4.5 2.5s.4 2.5 4.5 2.5h4.5v17c0 15.5.2 17.2 1.9 18.9 2.3 2.3 7.1 3.4 12.2 2.9 2.6-.2 3.5-.8 3.7-2.6.3-2-.1-2.2-3.8-2.2-8 0-8 0-8-18V59h6c5.7 0 6-.1 6-2.5s-.3-2.5-6-2.5h-6V40h-6v7zm-113 7.3c-14.6 4.9-20.5 20.8-12.4 33.4 7.3 11.1 25.6 13.7 37.4 5.3 4.3-3.1 8-11.1 8-17.5s-3.7-14.4-8-17.5c-6.5-4.6-17.4-6.2-25-3.7zm18.6 6.3c7.4 3.8 10.4 14.3 6.5 23-4.9 10.7-22.2 12.6-30.5 3.3-8.1-8.8-4.4-23.6 6.9-27.8 4.3-1.5 12.5-.8 17.1 1.5zM430 54.3c-14.6 4.9-20.5 20.8-12.4 33.4 7.3 11.1 25.6 13.7 37.4 5.3 4.3-3.1 8-11.1 8-17.5s-3.7-14.4-8-17.5c-6.5-4.6-17.4-6.2-25-3.7zm18.6 6.3c7.4 3.8 10.4 14.3 6.5 23-4.9 10.7-22.2 12.6-30.5 3.3-8.1-8.8-4.4-23.6 6.9-27.8 4.3-1.5 12.5-.8 17.1 1.5zm39.5-6.4c-1.8.6-4.9 2.6-6.7 4.3l-3.4 3.2v-3.8c0-3.7-.2-3.9-3-3.9h-3v43h6V83.2c0-15.5 1.1-19.3 6.8-22.5 4.7-2.8 13.8-3.3 18.2-1 5.4 2.8 6 5 6 22V97h6.2l-.4-16.9c-.3-18.4-.7-19.7-7-24.4-3.2-2.4-14.6-3.2-19.7-1.5zm44-.1c-7.8 2.4-11.1 7.2-9.5 13.7 1.2 4.9 5.3 7.1 16.7 8.8 5 .7 10.4 1.6 11.8 1.9 6.3 1.4 7.7 8.1 2.6 11.9-2 1.5-4.7 2.1-9.5 2.4-9.3.5-14.1-1.3-16.7-6.1-1.4-2.6-2.7-3.7-4.2-3.7-5.2 0-1.2 9.4 5.3 12.6 5.3 2.6 22.4 2.7 27.1.2 4.8-2.7 7.3-6.5 7.3-11.2 0-8-3.7-10.5-19.2-13-11.7-1.9-14.4-2.9-15.3-5.5-1-3.1 1.1-5.9 5.3-7.1 8.6-2.3 17.5-.5 20.7 4.4 2.1 3.1 6.5 3.6 6.5.7 0-2.5-3.5-6.8-7.2-8.7-3.8-2-17-2.7-21.7-1.3zM319 69.5c0 18.1 1.1 22.1 6.9 25.7 2.9 1.9 5 2.3 11.1 2.3 8.2 0 12.1-1.5 16.5-6.2l2.5-2.8v4.3c0 4 .1 4.2 3 4.2h3V54h-6v13.2c0 15-1.5 19.9-7.1 23.2-4.5 2.7-13.6 3.2-17.9.9-5.4-2.8-6-5-6-22.1V54h-6v15.5zm82 6V97h6V54h-6v21.5zm-313 54c0 18.2 1.8 19.7 2.2 1.7l.3-12.7 6.5 12.7c3.6 7.1 7 12.8 7.5 12.8.6 0 3.9-5.7 7.5-12.6l6.5-12.5.3 12.5c.4 17.8 2.2 16.2 2.2-1.9 0-18.8-.8-18.9-9.6-1.4l-6.6 13.2-1.9-3.2c-1.1-1.8-4.2-7.7-6.9-13.2-7.1-14.1-8-13.5-8 4.6zm75 0c0 9 .4 14.5 1 14.5s1-1.8 1-3.9c0-3.2.5-4.4 2.8-6l2.8-1.9 4.9 5.9c2.7 3.2 5.5 5.9 6.3 5.9.8 0-1.1-2.9-4.3-6.5-3.2-3.6-5.6-6.7-5.4-6.9.2-.1 2.6-1.9 5.3-3.9 2.7-2 4.3-3.7 3.6-3.7-.7 0-4.6 2.5-8.7 5.5L165 134v-9.5c0-5.7-.4-9.5-1-9.5s-1 5.5-1 14.5zm58-12.5c0 1.1.5 2 1 2 .6 0 1-.9 1-2s-.4-2-1-2c-.5 0-1 .9-1 2zm166 12.5c0 9 .4 14.5 1 14.5s1-5.5 1-14.5-.4-14.5-1-14.5-1 5.5-1 14.5zM211 120c0 2.3-.4 3-2 3-1.1 0-2 .4-2 1 0 .5.9 1 2 1 1.8 0 2 .7 2 8.3 0 9.1.8 10.7 5.2 10.7 3.6 0 3.7-1.8.1-2.2-2.8-.3-2.8-.4-3.1-8.6l-.3-8.2h3.1c1.6 0 3-.5 3-1 0-.6-1.3-1-3-1-2.7 0-3-.3-3-3 0-1.7-.4-3-1-3-.5 0-1 1.3-1 3zm109 0c0 2.3-.4 3-2 3-1.1 0-2 .4-2 1 0 .5.9 1 2 1 1.8 0 2 .7 2 8.3 0 9.1.8 10.7 5.2 10.7 3.6 0 3.7-1.8.1-2.2-2.8-.3-2.8-.4-3.1-8.6l-.3-8.2h3.1c1.6 0 3-.5 3-1 0-.6-1.3-1-3-1-2.7 0-3-.3-3-3 0-1.7-.4-3-1-3-.5 0-1 1.3-1 3zm-191.4 5.3c-2.7 2.7-3.4 4.7-1.6 4.7.6 0 1-.4 1-.9 0-2.2 3.4-4.1 7.4-4.1 4.9 0 8 1.8 7.4 4.6-.2 1.5-1.3 2-5.3 2.2-9.3.4-12.5 2.2-12.5 6.7 0 4.9 7.5 7 14.5 4.1 2.9-1.2 3.4-1.2 3.9 0 .6 1.6 4.6 1.9 4.6.4 0-.6-.7-1-1.5-1-1.2 0-1.5-1.5-1.5-7.3 0-9.4-1-10.9-8.3-11.5-5-.4-5.8-.2-8.1 2.1zm14.4 11.3c0 3.2-3.6 5.4-9 5.4-4.9 0-7-1.3-7-4.1 0-2.4 1.6-3.3 7.5-3.9 6.8-.7 8.5-.2 8.5 2.6zm6-3.1c0 6.3.4 10.5 1 10.5s1-3 1-7c0-6.2.3-7.4 2.5-9.5 1.3-1.4 3.6-2.5 5-2.5s2.5-.5 2.5-1c0-1.8-4.6-1.1-7.4 1.1l-2.6 2v-2c0-1.2-.4-2.1-1-2.1s-1 4.2-1 10.5zm41.5-9.6c-5.4 2.3-7.9 9.5-5.1 14.9 3.1 5.9 14.4 6.9 18.6 1.5 2.7-3.5 1.6-4.3-1.4-1-3.5 3.7-10.6 3.8-14.1.2-1.4-1.3-2.5-2.9-2.5-3.5 0-.6 3.7-1 10-1 9.3 0 10-.1 10-2 0-7.2-8.2-12-15.5-9.1zm11 3.6c4.6 4.6 3.5 5.5-6.5 5.5-4.9 0-9-.2-9-.5 0-1.4 3.1-6.4 4.2-6.8 3.6-1.5 9-.6 11.3 1.8zm19.5 6c0 6.3.4 10.5 1 10.5s1-4.2 1-10.5-.4-10.5-1-10.5-1 4.2-1 10.5zm7 0c0 6.3.4 10.5 1 10.5s1-3.1 1-7.3c0-9 2-11.7 8.7-11.7 6 0 7.3 2 7.3 11.3 0 4.5.4 7.7 1 7.7s1-3.3 1-7.9c0-9.6-1.4-11.9-7.8-12.8-3.5-.5-4.9-.1-7.3 1.6-2.9 2.1-2.9 2.1-2.9.1 0-1.1-.4-2-1-2s-1 4.2-1 10.5zm28.1-9.2c-4.8 2.8-6.4 9.2-3.6 14.7 2.6 5.1 12.2 6.4 16.7 2.3 1.7-1.5 1.8-1.4 1.8 1.5 0 4.8-3 7.2-9 7.2-3.7 0-5.5-.5-7.1-2.1-1.1-1.1-2.3-1.8-2.7-1.5-.3.4.4 1.7 1.6 2.9 1.8 1.8 3.4 2.2 8.3 2.2 5.4 0 6.3-.3 8.5-2.8 2.2-2.6 2.4-3.6 2.4-14.3 0-6.9-.4-11.4-1-11.4-.5 0-1 1-1 2.2 0 2-.1 2-2 .3-2.5-2.3-9.8-3-12.9-1.2zm12.4 3.2c5.6 5.6 1.6 14.5-6.5 14.5-5.4 0-9-3.4-9-8.5 0-7.8 10-11.6 15.5-6zm20.1-2.2c-2.7 2.7-3.4 4.7-1.6 4.7.6 0 1-.4 1-.9 0-2.2 3.4-4.1 7.4-4.1 4.9 0 8 1.8 7.4 4.6-.2 1.5-1.3 2-5.3 2.2-9.3.4-12.5 2.2-12.5 6.7 0 4.9 7.5 7 14.5 4.1 2.9-1.2 3.4-1.2 3.9 0 .6 1.6 4.6 1.9 4.6.4 0-.6-.7-1-1.5-1-1.2 0-1.5-1.5-1.5-7.3 0-9.4-1-10.9-8.3-11.5-5-.4-5.8-.2-8.1 2.1zm14.4 11.3c0 3.2-3.6 5.4-9 5.4-4.9 0-7-1.3-7-4.1 0-2.4 1.6-3.3 7.5-3.9 6.8-.7 8.5-.2 8.5 2.6zm28-5.2c0 7.9.2 8.6 2.6 10.5 3.2 2.5 8.3 2.7 12.4.6 2.7-1.4 3-1.4 3 0 0 .8.5 1.5 1 1.5.6 0 1-4.2 1-10.5s-.4-10.5-1-10.5-1 3.2-1 7.5c0 9.3-1.6 11.5-8.4 11.5-6.5 0-7.6-1.6-7.6-11.1 0-4.6-.4-7.9-1-7.9s-1 3.5-1 8.4zm35.6-6.1c-2.7 2.7-3.4 4.7-1.6 4.7.6 0 1-.4 1-.9 0-2.2 3.4-4.1 7.4-4.1 4.9 0 8 1.8 7.4 4.6-.2 1.5-1.3 2-5.3 2.2-9.3.4-12.5 2.2-12.5 6.7 0 4.9 7.5 7 14.5 4.1 2.9-1.2 3.4-1.2 3.9 0 .6 1.6 4.6 1.9 4.6.4 0-.6-.7-1-1.5-1-1.2 0-1.5-1.5-1.5-7.3 0-9.4-1-10.9-8.3-11.5-5-.4-5.8-.2-8.1 2.1zm14.4 11.3c0 3.2-3.6 5.4-9 5.4-4.9 0-7-1.3-7-4.1 0-2.4 1.6-3.3 7.5-3.9 6.8-.7 8.5-.2 8.5 2.6zm18-12.9c-5.4 2.1-8.2 8.9-6 14.2 2.6 6.4 13.6 7.9 18.8 2.7 1.4-1.4 2.3-2.8 2-3.1-.3-.4-1.7.5-3.1 1.9-5.5 5.4-16.7 2.1-16.7-4.9 0-3 1.6-6.5 3.9-8.2 3.4-2.6 11-1.1 13.8 2.6.6.9 1.5 1.2 1.9.8.4-.4-.4-1.9-1.8-3.3-2.6-2.6-9.5-4.1-12.8-2.7zm21.6 1.6c-2.7 2.7-3.4 4.7-1.6 4.7.6 0 1-.4 1-.9 0-2.2 3.4-4.1 7.4-4.1 4.9 0 8 1.8 7.4 4.6-.2 1.5-1.3 2-5.3 2.2-9.3.4-12.5 2.2-12.5 6.7 0 4.9 7.5 7 14.5 4.1 2.9-1.2 3.4-1.2 3.9 0 .6 1.6 4.6 1.9 4.6.4 0-.6-.7-1-1.5-1-1.2 0-1.5-1.5-1.5-7.3 0-9.4-1-10.9-8.3-11.5-5-.4-5.8-.2-8.1 2.1zm14.4 11.3c0 3.2-3.6 5.4-9 5.4-4.9 0-7-1.3-7-4.1 0-2.4 1.6-3.3 7.5-3.9 6.8-.7 8.5-.2 8.5 2.6zm6-3.1c0 6.3.4 10.5 1 10.5s1-3.1 1-7.3c0-9 2-11.7 8.7-11.7 6 0 7.3 2 7.3 11.3 0 4.5.4 7.7 1 7.7s1-3.3 1-7.9c0-9.6-1.4-11.9-7.8-12.8-3.5-.5-4.9-.1-7.3 1.6-2.9 2.1-2.9 2.1-2.9.1 0-1.1-.4-2-1-2s-1 4.2-1 10.5zm30-9.8c-5.4 2.1-8.2 8.9-6 14.2 2.6 6.4 13.6 7.9 18.8 2.7 1.4-1.4 2.3-2.8 2-3.1-.3-.4-1.7.5-3.1 1.9-5.5 5.4-16.7 2.1-16.7-4.9 0-3 1.6-6.5 3.9-8.2 3.4-2.6 11-1.1 13.8 2.6.6.9 1.5 1.2 1.9.8.4-.4-.4-1.9-1.8-3.3-2.6-2.6-9.5-4.1-12.8-2.7zm23.5.2c-5.4 2.3-7.9 9.5-5.1 14.9 3.1 5.9 14.4 6.9 18.6 1.5 2.7-3.5 1.6-4.3-1.4-1-3.5 3.7-10.6 3.8-14.1.2-1.4-1.3-2.5-2.9-2.5-3.5 0-.6 3.7-1 10-1 9.3 0 10-.1 10-2 0-7.2-8.2-12-15.5-9.1zm11 3.6c4.6 4.6 3.5 5.5-6.5 5.5-4.9 0-9-.2-9-.5 0-1.4 3.1-6.4 4.2-6.8 3.6-1.5 9-.6 11.3 1.8z" stroke-width=".2" fill="#609" stroke="#609"/>
      <path d="M302.4 66.5c0 17 .2 24.2.3 15.8.2-8.3.2-22.3 0-31-.1-8.7-.3-1.9-.3 15.2zm98-25.5c.1 4.3.2 4.5 3.1 4.6 2.7.1 2.7 0 .3-.3-2.4-.4-2.7-.9-3.1-4.6l-.4-4.2.1 4.5zm-361 26c0 16.8.2 23.6.3 15.2.2-8.3.2-22.1 0-30.5-.1-8.3-.3-1.5-.3 15.3zm121.9-25c0 3 .2 4.3.4 2.7.2-1.5.2-3.9 0-5.5-.2-1.5-.4-.2-.4 2.8zm213 5c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8zm-55.9 21c0 8 .2 11.2.3 7.2.2-3.9.2-10.5 0-14.5-.1-3.9-.3-.7-.3 7.3zm37-1.5c0 7.1.1 9.9.3 6.2.2-3.7.2-9.6 0-13-.2-3.4-.3-.4-.3 6.8zm45 9c0 12.1.2 16.9.3 10.7.2-6.2.2-16.1 0-22-.1-5.9-.3-.8-.3 11.3zm71 0c0 12.1.2 16.9.3 10.7.2-6.2.2-16.1 0-22-.1-5.9-.3-.8-.3 11.3zM91.4 77c0 11.3.2 15.9.3 10.2.2-5.6.2-14.8 0-20.5-.1-5.6-.3-1-.3 10.3zm177.9-18.3c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zm168 0c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zm56.5 0c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4zm45 0c1.2.2 3.2.2 4.5 0 1.2-.2.2-.4-2.3-.4s-3.5.2-2.2.4zM374.4 74c0 8.5.2 12 .3 7.7.2-4.2.2-11.2 0-15.5-.1-4.2-.3-.7-.3 7.8zm134 8.5c0 8.2.2 11.5.3 7.2.2-4.3.2-11 0-15-.1-4-.3-.5-.3 7.8zm-256.2-7c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zm168 0c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zm-257.9 16c0 3.3.2 4.5.4 2.7.2-1.8.2-4.5 0-6s-.4 0-.4 3.3zm192.5-1.8c-.2.5-.1 2.4.3 4.3l.6 3.5.2-4.3c.1-3.9-.3-5.2-1.1-3.5zm-85.5 3c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zm67 0c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5-1.9 0-2.7.2-1.7.5zm50 0c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5-1.9 0-2.7.2-1.7.5zm51 0c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zm103 0c1.5.2 3.7.2 5 0 1.2-.2 0-.4-2.8-.4-2.7 0-3.8.2-2.2.4z" stroke-width=".2" fill="#712292" stroke="#712292" fill-opacity=".27" stroke-opacity=".27"/><path d="M121.4 129.5c0 8.2.2 11.5.3 7.2.2-4.3.2-11 0-15-.1-4-.3-.5-.3 7.8zm43.8-5.8c-.1 5.1.1 9.3.6 9.3.4 0 .6-2.8.4-6.2-.5-11.3-.9-12.5-1-3.1zm224.2 5.8c0 8.2.2 11.5.3 7.2.2-4.3.2-11 0-15-.1-4-.3-.5-.3 7.8zM213.2 120c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8zm109 0c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8zM90.4 131.5c0 7.2.1 9.9.3 6.2.2-3.7.2-9.6 0-13-.2-3.4-.3-.4-.3 6.8zm60.7-6.6c-.1 2 .1 2.1 1.4 1.1 1.6-1.4 2.1-2.5.6-1.6-.5.4-1.2 0-1.4-.6-.3-.7-.6-.2-.6 1.1zm72.3 8.6c0 6 .1 8.4.3 5.2.2-3.2.2-8.1 0-11-.2-2.9-.3-.3-.3 5.8zm50 0c0 6 .1 8.4.3 5.2.2-3.2.2-8.1 0-11-.2-2.9-.3-.3-.3 5.8zm59.9-3c0 4.4.2 6.1.4 3.7.2-2.3.2-5.9 0-8-.2-2-.4-.1-.4 4.3zm15-.5c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8zm-135 2.5c0 4.4.2 6.1.4 3.7.2-2.3.2-5.9 0-8-.2-2-.4-.1-.4 4.3zm109 0c0 4.4.2 6.1.4 3.7.2-2.3.2-5.9 0-8-.2-2-.4-.1-.4 4.3zm-77 4.5c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8zm213 0c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8zm-228 .5c0 3.8.2 5.3.4 3.2.2-2 .2-5.2 0-7-.2-1.7-.4-.1-.4 3.8zm213 0c0 3.8.2 5.3.4 3.2.2-2 .2-5.2 0-7-.2-1.7-.4-.1-.4 3.8zm-292 .5c0 3.6.2 5 .4 3.2.2-1.7.2-4.7 0-6.5-.2-1.7-.4-.3-.4 3.3zm14 2c0 2.5.2 3.5.4 2.2.2-1.2.2-3.2 0-4.5-.2-1.2-.4-.2-.4 2.3z" stroke-width=".2" fill="#711E96" stroke="#711E96" fill-opacity=".13" stroke-opacity=".13"/>
      </svg>


  )
}