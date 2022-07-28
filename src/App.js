 import { useEffect } from 'react';
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
 import { FiSettings } from 'react-icons/fi';
 import { TooltipComponent } from '@syncfusion/ej2-react-popups';
 import { Navbar, Footer, SideBar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calender, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
 import './App.css'
import {useStateContext} from './context/ContextProvider'

 function App() {
 const {activeMenu} = useStateContext()
  return (
    <BrowserRouter>
     <div className="flex relative dark:bg-main-dark-bg">
      <div className='fixed right-4 bottom-4' style={{zIndex:1000}}>
      <TooltipComponent content="setting" position="top">
       <button type='button' className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white' style={{background:"blue",borderRadius:"50%"}}>
        <FiSettings/>
       </button>
      </TooltipComponent>
      </div>
      {activeMenu ?(
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <SideBar/>
          </div>
      ):(
        <div className='w-0 dark:bg-secondary-dark-bg '>
           <SideBar/> 
          </div>
      )
    }
    <div className={
      `dark:bg-main-bg bg-main-bg main-h-screen  w-full ${activeMenu}md:ml-72 :flex-2`
      }>
<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
  <Navbar/>

</div>
    
    <div>
      <ThemeSettings/>
      <Routes>
      {/* dashboard  */}
      <Route path="/" element={<Ecommerce/>}/>
                <Route path="/ecommerce" element={<Ecommerce/>}/>

                {/* pages  */}
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/customers" element={<Customers/>}/>

                {/* apps  */}
                <Route path="/kanban" element={<Kanban/>}/>
                <Route path="/editor" element={<Editor/>}/>
                <Route path="/calendar" element={<Calender/>}/>
                <Route path="/color-picker" element={<ColorPicker/>}/>

                {/* charts  */}
                <Route path="/line" element={<Line/>}/>
                <Route path="/area" element={<Area/>}/>
                <Route path="/bar" element={<Bar/>}/>
                <Route path="/pie" element={<Pie/>}/>
                <Route path="/financial" element={<Financial/>}/>
                <Route path="/color-mapping" element={<ColorMapping/>}/>
                <Route path="/pyramid" element={<Pyramid/>}/>
                <Route path="/stacked" element={<Stacked/>}/>
      </Routes>
    </div>
    </div>
     </div>
    </BrowserRouter>
   
  );
} 

export default App;
