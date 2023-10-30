let a = 0;


const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 200)
})


async function main() {
    const response = await request;
    a = response;
    console.log(a);
}

main();
