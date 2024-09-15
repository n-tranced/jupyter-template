import "../style/index.css";

async function activate(app) {
  // eslint-disable-next-line no-console
  console.log("JupyterLab extension jupyter-template is activated!");
}

const extension = {
  activate,
  autoStart: true,
  id: "jupyter-template",
  optional: [],
  requires: [],
};

export default extension;
export {activate as _activate};
