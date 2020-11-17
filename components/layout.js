import Link from 'next/link';
import Head from 'next/head'
import { withRouter } from 'next/router';

function Layout({ children, router, title, description, backButton }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <div className='container'>
                <nav>
                    {backButton && <span onClick={router.back} className='backButton'>&#x2b05;</span>}
                    <Link href='/'>
                        <a><span className='main-title'>Hacker Next</span></a>
                    </Link>
                </nav>
                {children}
            </div>
            <style jsx>{`
    .container{
     max-width:800px;
     margin:0 auto;
     background:#f6f6ef;
    }
    nav{
     background:#f60;
     padding:1em;
    }
    nav > *{
     /* inline-block means respect 
         1. allow other elements to sit to their left and right
         2. top,bottom margin and padding
         3. height and width
     */
     display: inline-block;
     color:black;
    }
    nav a{
     text-decoration:none;
    }
    .main-title{
     font-weight:bold;
    }
    nav .backButton{
        font-size:0.9rem;
        padding:1em;
        cursor:pointer;
    }
   `}</style>
        </div>
    )
}
export default withRouter(Layout);