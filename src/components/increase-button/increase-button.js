import BaseComponent from '../../utils/base-component';
import './increase-button.scss';

export default class IncreaseButton extends BaseComponent {
  constructor(parentNode, { content }) {
    super({
      parentNode,
      className: 'increase-button',
      content,
    });
    this.node.onclick = () => this.handleClick();
  }

  handleClick() {
    this.emit('clickOnButton', this);
  }
}
