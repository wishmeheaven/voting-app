import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import { PAGES } from './constants'
import { Voting,Form, FormLogin, FormSuccess } from './pages'

function App() {
  <div>
      <Voting />;
  </div>
const [form, formLogin, formSuccess] = PAGES;
const [page, setPage] = useState('form');

  switch(page) {
    // should be 
    case form: 
    return <Voting setPage={setPage} />;
    case formLogin: 
    return <FormLogin setPage={setPage} />;
    case formSuccess: 
    return <FormSuccess setPage={setPage} />;
    default:
      return <Form setPage={setPage} />;
}

export default App;