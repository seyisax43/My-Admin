import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
const Home = () => {
  return (
      <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home Container
      </div>
 
    </div>
  )
}

export default Home
