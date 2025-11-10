import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/usestatehook/Task';
import Unitscal from './components/usestatehook/Unitscal';
import Intro from './components/Intro';
import AddTask from './components/usestatehook/AddTask';
import Tension from './components/usestatehook/Bgchanger';
import Workout from '../src/components/usestatehook/Workout';
import Bgchanger from './components/usestatehook/Bgchanger';
import FindLargeWord from './components/usestatehook/FindLargeWord';

function App() {
  return (
    <div>
      <FindLargeWord/>
      <Bgchanger/>
      <Workout/>
      <AddTask/>
      <Intro />
      <Task/>
      <Unitscal/>
    </div>
  );
}

export default App;
