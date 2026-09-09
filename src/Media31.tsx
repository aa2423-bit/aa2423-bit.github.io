import {useEffect,useRef,useState,type ReactNode} from 'react';
import {asset,forProject} from './content/resources';
import media from './content/media31.json';
export type Slide={id:string;url:string;title:string;type:string;external?:boolean;preview?:string;issuer?:string;year?:string;result?:string;project?:string};
export const published=media as Slide[];
export function Carousel({items,label,hero=false,arrows=false,controls=true}:{items:Slide[];label:string;hero?:boolean;arrows?:boolean;controls?:boolean}){
 const [index,setIndex]=useState(0);const [paused,setPaused]=useState(false);
 useEffect(()=>{if(paused||items.length<2||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=setInterval(()=>setIndex(i=>(i+1)%items.length),6000);return()=>clearInterval(timer)},[items.length,paused]);
 if(!items.length)return null;const s=items[index%items.length];
 return <div className={'media31 '+(hero?'hero31':'')} role="region" aria-roledescription="carousel" aria-label={label} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}><div className="media31-stage"><img src={asset(s.preview||s.url)} alt={label} loading={hero?'eager':'lazy'}/></div>{controls&&items.length>1&&<div className={arrows?"media31-controls":undefined}>{arrows&&<button className="round31" aria-label={label+"：上一張"} onClick={()=>setIndex(i=>(i-1+items.length)%items.length)}>←</button>}<div className="dots31">{items.map((x,i)=><button key={x.id} aria-label={label+'：第 '+(i+1)+' 張'} aria-current={index%items.length===i?'true':undefined} onClick={()=>setIndex(i)}/>)}</div>{arrows&&<button className="round31" aria-label={label+"：下一張"} onClick={()=>setIndex(i=>(i+1)%items.length)}>→</button>}</div>}</div>
}
export function Rail({children,label}:{children:ReactNode;label:string}){
 const track=useRef<HTMLDivElement>(null);const [position,setPosition]=useState(0);
 const sync=()=>{const el=track.current;if(el)setPosition(el.scrollLeft/Math.max(1,el.scrollWidth-el.clientWidth)*100)};
 useEffect(()=>{const el=track.current;if(!el)return;const observer=new ResizeObserver(sync);observer.observe(el);return()=>observer.disconnect()},[]);
 return <div className="rail31"><div ref={track} className="rail31-track" tabIndex={0} role="region" aria-label={label} onScroll={sync}>{children}</div><div className="rail-slider-wrap"><span>拖曳滑桿，左右瀏覽</span><input className="rail-slider" type="range" min="0" max="100" step="0.1" value={position} aria-label={label+'：左右瀏覽滑桿'} onChange={e=>{const value=Number(e.target.value);setPosition(value);const el=track.current;if(el)el.scrollLeft=(el.scrollWidth-el.clientWidth)*value/100}}/></div></div>
}
export function Evidence({slugs,images=[],hideCertificates=false,compactLinks=false,hideCertificateLinks=false}:{slugs:string[];images?:Slide[];hideCertificates?:boolean;compactLinks?:boolean;hideCertificateLinks?:boolean}){
 const resources=slugs.flatMap(forProject).filter(r=>r.external||published.some(p=>p.url===r.url));
 const pdfs=resources.filter(r=>r.type.toLowerCase()==='pdf'&&!/證書|證照|獎狀|獎章|檢定|證明/.test(r.label));
 const certificates=published.filter(p=>slugs.some(s=>(p as Slide&{section:string}).section==='certificate-'+s));
 const photos=images.filter(p=>p.type.toLowerCase()==='image');
 if(compactLinks){const links=[...certificates.map(c=>({id:c.id,label:c.title,url:c.url,external:c.external})),...resources].filter((r,i,a)=>a.findIndex(x=>x.url===r.url)===i);return <><Carousel items={photos} label="活動影像"/><div className="award-links">{links.map(r=><a className="cta31" key={r.id} href={r.external?r.url:asset(r.url)} target="_blank" rel="noopener noreferrer">{r.label}</a>)}</div></>}
 return <><Carousel items={photos} label="活動影像"/>{pdfs.filter((p,i,a)=>a.findIndex(x=>x.url===p.url)===i).map(p=><div className="pdf4" key={p.id}><iframe title={p.label+' PDF 預覽'} src={asset(p.url)+'#toolbar=0&navpanes=0'} loading="lazy"/></div>)}{!hideCertificates&&certificates.length>0&&<div className="certificates4">{certificates.map(p=><figure key={p.id}><a href={asset(p.url)} target="_blank" rel="noopener noreferrer"><img src={asset(p.preview||p.url)} alt={p.title} loading="lazy"/></a>{!hideCertificateLinks&&<a className="cta31" href={asset(p.url)} target="_blank" rel="noopener noreferrer">{p.title}</a>}</figure>)}</div>}{resources.filter(r=>!certificates.some(c=>c.url===r.url||c.title===r.label)).map(r=><a className="cta31" key={r.id} href={r.external?r.url:asset(r.url)} target="_blank" rel="noopener noreferrer">{r.label}</a>)}</>
}
