export default `
type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
}

type Car {
    id: Int!
    model: String!
    color: String!
    engine: Float!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allUsers: [User!]!
    getUser(id: Int!):  User
    
    allCars: [Car!]!
    getCar(id:Int!): Car
}

type Mutation {
    createUser(firstName: String!, lastName:  String!, email: String!, passwordHash: String!): User
    updateUser(id: Int!, firstName: String, lastName: String, email: String, passwordHash: String): [Int!]
    deleteUser(id: Int!): Int!
    
    createCar(model: String!, color: String!, engine: Float!): Car
    updateCar(id: Int!, model: String, color: String, engine: Float): [Int!]
    deleteCar(id:Int!): Int!
}
`
