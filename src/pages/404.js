import Link from "next/link"
import Head from "next/head"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div>
        <h1>Ops, não conseguimos encontrar essa página!</h1>
        <h3>Clique no botão abaixo para ser direcionado à página inicial</h3>
      </div>
      <div>
        <br />
        <Link href="/" style={{ fontWeight: "bold", fontSize: "20px" }}>
          Back to home
        </Link>
      </div>
    </>
  )
}
