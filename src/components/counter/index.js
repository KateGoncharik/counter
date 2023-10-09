import BaseComponent from '../../utils/base-component';
import IncreaseButton from '../increase-button/increase-button';
import './counter.scss';

const lsPrefix = 'Gonch-Counter';

function saveToLs(key, value) {
  localStorage.setItem(`${lsPrefix}-${key}`, JSON.stringify(value));
}

function getFromLs(key) {
  const value = localStorage.getItem(`${lsPrefix}-${key}`);
  let parsedValue;
  try {
    parsedValue = JSON.parse(value);
  } catch (err) {
    throw new Error('Error', err);
  }
  return value ? parsedValue : null;
}

export default class Counter extends BaseComponent {
  constructor(parentNode) {
    super({
      parentNode,
      className: 'counter',
    });
    this.parentNode = parentNode;
    this.counterAmount = 0;
    this.init();
    this.settings = {
      darkTheme: false,
    };
    this.saveSettings();
    this.getSettings();
    this.on('clickOnButton', () => {
      this.increaseCounterAmount();
      this.renderCounterAmount();
    });
    this.on('changeTheme', (isDark) => this.changeTheme(isDark));
  }

  increaseCounterAmount() {
    this.counterAmount += 1;
  }

  renderCounterAmount() {
    this.counterAmountElement.setContent(this.counterAmount);
  }

  getSettings() {
    this.settings = getFromLs('settings') ?? {
      darkTheme: false,
    };
  }

  saveSettings() {
    saveToLs('settings', this.settings);
  }

  createCounter() {
    this.wrapper = new BaseComponent({
      parentNode: this,
      className: 'counter-wrapper',
    });
    this.increaseButton = new IncreaseButton(this.wrapper, { content: 'press me' });
    this.counterAmountElement = new BaseComponent({
      parentNode: this.wrapper,
      className: 'counter-amount',
      content: this.counterAmount,
    });
    this.changeThemeButton = new BaseComponent({
      parentNode: this.wrapper,
      className: 'change-theme-button',
      tag: 'button',
      content: 'dark theme',
    });
    this.changeThemeButton.addListener('click', () => {
      this.settings.darkTheme = !this.settings.darkTheme;
      this.emit('changeTheme', this.settings.darkTheme);//
    });
  }

  changeTheme(isDark) {
    this.parentNode.toggleClass('theme-dark', isDark);
    this.settings.darkTheme = isDark;
    this.saveSettings();
  }

  init() {
    this.createCounter();
  }
}
