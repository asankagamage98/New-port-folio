import{_ as o}from"./index-5r3Q_A8d.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-TEwQyqsR.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-TEwQyqsR.js","assets/index-5r3Q_A8d.js","assets/index-exXYBnvI.css","assets/ValueWithRandom-qsVo7g2J.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
