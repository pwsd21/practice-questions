const apiUrl = "https://example.com/api";
const batchSize = 20;
const totalCalls = 1000;

async function makeCalls() {
  for (let i = 0; i < totalCalls; i += batchSize) {
    // Generate batch of numbers to append to the apiUrl
    const batch = Array.from(
      { length: batchSize },
      (_, index) => i + index + 1
    );

    // Create an array of promises for each API call in the batch
    const promises = batch.map((num) =>
      fetch(`${apiUrl}?param=${num}`).then((response) => response.json())
    );

    // Await all promises in the batch to complete before proceeding
    await Promise.all(promises);
  }
}

makeCalls();
