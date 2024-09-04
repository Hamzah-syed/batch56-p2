import OrderButton from "./OrderButton"

interface IBook {
  id: number,
  name: string,
  type: string,
  available: boolean
}

async function Homepage() {

  let baseUrl = "https://simple-books-api.glitch.me"

  let res = await fetch(`${baseUrl}/books`)

  let books: IBook[] = await res.json()


  return (
    <div>
      <h1>Books</h1>
      <ul>
        {
          books.map((b) => {
            return (
              <li key={b.id} className="p-3 text-lg border" >
                {b.name}
                <OrderButton />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Homepage