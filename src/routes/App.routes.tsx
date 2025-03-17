import {Routes, Route, Navigate} from 'react-router-dom';
import { Form01 } from '../components/Form01/Form01';
import { HomeNavBar } from './HomeNavBar';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
      <Route path='/*' element={<Navigate to="/HomePage" />}/>
      <Route path='/' element={<HomeNavBar />}/>
      <Route path='/Form01' element={<Form01 />}/>
      </Routes>
    </>
  )
}