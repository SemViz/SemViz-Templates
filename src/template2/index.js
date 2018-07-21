export default class SemVizBaseTemplate extends HTMLElement {
  constructor() {
    super();
    this.subscriptions = [];
  }

  setChannel(channel) {
    this.channel = channel;
    this.subscriptions.push(channel.subscribe("route/form", (data, envelope) => {
      this.shadowRoot.querySelector('.filter').classList.add('hide');
      this.shadowRoot.querySelector('.visualisation').classList.add('hide');
      this.shadowRoot.querySelector('.detail').classList.remove('hide');
    }));
    this.subscriptions.push(channel.subscribe("route/global", (data, envelope) => {
      this.shadowRoot.querySelector('.filter').classList.remove('hide');
      this.shadowRoot.querySelector('.visualisation').classList.remove('hide');
      this.shadowRoot.querySelector('.detail').classList.add('hide');
    }));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.detail').classList.add('hide');
  }
}
