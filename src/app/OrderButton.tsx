"use client"

import { placeOrder } from "./utils"

function OrderButton() {

    let onOrderPlace = async () => {
        // Use server function
        await placeOrder()
    }

    return (
        <button onClick={onOrderPlace} className="mx-4 p-2 bg-blue-500">
            Order
        </button>
    )
}

export default OrderButton