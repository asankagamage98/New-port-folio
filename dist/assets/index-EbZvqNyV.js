import{_ as r}from"./index-5r3Q_A8d.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-caf_S8av.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-caf_S8av.js","assets/index-5r3Q_A8d.js","assets/index-exXYBnvI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
