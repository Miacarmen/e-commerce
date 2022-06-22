import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
    me {
      username
      email
    }
  }
`;

// query ALL products
export const QUERY_PRODUCTS = gql`
  query products() {
    
    }
  }
`;

// query products based on category

// query SINGLE product
