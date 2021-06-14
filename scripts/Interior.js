import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const InteriorStyles = () => {
    let html = "<ul>"

    const listInteriors = interiors.map(
        (interior) => {
            return `<li>
                <input type="radio" name="interior" value="${interior.id}" /> ${interior.inside}</li>`
        })

    html += listInteriors.join("")
    html += "</ul>"
    return html
}