import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/storyList';
import Layout from '../components/layout';
import Link from 'next/link';

class Index extends Component {
 // runs on Server side at building time 
 // runs on Clinet side for every request
 static async getInitialProps({ req, res, query }) {
  let page = Number(query.page) || 1;
  let stories;
  try {
   const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
   stories = await response.json();
  } catch (error) {
   // prevent undefined error
   stories = [];
  }
  return { stories, page };
 }

 render() {
  const { stories, page } = this.props;
  if (stories.length === 0) {
   return (
    <div>
     <Error statusCode={503} title='service unavailable' />
    </div>
   )
  } else {
   return (
    <Layout title='Hacker Next' description='A Hacker News clone made by Next.js'>
     <StoryList stories={stories} />
     <footer>
      <Link href={`/?page=${page + 1}`}>
       <a>Next page {page + 1}</a>
      </Link>
     </footer>

     <style jsx>{`
     footer{
      padding:1em;
     }
     footer a{
      color:black;
      font-weight:bold;
      text-decoration:none;
     }
     `}</style>
    </Layout>
   )
  }
 }
}
export default Index;