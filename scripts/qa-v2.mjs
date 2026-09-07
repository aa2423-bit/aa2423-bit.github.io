import {createRequire} from 'node:module';
import fs from 'node:fs';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/Swift/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const b=await chromium.launch({headless:true,channel:'msedge'});
const p=await b.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
const results=[];
for(const width of [1440,390]){await p.setViewportSize({width,height:900});await p.goto('http://127.0.0.1:5174/',{waitUntil:'networkidle'});await p.locator('#contact').scrollIntoViewIfNeeded();await p.evaluate(()=>window.scrollTo(0,0));await p.screenshot({path:`qa/v2-${width}.png`,fullPage:true});results.push(await p.evaluate(()=>({width:innerWidth,height:document.body.scrollHeight,overflow:document.documentElement.scrollWidth>innerWidth,headings:[...document.querySelectorAll('.v2 h2')].map(x=>x.textContent),brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)})));}
for(const route of ['/projects/hrfriday','/projects/sel','/projects/capstone','/projects/smart-retail','/projects/terra','/projects/bamboo-tea','/leadership/residence','/experience/community','/learning/more']){await p.goto('http://127.0.0.1:5174'+route+'/');if(await p.locator('h1').count()!==1)errors.push(route+' missing heading');}
fs.writeFileSync('qa/v2-checks.json',JSON.stringify({results,errors},null,2));console.log(JSON.stringify({results,errors},null,2));await b.close();
