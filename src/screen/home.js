import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {setData} from '../asstes/reducer';
import {useEffect , useState} from 'react';
import Header from "../components/header";


function Home(){
    const [count , setCount] = useState(true)
    const [main , setMain] = useState();
    const state = useSelector( state => {
    return state
    } );
    useEffect(()=>{
        const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.covidtracking.com/v1/states/current.json')
  .then(function (response) {
    // handle success
    // console.log(response);
    setMain(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    },[])

    console.log(main);
    state.user = main;
    let a = state.alpha2Code;
    console.log(a)
// const Blogs = () => {

//   const url = `https://api.covidtracking.com/v1/states/current.json`;
//   const dispatch = useDispatch();
//   const [mughees, setMughees] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         dispatch(setData(response.data));
//         setMughees(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },[]);
// }

// Blogs()
for(var i = 0 ;i < state?.user?.data?.length ; i++){
    
    console.log(count)
}
console.log(count)


    return(
        <div>
           <Header />
               
        </div>
    )
}


export default Home;