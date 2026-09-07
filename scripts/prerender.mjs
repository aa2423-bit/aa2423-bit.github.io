import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
const base=process.env.BASE_PATH||'/';
// Production-only router fallback origin; does not change routes or rendered UI.
const productionOrigin=process.env.VITE_SITE_URL?.replace(/\/$/,'');
if(productionOrigin){for(const name of await fs.readdir('dist/assets')){if(name.endsWith('.js')){const file=path.join('dist/assets',name);const source=await fs.readFile(file,'utf8');await fs.writeFile(file,source.replaceAll('http://localhost',productionOrigin));}}}
if(!base.startsWith('/')||!base.endsWith('/'))throw new Error('BASE_PATH must start and end with /');
const vite=await createServer({server:{middlewareMode:true},appType:'custom'});
try{
 const {render}=await vite.ssrLoadModule('/src/entry-server.tsx');
 const template=await fs.readFile('dist/index.html','utf8');
 const {stories}=await vite.ssrLoadModule('/src/content/v3.ts');
 const routes=[['/','Anna Peng 彭淑萍 | Digital Portfolio'],...stories.map(s=>[s.path+'/',s.title]),['/experience/recruitment/','亞瑞特｜Anna Peng'],['/experience/familymart/','全家便利商店｜Anna Peng'],['/experience/caves/','敦煌書局｜Anna Peng'],['/experience/caves/','敦煌書局｜Anna Peng'],['/experience/caves/','敦煌書局｜Anna Peng'],['/learning/more/','更多課程作品｜Anna Peng']];
 const origin=process.env.VITE_SITE_URL?.replace(/\/$/,'');
 for(const [route,title]of routes){let html=template.replace('<div id="root"></div>','<div id="root">'+render(route,base)+'</div>').replace(/<title>.*?<\/title>/,'<title>'+title+'</title>');if(origin)html=html.replace('</head>',`<link rel="canonical" href="${origin}${route}"/><meta property="og:url" content="${origin}${route}"/><meta property="og:image" content="${origin}/images/anna-hero.webp"/></head>`);const dir=path.join('dist',route);await fs.mkdir(dir,{recursive:true});await fs.writeFile(path.join(dir,'index.html'),html);}
 await fs.writeFile('dist/404.html',template.replace('<div id="root"></div>','<div id="root">'+render('/not-found',base)+'</div>'));
 await fs.writeFile('dist/.nojekyll','');
 if(origin){await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(([r])=>`<url><loc>${origin}${r}</loc></url>`).join('')+'</urlset>');await fs.writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)}
 console.log('Prerendered',routes.length,'V3 routes and 404. Base:',base);
}finally{await vite.close()}
