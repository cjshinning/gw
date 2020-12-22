function component(){
    var element = document.createElement('div');

    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        })
    })
}