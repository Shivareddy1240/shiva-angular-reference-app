export interface Profile { name:string; role:string; location:string; summary:string; email:string; highlights:string[]; socials:{label:string;url:string}[]; }
export interface Project { id:number; name:string; category:string; description:string; tech:string[]; impact:string; status:'Live'|'Prototype'|'Learning'; featured:boolean; repo?:string; demo?:string; }
export interface Skill { name:string; category:string; level:number; years:number; }
export interface Experience { company:string; role:string; period:string; points:string[]; }
export interface Certification { name:string; issuer:string; year:number; credential?:string; }
export interface BlogPost { title:string; description:string; tags:string[]; readTime:string; published:string; }
export interface ContactMessage { id:string; name:string; email:string; message:string; createdAt:string; }
export interface Note { id:string; title:string; body:string; createdAt:string; }
export interface Activity { title:string; description:string; date:string; type:'Project'|'Blog'|'Learning'|'Release'; }
