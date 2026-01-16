// Error Handling in TypeScript

// Basic try-catch
try {
  // Code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error('Error:', error.message);
}

// Typed catch
try {
  // Code that might throw an error
  throw new Error('Something went wrong');
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}

// Custom error classes
class CustomError extends Error {
  constructor(public code: string, message: string) {
    super(message);
  }
}

try {
  throw new CustomError('CUSTOM_ERROR', 'Something went wrong');
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`Error ${error.code}:`, error.message);
  }
}

// Error handling in async code
async function fetchData() {
  try {
    const response = await fetch('https://example.com/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

// Using Error Handling with Promises
fetch('https://example.com/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });

// Best practices
// 1. Use specific error types
// 2. Handle errors as close to the source as possible
// 3. Log errors for debugging and monitoring
// 4. Provide user-friendly error messages

// Example with generics and async/await
async function safeFetch<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

// Usage
interface User {
  id: number;
  name: string;
}

async function main() {
  const user = await safeFetch<User>('https://example.com/api/user');
  if (user) {
    console.log(user.name);
  }
}

main();