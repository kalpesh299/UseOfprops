
import './App.css';
import { Moveicard } from './components/Moveicard';
import data from "./components/data.json"

function App() {
  console.log(data.movies)
  return (
   
    <div className="w-screen bg-slate-500">
      <h1 className='text-center font-bold text-2xl font-serif pt-4 text-white'>Movie Information</h1>
     {data.movies.map((el)=>{
            return(

              <Moveicard year={el.release_year} poster={el.img} title={el.title} duration={el.duration_minutes} genre={el.genre} director={el.director} des={el.description}/>

            )   
    
     })}

     {/* <Moveicard/> */}
     
    </div>
  );
}

export default App;
