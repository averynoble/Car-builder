const database = {

    orderBuilder:{},

    paintColor: [
        { id: 1, color: "Silver", price: 200 },
        { id: 2, color: "Midnight Blue", price: 350 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 300 }
    ],
    interior: [
        { id: 1, inside: "Beige Fabric", price: 100 },
        { id: 2, inside: "Charcoal Fabric", price: 200 },
        { id: 3, inside: "White Leather", price: 1000 },
        { id: 4, inside: "Black Leather", price: 500 }
    ],
    technology: [
        { id: 1, tech: "Basic Package (basic sound system)", price: 100 },
        { id: 2, tech: "Navigation Package (includes intergrated navigation controls)", price: 250 },
        { id: 3, tech: "Visibility Package (includes side and rear cameras)", price: 500 },
        { id: 4, tech: "Ultra Package (includes navigation and visibility packages)", price: 700 }
    ],
    wheels: [
        { id: 1, rims: "17-inch Pair Radial", price: 300 },
        { id: 2, rims: "17-inch Pair Radial Black", price: 300 },
        { id: 3, rims: "18-inch Pair Spoke Silver", price: 450 },
        { id: 4, rims: "18-inch Pair Spoke Black", price: 500 }
    ],
    customOrders: [
        {id: 1, wheelId: 1, interiorId: 2, paintColorId: 3, technologyId: 3, timestamp: 1614659931693 }
    ]
}

export const getPaintColor = () => {
    return database.paintColor.map(paintColor => ({...paintColor}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}

export const addCustomOrder = () => {

    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}