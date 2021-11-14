import gql from 'graphql-tag';

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
      user {
        _id
        username
      }
      
    }
  }
`;

//need token to return auth
export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!){
    addUser(username: $username,password: $password, email: $email){
        token
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
    }
}`;

//saved the user input of type savedBook with the book info to current user
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

//remove book by its id and update user's savedbooks arr
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

