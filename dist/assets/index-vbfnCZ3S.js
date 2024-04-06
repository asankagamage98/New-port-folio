import{_ as n}from"./index-5r3Q_A8d.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-_wh3wt3P.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-Z4LBGnyi.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-_wh3wt3P.js","assets/PolygonDrawerBase-YMg-r7Lz.js","assets/index-5r3Q_A8d.js","assets/index-exXYBnvI.css","assets/TriangleDrawer-Z4LBGnyi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
