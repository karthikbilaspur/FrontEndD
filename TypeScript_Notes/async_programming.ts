// Async programming example
interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  userId: number;
}

// Mock API calls
const fetchUser = async (id: number): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id, name: `User ${id}` };
};

const fetchPosts = async (userId: number): Promise<Post[]> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return [
    { id: 1, title: 'Post 1', userId },
    { id: 2, title: 'Post 2', userId },
  ];
};

// Async/Await example
async function getUserWithPosts(userId: number) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(userId);
    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Promise.all example
async function getMultipleUsersWithPosts(userIds: number[]) {
  const users = await Promise.all(userIds.map(fetchUser));
  const posts = await Promise.all(userIds.map(fetchPosts));
  return users.map((user, index) => ({ user, posts: posts[index] }));
}

// Usage
async function main() {
  // Sequential requests
  const result1 = await getUserWithPosts(1);
  console.log('User with posts:', result1);

  // Concurrent requests
  const result2 = await getMultipleUsersWithPosts([2, 3]);
  console.log('Multiple users with posts:', result2);
}

main();