declare module "*.gltf";
declare module "*.glb";
declare module "*.ttf";
declare module ".json";
declare module "worker-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}
