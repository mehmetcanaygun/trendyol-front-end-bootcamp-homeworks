import { PostProvider } from "../src/post-provider";

describe("Post Provider", () => {
  const postProvider = new PostProvider();

  it("should fetch posts", async () => {
    const posts = await postProvider.getPosts();

    expect(posts.length).toBeGreaterThan(0);
  });
});
