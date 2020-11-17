import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Layout from '../components/layout';
import Error from 'next/error';

class Story extends Component {
 static async getInitialProps({ req, res, query }) {
  let storyId = query.id;
  let story;
  try {
   let response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
   story = await response.json();
  } catch (error) {
   console.log(error);
   story = null;
  }
  return { story }
 }
 render() {
  const { story } = this.props;
  if (story === null) {
   return <Error statusCode={503} title='page unavailable' />
  } else {
   return (
    <Layout title={story.title} backButton={true}>
     <main>
      <h1 className='story-title'><a href={story.url}>{story.title}</a></h1>
      <div className='story-details'>
       <strong>{story.comments_count}comments</strong>
       <strong>{story.points}points</strong>
       <strong>{story.time_ago}</strong>
      </div>
     </main>

     <style jsx>{`
      main{
       padding:1em;
      }
      .story-title{
       font-size:1.2rem;
       font-weight:300;
       margin:0;
       padding:0.5em;
      }
      .story-title a{
       color:#333;
       text-decoration:none;
      }
      .story-title a:hover{
       text-decoration:underline;
      }
      .story-details{
       font-size:0.8rem;
       padding-bottom:1em;
       border-bottom: 1px solid rgba(0,0,0,0.1);
       margin-bottom: 1em;
       margin-left:1em;
      }
      .story-details strong{
       margin-right:1em;
      }
      .story-details a{
       color:#f60;
      }
     `}</style>
    </Layout>
   )
  }
 }
}
export default Story;