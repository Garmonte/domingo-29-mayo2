import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home></Home> } />
      <Route path="/facturas" component={ <Facturas></Facturas> } />
      <Route path="/clientes" component={ <Clientes></Clientes> } /> 
      <Route path="/productos" component={ <Productos></Productos> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
