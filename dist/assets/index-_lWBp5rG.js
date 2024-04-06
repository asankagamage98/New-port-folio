import{_ as i}from"./index-5r3Q_A8d.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-SOFTvzLO.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-SOFTvzLO.js","assets/ValueWithRandom-qsVo7g2J.js","assets/index-5r3Q_A8d.js","assets/index-exXYBnvI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
