function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

function displayData() {
    fetchData()
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

displayData();
