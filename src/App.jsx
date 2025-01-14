import './App.css';

import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router';

/* Layout */
import BasicLayout from './layouts/BasicLayout';

/* Component */
import BasicContent from './pages/BasicContent';
import LoginContent from './pages/LoginContent';
import RegisterContent from './pages/RegisterContent';
import MainLayout from './layouts/MainLayout';
import MainContent from './pages/MainContent';
import ClassLayout from './layouts/ClassLayout';
import ClassIntro from './pages/ClassIntro';
import ClassOrientation from './pages/ClassOrientation';
import ClassOrientationQuiz from './pages/ClassOrientationQuiz';
import ClassOrganization from './pages/ClassOrganization';
import ClassResearch from './pages/ClassResearch';
import ClassPresentation from './pages/ClassPresentation';
import ClassEvaluation from './pages/ClassEvaluation';
import ClassOutro from './pages/ClassOutro';

import { UserProvider } from './context.jsx/UserContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<BasicLayout />}>
        <Route index element={<BasicContent />} />
        <Route path='login' element={<LoginContent />} />
        <Route path='register' element={<RegisterContent />} />
      </Route>
      <Route path='/main' element={<MainLayout />}>
        <Route index element={<MainContent />} />
      </Route>
      <Route path='/class/:id' element={<ClassLayout />}>
        <Route index element={<ClassIntro />} />
        <Route path='orientation/:slug' element={<ClassOrientation />} />
        <Route path='orientationQuiz/:slug' element={<ClassOrientationQuiz />} />
        <Route path='organization/:slug' element={<ClassOrganization />} />
        <Route path='research/:slug' element={<ClassResearch />} />
        <Route path='presentation/:slug' element={<ClassPresentation />} />
        <Route path='evaluation/:slug' element={<ClassEvaluation />} />
        <Route path='endClass' element={<ClassOutro />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
