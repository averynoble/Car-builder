import { getTechnology, setTechnology } from "./database.js";

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    const listItems = technology.map(
        (technology) => {
            return `<li>
                <input type="radio" name="technology" value="${technology.id}" /> ${technology.tech} </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}