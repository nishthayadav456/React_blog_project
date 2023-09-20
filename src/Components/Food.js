import { useContext } from "react"
import  {Store} from './ContextStore'
import { NavLink,useNavigate } from "react-router-dom"
import Footer from "./Footer/Footer"

import Navigation from "./header/Navigation"

function Food(){
const [ContextData]=useContext(Store)
console.log(ContextData)
const nav=useNavigate()
    return(
        <>
       
        <Navigation/>
        <h1 className="header">Food</h1>
        <hr className="hr-under4"/>
        <br/>
        <div className="bollyparent">
        <div className="right">
        {ContextData.filter((item)=>item.id>=30 && item.id<36).map((item,index)=>{
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
           {ContextData.filter((item)=>item.id>=36 && item.id<=40).map((item,index)=>{
           return(
               <div  className="middle1"key={index}>
               <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,40)} <h1 className="counter">{index+1}</h1></div>
                <div>
               <img  id="bolyimage1" src ={item.image} alt="not found" />
               </div>
               </NavLink>
               <hr className="linegrey"/>
               </div>
           )
       })} 
         <div className="advertisement">
         {/* Advertisement */}
         <img   id="firstimage" src="https://img.pikbest.com/01/84/78/43ZpIkbEsTKWT.jpg!f305cw" alt="Not found"/>
        </div>
        </div>
         </div>
         <button className="btn1" onClick={()=>nav('/Fitness')}>Back</button>
        <Footer/>
        </>
    )
}
export default Food




