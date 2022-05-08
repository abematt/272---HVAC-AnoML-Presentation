import React, {useRef,useEffect} from "react";

const {tableau} = window;

function TableauEmbed(){
  const ref = useRef(null)
  const url = "https://public.tableau.com/views/HVAC272/MainDash"

  function initViz(){
    new tableau.Viz(ref.current, url)
  }

  useEffect(()=>{
    initViz();
  },[])

  return (
  <div>
    <p>This is a test of the dashboard</p>
    <div ref={ref}></div>
  </div>
    
  )
}

export default TableauEmbed;