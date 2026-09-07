import React from 'react';import {createRoot,hydrateRoot} from 'react-dom/client';import {BrowserRouter} from 'react-router-dom';import App from './AppSite';import './v1.css';const root=document.getElementById('root')!;const app=<React.StrictMode><BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/,'') || '/'}><App/></BrowserRouter></React.StrictMode>;if(root.hasChildNodes())hydrateRoot(root,app);else createRoot(root).render(app);

import './v3.css';

import './v31.css';
import './v4.css';
