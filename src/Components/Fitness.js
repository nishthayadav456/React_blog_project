import { useContext } from "react"
import  {Store} from './ContextStore'
import { NavLink ,useNavigate} from "react-router-dom"
import Footer from "./Footer/Footer"

import Navigation from "./header/Navigation"

function Fitness(){
const [ContextData]=useContext(Store)
console.log(ContextData)
const nav=useNavigate()
return(
<>

<Navigation/>
<h1 className="header">Fitness</h1>
<hr className="hr-under4"/>
<br/>
<div className="bollyparent">
<div className="right">
 {ContextData.filter((item)=>item.id>=63 && item.id<69).map((item,index)=>{
            return(
                <div className="middle"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head">{item.heading.slice(0,40)}</div>
                 <div className="image">
                <img id="bolyimage" src ={item.image} alt="not found" />
                </div>
                 <div className="description"> {item.Description.slice(0,150)}...</div>
                 </NavLink>  
                 <br/>
                 <hr className="line"/>
                 </div>
            )
        })}
        </div>
        <h2 id="toppost">Top Posts</h2> <hr className="hr-under5" />
        <div className="left">
         {ContextData.filter((item)=>item.id>=69 && item.id<=73).map((item,index)=>{
            return(
               <div className="middle1"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,40)} <h1 className="counter">{index+1}</h1></div>
                <div >
               <img  id="bolyimage1"src ={item.image} alt="not found" />
               </div>
               </NavLink>
               <hr className="linegrey"/>
               </div>
           )
       })} 
    <div className="advertisement">
    <img   id="firstimage" src="https://i.pinimg.com/564x/5e/b9/85/5eb985a019a9b5d957af3141fa43b0a5.jpg"alt="Not found"  />
        </div>
        </div>
        </div>
        <button className="btn1" onClick={()=>nav('/hollywood')}>Back</button>
       <Footer/>
        </>
    )
}
export default Fitness




