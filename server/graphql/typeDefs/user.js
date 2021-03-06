const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    imageURL: String
    points: Int
    verified: Boolean
    verificationOTP: OTP
    forgotPassOTP: OTP
    solvedProblems: [String]
  }
  type AuthData {
    user: User!
    token: String!
    tokenExpiration: Int!
  }
  type OTP {
    code: Int
    count: Int
    expTime: Int
  }
  type Query {
    getUserById(id: ID!): User!
  }
  type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
      image: Upload
    ): AuthData!
    updateUser(id: ID!, username: String, email: String, image: Upload): User!
    updatePassword(id: ID!, oldPassword: String!, newPassword: String!): User!
    login(username: String, password: String!): AuthData!
    sendForgotPassOTP(username: String!, email: String!): User!
    sendVerificationOTP(id: ID!): User!
    forgotPassword(
      username: String!
      email: String!
      OTP: Int!
      newPassword: String!
    ): AuthData!
    verifyAccount(id: ID!, OTP: Int!): User!
    deleteUser(id: ID!): User
    googleLogin(id_token: String!): AuthData!
    githubLogin(code: String!): AuthData!
    makeSubmission(id: ID!, problemID: ID!, submission: String): User!
    logOut(id: ID!): String!
  }
`;
