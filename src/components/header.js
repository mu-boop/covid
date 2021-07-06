import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {setData} from '../asstes/reducer';
import {useEffect , useState} from 'react';
function Header(){
    const [alpha , setAlpha] = useState();
    const [alphaCode , setAlphaCode] = useState()
    const [ count , setCount] = useState();
    const [div , setDiv] = useState(false)

    const state = useSelector( state => {
        return state
            } );
            console.log(state);

       useEffect(()=>{
        const axios = require('axios');

        // Make a request for a user with a given ID
        axios.get('https://restcountries.eu/rest/v2/all')
          .then(function (response) {
            // handle success
            setAlpha(response)
              })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
       },[])
        state.country = alpha;
    function showMenu(){
        let a = document.querySelector('.mughees');
        if(a.classList.contains('show-items')){
            a.classList.remove('show-items');
            a.classList.add('menu-items')
            setDiv(false)
        }else{
            a.classList.remove('menu-items');
            a.classList.add('show-items')
        }
    }
    console.log(alphaCode);
    state.alpha2Code = alphaCode;
    state.count = count;
    console.log(state);
    return(
        <div className='header' >
            <nav className='navbar-custom d-flex '>
         <div className='col-md-5 logo'>
          COVID-APP
         </div>
            <div className='col-md-7 d-flex'>
            <div className='col-md-8'></div>
            <div className='col-md-4'><button className='city-btn btn w-50 rounded-pill' onClick={()=> showMenu()}>Cities</button></div>
        </div>
      </nav>
      <div className='menu-items mughees'>
            <div>
                {state?.user?.data?.map((v,i)=>{
                    for(var j = 0 ; j < state.country.data.length ; j++){
                        if(state.country.data[j].alpha2Code === v.state){
                            v.state = state?.country?.data[j]?.name
                        }
                    }
                    return (
                        <div onClick={(e)=>{
                            var a = e.target.id;
                            var b = e.target.innerHTML;
                            setAlphaCode(a);
                            setCount(i)
                            setDiv(true)
                        }} className='menu-list p-2' id={v.state} key={i}>{v.state}</div>
                    )
                })}
            </div>
            </div>
            {!div?<div className=' precautions'>
                <h1><span className='purple'>M</span>ake <span className='purple'>W</span>earing a <span className='purple'>M</span>ask a <span className='purple'>N</span>ormal <span className='purple'>P</span>art of <span className='purple'>B</span>eing <span className='purple'>A</span>round <span className='purple'>O</span>ther <span className='purple'>P</span>eople.</h1>
                <h3>Here are the basics of how to wear a mask:</h3>
                <ul>
                    <li>Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.</li>
                    <li>Make sure it covers both your nose, mouth and chin. </li>
                    <li>When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.</li>
                    <li>Don’t use masks with valves.</li>
                </ul>
            </div>:null}
            {div?<div className='list-container div'>
                <div className='col-md-8 mt-2'>
                       <h1 className='pt-4 text-center city-name'>{state?.user?.data[count]?.state}</h1>
                   <table className='w-100'>
                       <tr>
                           <td className='col-md-6'>Date</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.date}</td>
                       </tr>
                       <tr>
                           <td className='col-md-6'>Total Test Results</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.totalTestResults}</td>
                       </tr>
                       <tr>
                           <td className='col-md-6'>Positive Cases</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.positive}</td>
                       </tr>
                       <tr>
                           <td className='col-md-6'>Negative Cases</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.negative}</td>
                       </tr>
                       <tr>
                           <td className='col-md-6'>Hospitalized Currently</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.hospitalizedCurrently}</td>
                       </tr>
                       <tr>
                           <td className='col-md-6'>Recovered</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.recovered}</td>
                       </tr>
                       <tr>
                           <td className='col-md-6'>Deaths</td>
                           <td className='col-md-6'>{state?.user?.data[count]?.death}</td>
                       </tr>
                   </table>
                   </div>
               
           
           </div>:null}
           <div><img className='covid-img' src='https://www.elsevier.com/__data/assets/image/0006/974328/coronavirus-image-iStock-628925532-1200px.jpg' /></div>
        </div>
    )
}

export default Header;