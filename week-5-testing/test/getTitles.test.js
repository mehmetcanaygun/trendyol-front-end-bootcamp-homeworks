import { getTitles } from "../src/getTitles";
import { PostProvider } from "../src/post-provider";

jest.mock("../src/post-provider");

describe("Fetch Posts & Get Titles", () => {
  const postProvider = new PostProvider();

  it("should return user(s) with the most post number", async () => {
    postProvider.getPosts.mockImplementation(() => {
      return Promise.resolve([
        { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" },
        { userId: 1, id: 2, title: "Title 1.2", body: "Body 1.2" },
        { userId: 2, id: 3, title: "Title 2.1", body: "Body 2.1" },
        { userId: 2, id: 4, title: "Title 2.2", body: "Body 2.2" },
        { userId: 3, id: 5, title: "Title 3.1", body: "Body 3.1" },
        { userId: 3, id: 6, title: "Title 3.2", body: "Body 3.2" },
        { userId: 3, id: 7, title: "Title 3.3", body: "Body 3.3" },
      ]);
    });

    const posts = await postProvider.getPosts();

    const titles = getTitles(posts);

    expect(titles).toEqual(["Title 3.1", "Title 3.2", "Title 3.3"]);
  });

  it("should return 'null' if there are more than one users with the most post number", async () => {
    postProvider.getPosts.mockImplementation(() => {
      return Promise.resolve([
        { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" },
        { userId: 1, id: 2, title: "Title 1.2", body: "Body 1.2" },
        { userId: 2, id: 3, title: "Title 2.1", body: "Body 2.1" },
        { userId: 2, id: 4, title: "Title 2.2", body: "Body 2.2" },
        { userId: 3, id: 5, title: "Title 3.1", body: "Body 3.1" },
        { userId: 3, id: 6, title: "Title 3.2", body: "Body 3.2" },
      ]);
    });

    const posts = await postProvider.getPosts();

    const titles = getTitles(posts);

    expect(titles).toBe(null);
  });
});
