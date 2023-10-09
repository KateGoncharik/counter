import * as page from './components/page';
import BaseComponent from './utils/base-component';
import App from './components/app';

const root = new BaseComponent({
  parentNode: document.body,
  className: 'root',
});
root.append(page.header, page.instructions);
const app = new App(root);
app.init(root);
