import React from 'react'
import Section from './components/Section';
import { Route, Routes } from 'react-router'
import CreatePost from './components/CreatePost';
import ShowError from './screens/Error/ShowError';
import SinglePost from './components/SinglePost';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='*' element={<ShowError />} />
        <Route path='/:id' element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App