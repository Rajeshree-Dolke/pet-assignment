import { cleanup, render, screen } from "@testing-library/react";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { PetView } from "./PetView";

const mockPet = [
  {
    name: "Rocky",
    type: "Dog",
    breed: "Labrador",
    weight: "34",
    height: "3",
    id: 1,
  },
];

describe("Pets view tests", () => {
  enableFetchMocks();

  beforeEach(() => {
    cleanup();
    fetchMock.resetMocks();
  });

  test("renders truthy comp", () => {
    const { baseElement } = render(<PetView />);
    expect(baseElement).toBeTruthy();
  });

  test("whether table is visible", async () => {
    fetchMock.mockResponse([], { status: 200 });
    render(<PetView />);
    const text = await screen.findByText("Type");
    expect(text).toBeVisible();
  });

  test("whether data is visible", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPet), { status: 200 });
    render(<PetView />);
    const petName = await screen.findByText("Rocky");
    expect(petName).toBeVisible();
  });

  test("whether error is visible", async () => {
    fetchMock.mockResponse([], { status: 404 });
    render(<PetView />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
    const error = await screen.findByText("Not Found");
    expect(error).toBeVisible();
  });
});
