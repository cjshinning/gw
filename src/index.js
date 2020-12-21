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

async function getComponent(){
    var element = document.createElement('div');

    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
})