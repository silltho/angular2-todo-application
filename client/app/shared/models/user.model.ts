import { Todo } from './todo.model';

export class User {

    constructor(userInfo: any){
        this.username = userInfo.username;
        this.password = userInfo.password;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
        this.email = userInfo.email;
        this.todos = [];
        this.extractTodos(userInfo);
    }

    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    todos: Todo[];

    private extractTodos(userInfo: any) {
        if(userInfo.todos instanceof Array){
            for(let i = 0; i < userInfo.todos.length; i++){
                this.todos.push(new Todo(userInfo.todos[i]));
            }
        }
    }
}