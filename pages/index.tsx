import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="mb-5">
      <Head>
        <title>Next Theme</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lorem, ipsum.</h1>
      <h2>Lorem, ipsum.</h2>
      <h3>Lorem, ipsum.</h3>
      <h4>Lorem, ipsum.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero!
      </p>
      <a href="#">Link</a>

      <div className="container">
        <span>Text with container</span>

        <div className='card mt-2 mb-2'>
          <div className="card-title">
            <h2>This is a card example.</h2>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero!
            </p>
          </div>
          <div className="card-footer pb-1">
            <a href="#" className='btn btn-primary'>Link</a>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h2 className='text-thing'>Code example</h2>
        <pre className='mt-1'>
          <code className="html">
            {`<body>
    <h1>Hello World</h1>
</body>`}
          </code>
        </pre>

        <pre className='mt-1'>
          <code className="js">
            {`function helloWorld() {
    console.log('Hello World');
}`}
          </code>
        </pre>

        <pre className='mt-1 mb-5'>
          <code className="language-css">
            {`body {
          color: #fff;
          background-color: #000;
}`}
          </code>
        </pre>
      </div>
      <div className="container-soft">
        <h2>This is a container soft</h2>
        <div className="btn-group">
          <button className="btn btn-primary">This is a button</button>
          <button className="btn btn-warning">This is a button</button>
          <button className="btn btn-danger">This is a button</button>
        </div>
        <a href="#" className="btn btn-secondary mt-1">
          This is a link
        </a>
      </div>

      
      <div className="container-soft bg-primary color-black p-1 mt-1">
        <h2>This is a container soft</h2>
        <p className="color-white">You can use margins and paddings. Also you can use customs colors</p>
      </div>

    </div>
  );
}

export default Home
