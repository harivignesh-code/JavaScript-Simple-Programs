import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/usestatehook/Task';
import Unitscal from './components/usestatehook/Unitscal';
import Intro from './components/Intro';
import AddTask from './components/usestatehook/AddTask';
import Workout from '../src/components/usestatehook/Workout';
import Bgchanger from './components/usestatehook/Bgchanger';
import Factorial from './components/usestatehook/Factorial';
import Pare from './components/props/Pare';
import Chil from './components/props/Chil';
import Form from './components/Form';
import Formdata from './components/Formdata';
import StoneTask from './components/StoneTask';
import Paper from './components/Paper';
import PerfectNumber from './components/usestatehook/PerfectNumber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';





function App() {
  return (
    <div>

      {/* <PerfectNumber/>
      <StoneTask/> */}
      {/* <Paper /> */}
     {/* <StoneTask/> */}
     {/* <Formdata/> */}
      {/* <Form/> */}
      {/* <Chil/> */}
      {/* <Pare /> */}
      {/* <Factorial/>
      <Bgchanger/>
      <Workout/>
      <AddTask/>
      <Intro />
      <Task/>
      <Unitscal/> */}

      <BrowserRouter>
            <Nav />


      <Routes>
        <Route path='' element={<Intro />} />
        <Route path='/game' element={<StoneTask />} />
        <Route path='/forms/formdata' element={<Formdata />} />
        <Route path='/PerfectNumber/:number' element={<PerfectNumber/>}/>
        <Route path='/forms' element={<Formdata/>}/>
      </Routes>
      
      
      </BrowserRouter>
        
    </div>
  );
}

export default App;
