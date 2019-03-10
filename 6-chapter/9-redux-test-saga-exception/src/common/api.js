export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        console.log('suc');
        resolve();
      } else {
        console.log('fail');
        reject('callApiLike 실패');
      }
    }, 1000);
  });
}
