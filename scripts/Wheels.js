import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"

    const listItems = wheels.map(
        (wheel) => {
            return `<li>
                <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.rims} </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}