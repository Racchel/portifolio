import {
   Routes,
   Route
} from 'react-router-dom';

import { Home, Blog, PostByID } from '../screens'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         {/* <Route path='/about' element={<p>Sobre</p>} />
         <Route path='/projects' element={<p>Projetos</p>} /> */}
         <Route path='/blog' element={<Blog />} />
         <Route path='/blog/post/:id' element={<PostByID />} />

         <Route path='*' element={<p>Não encontrado</p>} />
      </Routes>
   )
}