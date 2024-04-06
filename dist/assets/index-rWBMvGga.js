import{_ as e}from"./index-5r3Q_A8d.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-TYHcVybr.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-TYHcVybr.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-5r3Q_A8d.js","assets/index-exXYBnvI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
