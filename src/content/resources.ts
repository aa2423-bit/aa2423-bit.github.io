export type Resource={id:string;project:string;label:string;type:string;url:string;external?:boolean};
export const asset=(path:string)=>import.meta.env.BASE_URL+path.replace(/^\//,'');
import resourceData from './resource-data.json';
export const resources:Resource[]=resourceData;
export const forProject=(slug:string)=>resources.filter(r=>r.project===slug);
