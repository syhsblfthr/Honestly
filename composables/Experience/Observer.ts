function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    }
}

let observer: (IntersectionObserver | null) = null;

export default function useObserver(root?: Element) {
    if (!observer) {
        observer = new IntersectionObserver(callback, {
            root: root,
            threshold: 1
        });
    }

    return observer;
}