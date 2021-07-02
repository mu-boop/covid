import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {setData} from '../asstes/reducer';
import {useEffect , useState} from 'react';
function Header(){
    const [alpha , setAlpha] = useState();
    const [alphaCode , setAlphaCode] = useState()
    const [countryName , setCountryName] = useState()
    const [countr , setCountr] = useState()
    const [ count , setCount] = useState()

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
            setCountr(response.data)
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
        }else{
            a.classList.remove('menu-items');
            a.classList.add('show-items')
        }
    }
    console.log(alphaCode);
    console.log(countryName);
    state.alpha2Code = alphaCode;
    state.countryName = countryName;
    state.count = count;
    console.log(state);

    return(
        <div className='header' >
            <nav className='navbar-custom d-flex '>
         <div className='col-md-5 text-light'>
          CreatorsForYou
         </div>
            <div className='col-md-7 d-flex'>
            <div className='col-md-8'></div>
            <div className='col-md-4'><button className='city-btn btn w-50 rounded-pill' onClick={()=> showMenu()}>Cities</button></div>
        </div>
      </nav>
      <div className='menu-items mughees'>
            <div>
                {state?.user?.data?.map((v,i)=>{
                    return (
                        <div onClick={(e)=>{
                            let a = e.target.id;
                            let b = e.target.innerHTML;
                            setAlphaCode(a);
                            setCountryName(b)
                            setCount(i)
                        }} className='menu-list p-2 text-light' id={v.state} key={i}>{v.state}</div>
                    )
                })}
            </div>
            </div>
            <div className='list-container'>
                <div className='col-md-8 mt-2'>
                       <h1 className='p-4 text-center'>{state?.user?.data[count]?.state}</h1>
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
               )
           
           </div>
        </div>
    )
}

export default Header;