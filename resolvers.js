export default {
    Query: {
        allUsers: (parent, args, {models}) => models.User.findAll(),
        getUser: (parent, {id}, {models}) => models.User.findOne({where: {id}}),

        allCars: (parent, args, {models}) => models.Car.findAll(),
        getCar: (parent, {id}, {models}) => models.Car.findOne({where: {id}})
    },

    Mutation: {
        createUser: (parent, {firstName, lastName, email, passwordHash}, {models}) => models.User.create({
            firstName,
            lastName,
            email,
            passwordHash
        }),
        updateUser: (parent, {id, firstName, lastName, email}, {models}) => models.User.update({
            firstName,
            lastName,
            email
        }, {where: {id}}),
        deleteUser: (parent, {id}, {models}) => models.User.destroy({where: {id}}),

        createCar: (parent, {model, color, engine}, {models}) => models.Car.create({
            model,
            color,
            engine
        }),
        updateCar: (parent, {id, model, color, engine}, {models}) => models.Car.update({
            model,
            color,
            engine
        }, {where: {id}}),
        deleteCar: (parent, {id}, {models}) => models.Car.destroy({where: {id}})
    }
}
