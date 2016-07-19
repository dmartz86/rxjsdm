class HandleSubcriber {

  constructor() { }

  onCreate(observer) {
    this.flag = false;
    this.observer = observer;
  }

  onNext(value) {
    console.log(`Next: ${value}`);
    if (!this.filter) {
      HandleSubcriber.createTemplate(value, value);
    }
  }

  onError(error) {
    console.log(error);
  }

  onComplete() {
    console.log(`On Done: ${value}`);
  }

  startInterval(time) {
    setInterval(() => {
      this.observer.next(new Date().getTime());
    }, time);
  }

  stop() {
    this.filter = false;
  }

  static createTemplate(text, paragrap) {
    const target = document.getElementById('list');
    const item = document.createElement('div');
    const profile = document.createElement('div');
    const image = document.createElement('img');
    const content = document.createElement('div');
    const title = document.createElement('h4');
    const desc = document.createElement('p');

    item.classList = 'list-group col-md-12';
    profile.className = 'col-md-3';
    image.src = 'img/001.png';
    image.classList = 'img-responsive img-circle';
    content.className = 'col-md-9';
    title.innerText = text;
    desc.innerText = paragrap;
    profile.appendChild(image);
    content.appendChild(title);
    content.appendChild(desc);

    if (this.flag) {
      item.appendChild(profile);
      item.appendChild(content);
    } else {
      item.appendChild(content);
      item.appendChild(profile);
    }

    target.appendChild(item);
    target.scrollTop = target.scrollHeight;
    this.flag = !this.flag;
  }

}