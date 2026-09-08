import fs from 'node:fs';
import path from 'node:path';
const output=path.resolve('dist/client');
const base=process.env.NEXUS_BASE_PATH||'';
if(base){
 if(!/^\/[A-Za-z0-9_-]+$/.test(base))throw new Error('NEXUS_BASE_PATH precisa de um segmento seguro.');
 const nested=path.join(output,base.slice(1));
 if(fs.existsSync(path.join(nested,'index.html'))){
  for(const entry of fs.readdirSync(nested))fs.cpSync(path.join(nested,entry),path.join(output,entry),{recursive:true,force:true});
  fs.rmSync(nested,{recursive:true});
 }
}
if(!fs.existsSync(path.join(output,'index.html')))throw new Error('Exportação sem página inicial.');
fs.writeFileSync(path.join(output,'.nojekyll'),'');
console.log('Pacote estático preparado para hospedagem'+(base?' em '+base:''));
