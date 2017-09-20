/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/// <reference path="../node_modules/electron/electron.d.ts">
declare var electron: Electron.AllElectron;
