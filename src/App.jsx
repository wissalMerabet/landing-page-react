import Styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'

export default function App() {

  return (
    <div className={Styles.App}>
      <Navbar/>
      <Hero/>
    </div>
  );
}


