import Link from "next/link"
import Head from "next/head"
import { Container, ContainerContent, Result } from "./style"
import { useState } from "react"

export default function FormTest() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [Renderdata, setRenderData] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setRenderData(true)
  }
  return (
    <Container>
      <ContainerContent>
        <Head>
          <title>FormTest</title>
        </Head>
        <h1>FormTest</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Mensagem:
            <textarea
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              required
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
        <Link href="/" style={{ color: "black", fontSize: "20px" }}>
          Back to home
        </Link>
      </ContainerContent>
      <Result>
        {Renderdata && (
          <div>
            <h1>Dados do Formulário:</h1>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Nome: {nome}</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Email: {email}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Mensagem: {mensagem}
            </p>
          </div>
        )}
      </Result>
    </Container>
  )
}
