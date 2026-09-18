const http = require("http");

const options = {
    hostname: "localhost",
    port: 3000,
    path: "/status",
    method: "GET"
};

const req = http.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        if (res.statusCode === 200) {
            console.log("Test Passed: /status endpoint is working");
            process.exit(0);
        } else {
            console.error("Test Failed: Unexpected status code");
            process.exit(1);
        }
    });
});

req.on("error", (error) => {
    console.error("Test Failed:", error.message);
    process.exit(1);
});

req.end();