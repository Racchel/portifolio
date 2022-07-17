import {
   Routes,
   Route
} from 'react-router-dom';

import { Home } from '../screens'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
      </Routes>
   )
}