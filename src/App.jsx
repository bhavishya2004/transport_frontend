import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './components/Update'
import AddData from './components/AddData'
import Report from './components/Report'
import Transport from './components/Transport'
import Transportbtn from './components/Transportbtn'
import Aboutus from './components/Aboutus'
import Contacts from './components/Contacts'
import Vehicles from './components/Vehicles'
import EmployeeReport from './components/EmployeeReport'
import EmpaddData from './components/EmpaddData'
import EmpUpdate from './components/EmpUpdate'
import VechicleReport from './components/VechicleReport'
import VaddData from './components/VaddData'
import Vupdate from './components/Vupdate'



const App = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
<Route path= "/" element={ <Transportbtn />} />
<Route path= "/Report" element={ <Report/>} />
<Route path= "/Aboutus" element={ <Aboutus/>} />
<Route path= "/Contacts" element={ <Contacts/>} />
<Route path= "/Vehicles" element={ <Vehicles/>} />
    <Route path= "/Transport" element={ <Transport />} />
    <Route path= "/AddData" element={ <AddData />} />
    <Route path= "/Update/:id" element={ <Update />} />

    <Route path= "/EmployeeReport" element={ <EmployeeReport />} />
    <Route path= "/EmpaddData" element={ <EmpaddData />} />
    <Route path= "/EmpUpdate/:id" element={ <EmpUpdate />} />


   <Route path= "/VechicleReport" element={ <VechicleReport />} />
   <Route path= "/VaddData" element={ <VaddData />} />
   <Route path= "/Vupdate2/:id" element={ <Vupdate />} />
   
    
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App