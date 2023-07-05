import Link from "next/link"
import Head from "next/head"
import { useState, useEffect } from "react"

export default function ApiTest() {
  const [usersData, setUsersData] = useState([])

  const getUsersId = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    const usersData = await Promise.all([
      getUsersId(1),
      getUsersId(2),
      getUsersId(3),
    ])

    setUsersData(usersData)
  }

  return (
    <>
      <Head>
        <title>ApiTest</title>
      </Head>
      <main>
        <h1>Resultado da chamada</h1>
        <br />
        {usersData.map((user, index) => (
          <div key={index}>
            <h2>Usuário {index + 1}</h2>
            <p>ID: {user.id}</p>
            <p>Título: {user.title}</p>
            <p>Conteúdo: {user.body}</p>
          </div>
        ))}
        <div>
          <br />
          <br />
          <br />
          <br />
          <Link href="/" style={{ color: "black", fontSize: "20px" }}>
            Back to home
          </Link>
        </div>
      </main>
    </>
  )
}
