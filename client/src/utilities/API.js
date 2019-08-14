import axios from "axios"

export default {
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },
    getBooks: function () {
        return axios.get("../routes/api/books");
    },
    getBook: function (id) {
        return axios.get("../routes/api/books/" + id);
    },
    saveBook: function (savedBooks) {
        return axios.post("../routes/api/books", savedBooks);
    },
    deleteBook: function (id) {
        return axios.delete("../routes/api/books/" + id);
    }

}