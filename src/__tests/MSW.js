// src/mocks/server.js
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  // Define mock request handlers
  rest.get("/api/items", (req, res, ctx) => {
    return res(ctx.json({ items: [{ id: "1", name: "Mocked Item" }] }));
  }),
  rest.post("/api/items", (req, res, ctx) => {
    // Handle POST request
    return res(ctx.status(201), ctx.json({ id: "2", ...req.body }));
  }),
  rest.put("/api/items/:id", (req, res, ctx) => {
    // Handle PUT request
    const { id } = req.params;
    return res(ctx.json({ id, ...req.body }));
  }),
  rest.delete("/api/items/:id", (req, res, ctx) => {
    // Handle DELETE request
    const { id } = req.params;
    return res(ctx.status(204));
  })
);

export { server };

// src/setupTests.js
import { server } from "./mocks/server.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Example test using Jest and React Testing Library
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App"; // Replace with your component

describe("CRUD operations", () => {
  it("fetches and displays items", async () => {
    render(<App />);

    // Mock GET request
    const mockedResponse = [{ id: "1", name: "Mocked Item" }];
    server.use(
      rest.get("/api/items", (req, res, ctx) => {
        return res(ctx.json(mockedResponse));
      })
    );

    // Wait for data to load
    await waitFor(() => {
      const itemElement = screen.getByText("Mocked Item");
      expect(itemElement).toBeInTheDocument();
    });
  });

  it("adds an item", async () => {
    // Mock POST request
    server.use(
      rest.post("/api/items", (req, res, ctx) => {
        const newItem = { id: "2", name: "New Item" };
        return res(ctx.status(201), ctx.json(newItem));
      })
    );

    // Test your application's add item functionality
    // Ensure it sends a POST request to /api/items and handles the response correctly
  });

  // Similarly, test update (PUT) and delete (DELETE) operations
});
