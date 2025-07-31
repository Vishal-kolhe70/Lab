function api1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("API 1 data");
        }, 1000);
    });
}

function api2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("API 2 data");
        }, 1000);
    });
}

function api3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("API 3 data");
        }, 1000);
    });
}

function fetchAPIs() {
    Promise.all([api1(), api2(), api3()])
        .then(results => {
            console.log("All API results:", results);
        })
        .catch(error => {
            console.error("Error fetching APIs:", error);
        });
}

fetchAPIs();
