import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Domain For Sale!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome! Domain For Sale Now." />
        <p className="description">
          Messagne us with <a href= "mailto:contact@rule.ac.nz"> 
    Send Email 
</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
