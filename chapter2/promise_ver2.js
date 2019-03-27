const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        // console.log("this message 1 line");
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        // console.log("this message 2 line");
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        return new Promise((resolve, reject) => {
            console.log(message3);
        });
    })
    .catch((error) => {
        console.error(error);
    });