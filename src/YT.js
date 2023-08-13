import React, { useRef } from 'react';
import './YT.css';
import { useCustomHook } from './useCustomHook';

function YT() {

    const buttonRef = useRef();
    useCustomHook(buttonRef,{});

  return (
    <>
        <div className='button-container' ref={buttonRef}>
            <button className='first'>Click</button>
            <button className='second'>Click</button>
            <button className='third'>Click</button>
            <button className='fourth'>Click</button>
            <button className='fifth'>Click</button>
        </div>
    </>
  )
}

export default YT