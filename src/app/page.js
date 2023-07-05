import "./globals.css"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Problem solving</title>
      </Head>
      <main>
        <h1>All project pages</h1>
        <br />
        <br />
        <h3>Question 1:</h3>
        <Link
          href="/FormTest"
          className="Link2"
          style={{ color: "black", fontSize: "20px" }}
        >
          Form test
        </Link>
        <br />
        <br />
        <br />
        <h3>Question 2:</h3>
        <Link
          href="/ApiTest"
          className="Link1"
          style={{ color: "black", fontSize: "20px" }}
        >
          Api test
        </Link>
      </main>
    </>
  )
}
