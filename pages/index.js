// Import the Head component from Next.js for managing document head elements
import Head from 'next/head';
// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';
// Import the Layout component and siteTitle constant from the layout file
import Layout, { siteTitle } from '../components/layout';
// Import CSS module styles for utility classes
import utilStyles from '../styles/utils.module.css';

// Define and export the Home component as the default export
export default function Home() {
  // Return JSX that represents the component's UI
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className="postborder">
          <h4>Bio</h4>
          <p> 
              Hello, Im <strong>Sho Katsuki</strong>. Im originally from Japan and then moved to California in 2017. Im currently attending Santa Rosa 
              Junior College for my full-stack web development certificate.
          </p>
          <h4>
              Things I like
          </h4>
          <ul>
              <li>
                Basketball
              </li>
              <li>
                Coding
              </li>
              <li>
                Video games
              </li>
              <li>
                Music
              </li>
              <li>
                Good food
              </li>
          </ul>


        </div>
        
        
        <p>
          <Link href="/posts/first-post">Read my first post →</Link>
        </p>
      </section>
    </Layout>
  );
}