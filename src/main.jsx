import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useForm, useFormState } from 'react-hook-form'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.css'
import numeral from 'numeral'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
