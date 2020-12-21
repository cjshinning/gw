// import _ from 'lodash';
// import {cube} from './math.js';

// if(process.env.NODE_ENV !== 'production'){
//     console.log('Looks like we are in development mode!');
// }

// function component(){
//     var element = document.createElement('pre');

//     element.innerHTML = [
//         'Hello webpack!',
//         '5 cubed is equal to ' + cube(5)
//     ].join('\n\n');

//     return element;
// }

// document.body.appendChild(component());

// function getComponent(){
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');

//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//         return element;
//     }).catch(error => 'An error occurred while loading the component');
// }

import _ from 'lodash';

function component(){
    var element = document.createElement('div');

    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console';

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;

        print();
    })

    return element;
}

document.body.appendChild(component());