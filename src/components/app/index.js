import EventEmitter from '../../utils/event-emitter';
import Counter from '../counter';
import './app.scss';

export default class App extends EventEmitter {
  constructor(parentNode) {
    super();
    this.parentNode = parentNode;
  }

  init(parentNode) {
    this.counter = new Counter(parentNode);
  }
}
