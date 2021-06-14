import { getPaintColor, setPaintColor } from "./database.js";

const paintColor = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const PaintColor = () => {
    let html = "<ul>"

    const listPaints = paintColor.map(
        (color) => {
            return `<li>
                <input type="radio" name="paint" value="${color.id}" /> ${color.color}
                </li>`
        })

    html += listPaints.join("")
    html += "</ul>"
    return html
}