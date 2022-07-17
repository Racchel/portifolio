import {
   Routes,
   Route
} from 'react-router-dom';

import { Home } from '../screens'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<p>Sobre</p>} />
         <Route path='/projects' element={<p>Projetos</p>} />
         <Route path='/blog' element={<p>Blog</p>} />
         <Route path='*' element={<p>Não encontrado</p>} />
      </Routes>
   )
}