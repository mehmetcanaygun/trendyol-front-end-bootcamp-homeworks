export const getTitles = (posts) => {
  const mostPosts = [];
  // { userId: 0, amount: 5 }, { userId: 1, amount: 4 }, ...
  let max = 0;
  let userTitles = [];

  // Fill mostPosts array
  posts.forEach((post) => {
    const filterResult = mostPosts.filter(
      (item) => item.userId === post.userId
    );

    if (filterResult.length > 0) {
      const curr = filterResult[0];
      curr.amount = curr.amount + 1;
    } else {
      const newObj = { userId: post.userId, amount: 1 };
      mostPosts.push(newObj);
    }
  });

  // Set max value
  mostPosts.forEach((item) =>
    item.amount > max ? (max = item.amount) : (max = max)
  );

  // Get users with the most posts
  const users = mostPosts.filter((item) => item.amount === max);

  // Check if there's more than one user and return null if so
  if (users.length > 1) {
    return null;
  }

  // Put all the titles belong to the user in an array and return it
  posts.forEach(
    (post) => post.userId === users[0].userId && userTitles.push(post.title)
  );

  return userTitles;
};
