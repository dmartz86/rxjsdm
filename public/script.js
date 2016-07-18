const hs = new HandleSubcriber();
const source = Rx.Observable.create(hs.onCreate.bind(hs));
source.subscribe(hs.onNext, hs.onError, hs.onComplete);
//hs.startInterval(1000);
