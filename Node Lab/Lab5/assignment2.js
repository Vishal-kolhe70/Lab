function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data fetched");
        }, 1000);
    });
}

function processUserData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data processed");
        }, 1000);
    });
}

function saveUserData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data saved");
        }, 1000);
    });
}

function executeWorkflow() {
    fetchUserData()
        .then(result1 => {
            console.log(result1);
            return processUserData(result1);
        })
        .then(result2 => {
            console.log(result2);
            return saveUserData(result2);
        })
        .then(result3 => {
            console.log(result3);
        })
        .catch(error => {
            console.error("Workflow error:", error);
        });
}

executeWorkflow();
