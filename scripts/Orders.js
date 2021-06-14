import { getInterior, getWheels, getPaintColor, getTechnology, getOrders } from "./database.js";

const buildOrderListItem = (order) => {

    let totalCost = 0

    const wheels = getWheels()
    const foundWheel = wheels.find( (wheel) => {
        return wheel.id === order.wheelId
    })

    totalCost += foundWheel.price

    const paintColor = getPaintColor()
    const foundPaint = paintColor.find( (paintColor) => {
        return paintColor.id === order.paintColorId
    })

    totalCost += foundPaint.price

    const interior = getInterior()
    const foundInterior = interior.find( (interior) => {
        return interior.id === order.interiorId
    })

    totalCost += foundInterior.price

    const technology = getTechnology()
    const foundTechnology = technology.find( (technology) => {
        return technology.id === order.technologyId
    })

    totalCost += foundTechnology.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order#: ${order.id} costs ${costString} </li>`

}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"
    return html
}