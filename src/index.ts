import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for bepstein/jupyterlab_splicetheme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@bepstein/jupyterlab_splicetheme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@bepstein/jupyterlab_splicetheme/index.css';

    manager.register({
      name: 'jupyterlab_splicetheme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
