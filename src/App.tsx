import React, { FC, useContext, useState } from 'react';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ConversationPage from './pages/ConversationPage';
import ConversationChannelPage from './pages/ConversationChannelPage';
import { AuthenticatedRoute } from './components/AuthenticatedRoutes';
import { AuthContext } from './utils/context/AuthContext';
import { User } from './utils/types';

function App() {
  const [user, setUser] = useState<User>()
  return (
    <div className="App">
          <AuthContext.Provider value={{user, updateAuthUser:setUser}}>
         <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='conversations' element={
            <AuthenticatedRoute>
          <ConversationPage/>
          </AuthenticatedRoute>
          }>
            <Route path=":id" element={<ConversationChannelPage/>}/>
          </Route>
         </Routes>
          </AuthContext.Provider>
    </div>
  );
}



export default App;
