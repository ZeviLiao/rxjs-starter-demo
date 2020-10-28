import { defer, Observable, of, Subject } from "rxjs";

function observer(name) {
    return {
        next: (value) => console.log(`observer ${name}: ${value}`),
        complete: () => console.log(`observer ${name}: complete`)
    };
}

export const rxTest = () => {
    const source = defer(() => of(Math.floor(Math.random() * 100)));

    const subject = new Subject();
    subject.subscribe(observer("a"));
    subject.subscribe(observer("b"));
    source.subscribe(subject);
}
