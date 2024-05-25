const apiUrl = "https://example.com/api";
const batchSize = 20;
const totalCalls = 1000;

async function makeCalls() {
  for (let i = 0; i < totalCalls; i += batchSize) {
    const batch = Array.from(
      { length: batchSize },
      (_, index) => i + index + 1
    );
    const promises = batch.map((num) =>
      fetch(`${apiUrl}?param=${num}`).then((response) => response.json())
    );
    await Promise.all(promises);
  }
}

makeCalls();
