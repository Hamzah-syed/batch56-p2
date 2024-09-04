"use server"
export let placeOrder = async () => {
    let orderdata = {
        bookId: 1,
        customerName: "hamzah",
    }
    // Order Place Api Call
    let res = await fetch("https://simple-books-api.glitch.me/orders", {
        method: "POST",
        body: JSON.stringify(orderdata),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer c3e35b6a9376680b271fb02bf000f6556084d3ef2cdeeeb06e2b295d8ab62cc4`
        }
    })
    let data = await res.json()
    console.log(data)
}