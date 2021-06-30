import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {setData} from '../asstes/reducer';
import {useEffect , useState} from 'react';
import Header from "../components/header";


function Home(){
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
    return(
        <div>
           <Header />
               <div className='d-flex flex-wrap justify-content-center'>
           {state?.user?.data?.map((v,i)=>{
               return(
                   <div key={i} className='col-md-6 border mt-2'>
                   {/* <h1>{v.date}</h1>
                   <h1>{v.state}</h1> */}
                       <h1 className='p-4 text-center text-light bg-primary w-100'>{v.state}</h1>
                   <table className='w-100'>
                       <tr>
                           <th className='col-md-6 p-3'>Date</th>
                           <th className='col-md-6 p-3'>{v.date}</th>
                       </tr>
                       <tr>
                           <th className='col-md-6 p-3'>Total Test Results</th>
                           <th className='col-md-6 p-3'>{v.totalTestResults}</th>
                       </tr>
                       <tr>
                           <th className='col-md-6 p-3'>Positive Cases</th>
                           <th className='col-md-6 p-3'>{v.positive}</th>
                       </tr>
                       <tr>
                           <th className='col-md-6 p-3'>Negative Cases</th>
                           <th className='col-md-6 p-3'>{v.negative}</th>
                       </tr>
                       <tr>
                           <th className='col-md-6 p-3'>Hospitalized Currently</th>
                           <th className='col-md-6 p-3'>{v.hospitalizedCurrently}</th>
                       </tr>
                       <tr>
                           <th className='col-md-6 p-3'>Recovered</th>
                           <th className='col-md-6 p-3'>{v.recovered}</th>
                       </tr>
                       <tr>
                           <th className='col-md-6 p-3'>Deaths</th>
                           <th className='col-md-6 p-3'>{v.death}</th>
                       </tr>
                   </table>
                   </div>
               )
           })}
           </div>
        </div>
    )
}


export default Home;