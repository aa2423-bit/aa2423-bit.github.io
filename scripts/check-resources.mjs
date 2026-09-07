import fs from 'node:fs';import path from 'node:path';
const resources=JSON.parse(fs.readFileSync('src/content/resource-data.json','utf8'));let errors=[];
for(const r of resources){if(!r.url||r.url==='#'||/^[A-Z]:/i.test(r.url))errors.push('Invalid URL '+r.id);if(!r.external&&!fs.existsSync(path.join('public',r.url)))errors.push('Missing '+r.url);if(r.external&&!r.url.startsWith('https://')&&!r.url.startsWith('http://'))errors.push('Invalid external '+r.id)}
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(dir,x.name)):[path.join(dir,x.name)])}
for(const file of walk('public')){if(fs.statSync(file).size>=100*1024*1024)errors.push('File exceeds GitHub limit '+file)}
const app=fs.readFileSync('src/AppSite.tsx','utf8');if(app.includes('href="#"'))errors.push('Placeholder link');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`PASS: ${resources.length} approved resources, local files present, no placeholders, no file over 100 MiB.`);
