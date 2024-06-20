// App.js
import React, { Suspense } from 'react';
import './App.css';
import Showdata from './showdata';

function App() {
  return (
    <div>
      <h1>Data Fetching Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Showdata />
      </Suspense>
    </div>
  );
}

export default App;
