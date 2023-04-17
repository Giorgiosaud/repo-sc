import fetch from 'node-fetch';
import {writeFileSync} from 'fs'
import {resolve} from 'path'
const getPage=async()=>{
  let response=await fetch('https://fed-team.modyo.cloud/')
  let page=await response.text()
  return page;
}
const writePage=async()=>{
  const data=await getPage();
  writeFileSync(resolve('dist/','index.html'),data,{encoding:'utf-8'});
}
writePage();