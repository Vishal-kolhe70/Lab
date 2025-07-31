function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);

    setTimeout(() => {
        if (!url) {
            callback(new Error("URL is required"), null);
        } else {
            const response = {
                data: "Sample Data"
            };
            callback(null, response);
        }
    }, 2000);
}

fetchData('https://example.com', (err, res) => {
    if (err) {
        console.error('Fetch error:', err.message);
    } else {
        console.log('Fetched response:', res);
    }
});
