import Link from 'next/link'
import Header from '../components/header'
import cowsay from 'cowsay-browser'

export default () => (
  <main>
    <Header />
    <pre>
      { cowsay.say({ text: 'Yehaw cowboy' }) }
    </pre>
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
  </main>
)
