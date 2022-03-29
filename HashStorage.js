export class HashStorage {
    constructor() {
        this.state = {}
    }

    addValue(key, value) {
        this.state[key] = value;
    }

    getValue(key) {
        return this.state[key]
    }

    deleteValue(key) {
        if (!(key in this.state)) {
            return false
        }
        return delete this.state[key]
    }

    getKeys([key]) {
        return Object.keys(this.state)
    }
}


