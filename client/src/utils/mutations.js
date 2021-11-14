import gql from 'graphql-tag';

export const lOGIN_USER = gql `
mutation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}`;

//need token to return auth
export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!){
    addUser(username: $username,password: $password, email: $email){
        user {
            _id
            username
            email
            bookCount
            savedBooks{
                authors
                bookId
                image
                link
                title
                description
            }
        }
        token
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!){
    saveBook(input: $input){
        _id
        username
        email
        bookCount
        savedBooks{
            authors
            bookId
            image
            link
            description
            title
        }
    }
}`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!){
    removeBook(bookId:$bookId){
        _id
        username
        email
        bookCount
        savedBooks{
            authors
            bookId
            image
            link
            title
            description
        }
    }
}`;

