import {useContext} from 'react'
import './Style.css';
import { Store } from './ContextStore';
import MainPage from './MainPage';
import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';

import Navigation from './header/Navigation';

function Home(){
    return(
        <>
      <Navigation/>
       
        <br/>
        <MainPage/>
        <Latest/>
        <TopStories/>
        </>
    )
  
}
export default Home
function Latest(){
    const[ContextData]=useContext(Store);
    console.log(ContextData)
    return(
        <>
        <div className='lateststories'>
        <h2>The Latest
        <hr className='hr-under'/>
        </h2>
        </div>
        <br/>
        <div className='homelatest'>
        {ContextData.filter((item)=>item.id%20===0 ).map((item,index)=>{
            console.log(item)
            return(
                 <>
                 <div key={index}>
                 <NavLink to={`/DynamicCompo/${item.id}`}>
                   
                 <img id="Latestimage" src ={item.image} alt="not found" />
                 <h3 className='heading' >{item.heading } </h3>
                     <div className='para1'>
                    <p> {item.Description }</p>
                 </div>
                 </NavLink>
                   </div>
                  </>
            )
        })}
        </div>
         </>
    )
}
function TopStories(){
    const[ContextData]=useContext(Store);
    console.log(ContextData)
    return(
        <>
        <div class="Top-post">
        <h2>Top Stories
        <hr className='hr-under2'/>
        </h2>
        </div>
       <div className='thirdbox'>
       <br/>
        <div className='Right'>
        {ContextData.filter((item)=>item.id%11===0 ).map((item,index)=>{
            console.log(item)
            return(
                <div className='middle5' key={index}>
                 <NavLink to={`/DynamicCompo/${item.id}`}>
                <div >
                 <img id="topstoryimage"src ={item.image} alt="not found" />
                 </div>
                  <div className='heading2'>{item.heading.slice(0,45)} </div>
                   <p className='para2'> {item.Description.slice(0,150)}...</p>
                     <hr className="line"/>
                     </NavLink>
                    </div>
                    
            )
        })}
        </div>

      
         <div className="Left">
         <h2 id="First-post">Top Posts</h2> 
         <hr className="hr-line" />
           {ContextData.filter((item)=>item.id%12===0).map((item,index)=>{
            return(
                <div  className="mid"key={index}>
                   <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head4">{item.heading.slice(0,40)} <h1 className="counter">{index+1}</h1></div>
                <div>
               <img id="topostimage"src ={item.image} alt="not found"  />
               </div>
               </NavLink>
               <hr className="linegrey"/>
               </div>
           )
       })}
       <div className="advertise">
      <img  id="secondimage" src="https://www.themediaant.com/blog/wp-content/uploads/2022/07/Outdoor-Advertising.jpg" alt="Not found"/>
        </div>
        </div>
        </div>
        <Footer/>
         </>
    )
}





