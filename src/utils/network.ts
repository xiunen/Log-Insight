export const request = (api, {
  method='GET',
  body={},
  query={},
  options={}
}={}) =>{
  const queryStr = (new URLSearchParams(query)).toString();
  let endpoint = api.endsWith('?')?api.substring(0,api.length-1):api;
  endpoint = [endpoint,api.includes('?')?'&':'?',queryStr].join('');
  return fetch(endpoint,{
    method,
    body: ['POST','PUT'].includes(method)?JSON.stringify(body):undefined,
    headers:{
      'Content-Type':'application.json',
      ...options
    }
  }).then(res=>{
    if(res.ok)return res.json();
    const e = new Error(res.statusText);
    //@ts-ignore
    e.response = res.json();
    throw e;
  }).then(res=>[undefined, res]).catch(e=>[e, undefined])
}