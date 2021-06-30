import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {setData} from '../asstes/reducer';
import {useEffect , useState} from 'react';
function Header(){
    const state = useSelector( state => {
        return state
            } );
            console.log(state.user.data)
        const Blogs = () => {
        
          const url = `https://api.covidtracking.com/v1/states/current.json`;
          const dispatch = useDispatch();
          const [mughees, setMughees] = useState();
          const [loading, setLoading] = useState(true);
        
          useEffect(() => {
            axios
              .get(url)
              .then((response) => {
                dispatch(setData(response.data));
                setMughees(response.data);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          },[]);
        }
        
        Blogs()
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

                <ul>
                {state?.user?.data?.map((v,i)=>{
                    return (
                        <li><a href='#'>{v.state}</a></li>
                    )
                })}
                    
                   
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Header;