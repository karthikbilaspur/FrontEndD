// Namespaces with classes and interfaces
namespace Data {
  export interface User {
    id: number;
    name: string;
    email: string;
  }

  export class UserService {
    private users: User[] = [];

    addUser(user: User) {
      this.users.push(user);
    }

    getUser(id: number): User | undefined {
      return this.users.find(user => user.id === id);
    }
  }

  export namespace API {
    export function getUser(id: number): Promise<User> {
      // Simulate API call
      return Promise.resolve({
        id,
        name: 'John Doe',
        email: 'john@example.com',
      });
    }

    export function createUser(user: User): Promise<User> {
      // Simulate API call
      return Promise.resolve(user);
    }
  }
}

// Usage
const userService = new Data.UserService();
userService.addUser({
  id: 1,
  name: 'Jane Doe',
  email: 'jane@example.com',
});

Data.API.getUser(1).then(user => console.log(user));

// Aliases for convenience
import User = Data.User;
import API = Data.API;

const user: User = {
  id: 2,
  name: 'Bob Smith',
  email: 'bob@example.com',
};

API.createUser(user).then(createdUser => console.log(createdUser));