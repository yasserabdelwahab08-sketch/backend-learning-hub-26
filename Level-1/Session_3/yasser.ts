// Part 1::


// function cookRice(): void{
//     console.log("Rice starting...");

//     for (let index = 0; index < 1000000; index++) {
//     }
//     console.log("Rice Done!");
// }

// function cookRiceAsync(): void{
//     console.log("Rice starting...");

// setTimeout(() => {

// }, 5000);
//     console.log("Rice Done!");
// }

// cookRice();
// console.log("Am Farouk yells at the next customer");
// cookRiceAsync();
// console.log("Am Farouk yells at the next customer")

// ******

// part2::

function orderRice(callback: (message: string) => void): void {
    console.log("calling the supplier");
    setTimeout(() => {
        callback("rice delivered");
    }, 1000);
}

// orderRice((message) => {
//     console.log(message);
// });
// console.log("Am Farouk keeps serving customers while waiting");



//  **** 

//part 3:

let koshari = new Promise<string>((resolve, reject) => {

    setTimeout(() => {
        resolve("Order ready!");
    }, 2000);
});

// koshari.then((res) => {
// console.log(res)
// }).catch((res) => {
// console.log(res)
// });

let sauceOrder = new Promise<string>((resolve, reject) => {

    setTimeout(() => {
        reject("We're out of da2a!");
    }, 2000);
});

// sauceOrder.then((res) => {
// console.log(res);
// }).catch((res) => {
// console.log(res);

// });



//  ***** 

//part 4:

function createPromise(res: string = ""): Promise<string> {
    let pms = new Promise<string>((resolve, reject) => {

        setTimeout(() => {
            resolve(res);
        }, 2000);
    });
    return pms;
}
// function getRice(): Promise<string> { return createPromise("Rice ready"); }
// function getChickpeas(rice: string): Promise<string> { return createPromise("Chickpeas ready, rice was: " + rice); }
// function getSauce(chickpeas: string): Promise<string> { return createPromise("Sauce added, previous: " + chickpeas); }


// getRice()
//     .then((rice) => { return getChickpeas(rice) })
//     .then((chickpeas) => { return getSauce(chickpeas); })
//     .catch(() => {
//         console.log("error!!");
//     });

//  ****

//part 5:

function getRice(): Promise<string> { return createPromise("Rice ready"); }
function getChickpeas(rice: string): Promise<string> { return createPromise("Chickpeas ready, rice was: " + rice); }
function getSauce(chickpeas: string): Promise<string> { return createPromise("Sauce added, previous: " + chickpeas); }


async function makeKoshari() {
    try {
        let rice = await getRice();
        let chickpease = await getChickpeas(rice);
        let sauce = await getSauce(chickpease);
        console.log(sauce);
    } catch {
        console.log("error!");
    }
}