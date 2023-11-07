import React from 'react';
import './App.css';
import AppHeader from './components/common/AppHeader.tsx';
import AppRouter from './components/routes/AppRouter.tsx'

function App() {  
  return (
    <>
      <AppHeader />
      <AppRouter />
    </>
  );
}

export default App;
