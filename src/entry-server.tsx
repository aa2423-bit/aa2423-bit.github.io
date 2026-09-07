import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './AppSite';
export function render(path:string,base:string){return renderToString(<StaticRouter location={base.replace(/\/$/,'')+path} basename={base.replace(/\/$/,'')||'/'}><App/></StaticRouter>)}
