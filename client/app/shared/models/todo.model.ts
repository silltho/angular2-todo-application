export class Todo {

    constructor(todoInfo: any) {
        this._id = todoInfo._id;
        this.description = todoInfo.description;
        this.done = todoInfo.done;
        this.editing = todoInfo.editing;
    }

    _id: string;
    description: string;
    done: Boolean;
    editing: Boolean;
}
