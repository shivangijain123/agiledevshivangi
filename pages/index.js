import HelloProfessor from '../components/HelloProfessor';
import Head from 'next/head';  // <-- Import this.

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hello Professor</title>
                <meta name="description" content="A Playwright demo page." />
                {/* Add other meta tags or link tags as needed */}
            </Head>
            <center>
                <HelloProfessor />
            </center>
        </div>
    );
}
