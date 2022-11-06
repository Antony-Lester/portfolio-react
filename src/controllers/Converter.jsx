import { useEffect, useState } from 'react'

import conversion from '../utils/conversion'
import Option from '../utils/converter-options'


import '../styling/Converter.css'

export default function Converter() { 
    const [result, setResult] = useState([])
  const [value, setValue] = useState(null)
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)

  
  
  const handleValue = (event) => {
    setValue(event.target.value)
    if (event.target.value !== null && from !== null && to !== null) { setResult([conversion(event.target.value, from, to),...result]) }
    event.preventDefault()
  }
  
  const handleFrom = (event) => {
    setFrom(event.target.value)
    if (value !== null && event.target.value !== null && to !== null) { setResult([conversion(value, event.target.value, to),...result]) }
    event.preventDefault()
  }
    
  const handleTo = (event) => {
    setTo(event.target.value)
    if (value !== null && from !== null && event.target.value !== null) { setResult([conversion(value, from, event.target.value),...result]) }
    event.preventDefault()
  }
  
    //useEffect(() => {console.log(result)}, [result])

  return ( 
  <>
    <span><form>
        <fieldset>
        <span htmlFor="value">Convert&nbsp;</span>
        <input name="value" type="text" id="inputValue" onChange={handleValue} />
        <span htmlFor="conversion">&nbsp;from&nbsp;</span>
        <select name="conversion" id="conversions" onChange={handleFrom}><Option/></select>
        <span htmlFor="conversion">&nbsp;to&nbsp;</span>
        <select name="conversion" id="conversions" onChange={handleTo}><Option /></select>
              </fieldset>
              <div className='results'>{[...result].map((result, i) => <div className='resultsCard' key={i}>{result}</div>)}</div>
    </form></span>
          
   </>
  );

}