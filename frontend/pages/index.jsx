import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold my-4">Welcome to Next.js App</h1>
        {/* Add your components and content here */}
      </main>

      <footer className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} JP Mitra</p>
      </footer>
    </div>
  );
}
