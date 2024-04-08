// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

// Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Task 04: Chaining Async/Await
async function chainedAsyncFunctions() {
    async function firstFunction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('First function executed');
    }

    async function secondFunction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Second function executed');
    }

    async function thirdFunction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Third function executed');
    }

    await firstFunction();
    await secondFunction();
    await thirdFunction();
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
    ]);
    
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log(data1, data2);
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    console.log(data);
}

// Example usage
iterateWithAsyncAwait(['A', 'B', 'C']);
awaitCall();
chainedAsyncFunctions();
concurrentRequests();
parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);
