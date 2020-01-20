class API {
    constructor(baseRequestURL, devName) {
        this.sort_field = (param = 'id') => {
            return `&sort_field=${param}`
        }
        this.sort_direction = (param = 'asc') => {
            return `&sort_direction=${param}`
        }
        this.page = (param = 1) => {
            return `${baseRequestURL}?developer=${devName}&page=${param}`
        }
        this.login = () => {
            return `${baseRequestURL}login?developer=${devName}`
        }
        this.edit = (id) => {
            return `${baseRequestURL}edit/${id}?developer=${devName}`
        }
        this.create = () => {
            return `${baseRequestURL}create?developer=${devName}`
        }
    }
}
export const uxcandyAPI = new API('https://uxcandy.com/~shapoval/test-task-backend/v2/', 'Anton-Petrenko');