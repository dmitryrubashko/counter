import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';

import Routes from "./Routes/Routes";
import MainLayout from "./Components/Layout/MainLayout";

ReactDOM.render(
  <BrowserRouter>
  <MainLayout>
    <Routes />
  </MainLayout>
</BrowserRouter>,
  document.getElementById('root')
);
