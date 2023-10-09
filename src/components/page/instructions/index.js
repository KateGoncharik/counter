import BaseComponent from '../../../utils/base-component';
import './instructions.scss';
import content from './instructions.html';

const instructions = new BaseComponent({
  className: 'instructions',
  content,
});

export default instructions;
