import React, {useRef,useEffect} from "react";

const {tableau} = window;

function TableauEmbed(){
  const ref = useRef(null)
  // const url = "https://public.tableau.com/views/HVAC272/MainDash"
  const url = "https://10az.online.tableau.com/t/hvac272/views/try2/MainDash?:origin=card_share_link&:embed=y"

  function initViz(){
    new tableau.Viz(ref.current, url)
  }

  useEffect(()=>{
    initViz();
  },[])

  return (
  <div>
    <p>Dashboard</p>
    <div ref={ref}></div>
  </div>
    
  )
}

export default TableauEmbed;