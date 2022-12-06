import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./counter";
import Form from "./form.js";
import Visibility from "./visibility";
 import {Person,Student,Traveller} from "./react_component";
import {Header,Action,Option,AddOption,Options} from "./react_component2";
import {Counter1} from "./Counter1";
import {Visibility1} from "./Visibility1";



const root = ReactDOM.createRoot(document.getElementById('root'));
const title="test title";
const subtitle = "Hello subtitle";
const options = ['Thing one','Thing two','Thing three'];
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <Form />
    {/* <Visibility /> */}
    {/* <Person />
    <Student />
    <Traveller /> */}
    {/* <Header title={title} subtitle={subtitle} /> */}
    {/* <Action /> */}
    {/* <Options options={options}/> */}
     {/* <Option /> */}
    {/* <AddOption options={options}/>  */}
    {/* <Counter1 /> */}
     {/* <Visibility1 />  */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

