import React, {useCallback, useEffect, useState, useRef} from 'react';
import Login from './Components/Login';
import './index.css';
import './Login.css'
function But() {
  // let counter1=15;
  // let [counter, setCounter]=useState(counter1);
  // const addValue=()=>{
  //   console.log('clicked',console)
  //   counter=counter+1;
  //   setCounter(counter);
  // }
  // const remover=()=>{
  //  counter=counter-1;
  //  if(counter<0){
  //   alert('Value cannot be  leass than o')
  //   counter=0
  //  }
  //  else{
  //  setCounter(counter)}
  // }
  let [length, setLength]=useState(6);
  let [number, setNumber]=useState(false)
  let [character, setCharacter]=useState(false);
  let [password, setPassword]=useState('');
  let passRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let val='', alpha='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',num='0123456789',spchar='!@#$%^&*_+=', pass=''
    if(number) alpha+=num
    if(character) alpha+=spchar
      for(let i=1;i<=length;i++){
        val=alpha[Math.floor(Math.random()*(alpha.length))]
        pass+=val
      }
    setPassword(pass)
  },[length,number,character,setPassword])
  useEffect(()=>{
    passwordGenerator();
  },[length,number,character,passwordGenerator])
  function copy(){
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    
  }
  return (
    <>
    {/* <h1>Counter Value:{counter}</h1>
    <button onClick={addValue}>Add Value:{counter}</button>
    <button onClick={remover}>Remove value:{counter}</button>
    <p>Result:{counter}</p>  */}
     <div>
      <div className='text-white text-4xl text-center mt-10'>Password Generator</div>
      <div>
        <div className='flex justify-center items-center mt-7'>
        <div className='w-full max-w-md mx-auto'><input type='text' value={password} className='w-full h-14 rounded-l-lg text-lg text-orange-600' ref={passRef} readOnly/></div>
        <div><button className='bg-blue-700 text-white w-16 rounded-r-lg h-14 text-xl' onClick={copy}>Copy</button></div>
        </div>
        <div className='flex justify-center items-center mt-3'>
           <div className='p-3'>
             <input type='range' min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
             <label className='text-orange-600 text-lg'>Length: {length}</label>  
           </div>
          <div className='p-3'> 
           <input type='checkbox' onChange={(e)=>{setNumber((prev)=>!prev)}}/>
             <label className='text-orange-600 text-lg'>Number</label>
             </div>
          <div className='p-3'>
             <input type='checkbox' onChange={(e)=>{setCharacter(e.target.checked)}} />
             <label className='text-orange-600 text-lg' > Characters</label>
          </div>
        </div>
      </div>
    </div>
   {/* <Login content='Signup' /> */}
    </> 
  );
}

export default But;

