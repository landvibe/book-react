// 실습1: 코드 7-92
function myFunc() {
  import('./util').then(({ add }) =>
    import('lodash').then(({ default: _ }) =>
      console.log('value', _.fill([1, 2, 3], add(10, 20))),
    ),
  );
}
myFunc();

// 실습2: 코드 7-95
// async function myFunc() {
//   const [{ add }, { default: _ }] = await Promise.all([
//     import('./util'),
//     import('lodash'),
//   ]);
//   console.log('value', _.fill([1, 2, 3], add(30, 20)));
// }
// myFunc();

// 실습3: 코드 7-96
// async function myFunc() {
//   await new Promise(res => setTimeout(res, 1000));
//   const [{ add }, { default: _ }] = await Promise.all([
//     import(/* webpackPreload: true */ './util'),
//     import(/* webpackPrefetch: true */ 'lodash'),
//   ]);
//   console.log('value', _.fill([1, 2, 3], add(30, 20)));
// }
// myFunc();
