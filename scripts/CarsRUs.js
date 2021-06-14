import { addCustomOrder } from "./database.js"
import { InteriorStyles } from "./Interior.js"
import { Orders } from "./Orders.js"
import { PaintColor } from "./PaintColor.js"
import { Technologies } from "./Technology.js"
import { Wheels } from "./Wheels.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const CarsRUs = () => {
    return `
        <h1>CarsRUs</h1>
        
        <article class="choices">
            <section class="choices--color options">
                <h2>Paint Colors</h2>
                    ${PaintColor()}
            </section>
            <section class="choices--interior options">
                <h2>Interior Options</h2>
                    ${InteriorStyles()}
            </section>
            <section class="choices--technology options">
                <h2>Technology Options</h2>
                    ${Technologies()}
            </section>
            <section class="choices--wheel options">
                <h2>Wheel Options</h2>
                    ${Wheels()}
            </section>
        </article>
        
        <article>
            <button id="orderButton">Create Dream Car</button>
        </article>
        
        <article class="customOrders">
            <h2>Custom Car Builds</h2>
                ${Orders()}
        </article>
        `
}






