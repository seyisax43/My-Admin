import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="top">
              <span className="logo">SeyiScope Admin</span>
          </div>
          <hr />

          <div className="center">
              <ul>
                  <p className="tittle">MAIN</p>
                  <li>
                      <DashboardIcon className='icon' />
                      <span>Dashboard</span>
                  </li>
                   <p className="tittle">LIST</p>
                  <li>
                      
                      <PersonIcon  className='icon'/>
                      <span>Users</span>
                  </li>
                  <li>
                      <ProductionQuantityLimitsIcon className='icon'/>
                      <span>Products</span>
                  </li>
                  <li>
                      <StoreIcon className='icon'/>
                      <span>Orders</span>
                  </li>
                  <li>
                       <LocalShippingIcon className='icon'/>
                      <span>Delivery</span>
                  </li>
                   <p className="tittle">USEFUL</p>
                  <li>
                      <InsertChartOutlinedIcon className='icon'/>
                     
                      <span>Stats</span>
                  </li>
                  <li>
                      <NotificationsOutlinedIcon className='icon'/>
                      <span>Notifications</span>
                  </li>
                   <p className="tittle">SERVICE</p>
                  <li>
                      <MedicalInformationOutlinedIcon className='icon'/>
                      <span>Sysytem Health</span>
                  </li>
                  <li>
                      <PsychologyIcon className='icon'/>
                      <span>Logs</span>
                  </li>
                  <li>
                      <SettingsIcon className='icon'/>
                      <span>Settings</span>
                  </li>
                   <p className="tittle">USER</p>
                  <li>
                      <AccountCircleIcon className='icon'/>
                      <span>Profile</span>
                  </li>
                  <li>
                      <LogoutOutlinedIcon className='icon'/>
                      <span>Logout</span>
                  </li>
              </ul>
          </div>

          <div className="bottom">
              <div className="colorOption"></div>
              <div className="colorOption"></div>
          </div>
  
    </div>
  )
}

export default Sidebar
