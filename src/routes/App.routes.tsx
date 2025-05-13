import {Routes, Route, Navigate} from 'react-router-dom';
import { Form01 } from '../components/Form01';
import { HomeNavBar } from './HomeNavBar';
import { Form02 } from '../components/Form02';
import { Form03 } from '../components/Form03';
import { DSForm01 } from '../components/DSForm01';
import { DSForm02 } from '../components/DSForm02';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
      <Route path='/*' element={<Navigate to="/HomePage" />}/>
      <Route path='/' element={<HomeNavBar />}/>
      <Route path='/Form01' element={<Form01 />}/>
      <Route path='/Form02' element={<Form02 />}/>
      <Route path='/Form03' element={<Form03 />}/>
      <Route path='/DSForm01' element={<DSForm01/>}/>
      <Route path='/DSForm02' element={<DSForm02/>}/>
      </Routes>
    </>
  )
}