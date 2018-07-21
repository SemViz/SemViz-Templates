//import Navigo from 'navigo'

export default class SemVizBaseTemplate extends HTMLElement {
  constructor() {
    super();
    this.subscriptions = [];
  }

  setChannel(channel) {
    this.channel = channel;
    this.subscriptions.push(channel.subscribe("form", (data, envelope) => {
      this.shadowRoot.querySelector('.filter').classList.add('hide');
      this.shadowRoot.querySelector('.visualisation').classList.add('hide');
      this.shadowRoot.querySelector('.detail').classList.remove('hide');
      //this.router.navigate('form');
    }));
    this.subscriptions.push(channel.subscribe("search", (data, envelope) => {
      this.shadowRoot.querySelector('.filter').classList.remove('hide');
      this.shadowRoot.querySelector('.visualisation').classList.remove('hide');
      this.shadowRoot.querySelector('.detail').classList.add('hide');
      //this.router.navigate('global');
    }));
  }

  connectedCallback() {
    // var root = null;
    // var useHash = true; // Defaults to: false
    // var hash = '#'; // Defaults to: '#'
    // this.router = new Navigo(root, useHash, hash);
    // this.router
    //   .on('global*', (params, query)=>{
    //     this.shadowRoot.querySelector('.filter').classList.remove('hide');
    //     this.shadowRoot.querySelector('.visualisation').classList.remove('hide');
    //     this.shadowRoot.querySelector('.detail').classList.add('hide');
    //   })
    //   .on('form*', (params, query)=> {
    //     this.shadowRoot.querySelector('.filter').classList.add('hide');
    //     this.shadowRoot.querySelector('.visualisation').classList.add('hide');
    //     this.shadowRoot.querySelector('.detail').classList.remove('hide');
    //   })
    //   .resolve();
    // this.shadowRoot.querySelector('.detail').classList.add('hide');
  }
}
