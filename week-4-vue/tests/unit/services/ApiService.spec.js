import ApiService from "../../../src/services/ApiService";
import axios from "axios";

jest.mock("axios");

describe("Get Starships Service", () => {
  const apiService = new ApiService();

  it("should return starships", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          count: 1,
          next: "next_page",
          previous: null,
          results: [
            { name: "CR90 Corvette", model: "CR90 Corvette" },
            {
              name: "Star Destroyer",
              model: "Imperial I-class Star Destroyer",
            },
          ],
        },
      });
    });

    const starships = await apiService.getStarships();

    expect(starships).toEqual([
      [
        { name: "CR90 Corvette", model: "CR90 Corvette" },
        { name: "Star Destroyer", model: "Imperial I-class Star Destroyer" },
      ],
      { count: 1, next: "next_page", previous: null },
    ]);
  });

  it("should return [] when there's an error", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject({
        data: [],
      });
    });

    const starships = await apiService.getStarships();

    expect(starships).toEqual([]);
  });
});

describe("Get Single Starship Service", () => {
  const apiService = new ApiService();

  it("should return starship with the given id", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: { name: "CR90 Corvette", model: "CR90 Corvette" },
      });
    });

    const starship = await apiService.getStarship(0);

    expect(starship).toEqual({ name: "CR90 Corvette", model: "CR90 Corvette" });
  });

  it("should return [] when there's an error", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject({
        data: [],
      });
    });

    const starships = await apiService.getStarship();

    expect(starships).toEqual([]);
  });
});

describe("Get Searched Starship Service", () => {
  const apiService = new ApiService();

  it("should return starships with the searched term in their name or model", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          count: 1,
          next: "next_page",
          previous: null,
          results: [{ name: "CR90 Corvette", model: "CR90 Corvette" }],
        },
      });
    });

    const starships = await apiService.searchStarship("cr90");

    expect(starships).toEqual([
      [{ name: "CR90 Corvette", model: "CR90 Corvette" }],
      { count: 1, next: "next_page", previous: null },
    ]);
  });

  it("should return [] when there's an error", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject({
        data: [],
      });
    });

    const starships = await apiService.searchStarship();

    expect(starships).toEqual([]);
  });
});

describe("Get Next or Prev Page's Starships Service", () => {
  const apiService = new ApiService();

  it("should fetch the next or previous page", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          count: 1,
          next: "next_page",
          previous: null,
          results: [
            { name: "CR90 Corvette", model: "CR90 Corvette" },
            {
              name: "Star Destroyer",
              model: "Imperial I-class Star Destroyer",
            },
          ],
        },
      });
    });

    const starships = await apiService.getPage();

    expect(starships).toEqual([
      [
        { name: "CR90 Corvette", model: "CR90 Corvette" },
        { name: "Star Destroyer", model: "Imperial I-class Star Destroyer" },
      ],
      { count: 1, next: "next_page", previous: null },
    ]);
  });

  it("should return [] when there's an error", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject({
        data: [],
      });
    });

    const starships = await apiService.getPage();

    expect(starships).toEqual([]);
  });
});
