export class Todo {

    private _completed: boolean;
    private  _editing: boolean;

    constructor(private _title: string) {
        this._completed = false;
        this._editing = false;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value.trim();
    }
    
    get editing(): boolean {
        return this._editing;
    }

    set editing(value: boolean) {
        this._editing = value;
    }

    get completed(): boolean {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}
