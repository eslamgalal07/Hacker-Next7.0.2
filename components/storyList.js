import Link from 'next/link';

function StoryList({ stories }) {
 return (
  <div className='story-list'>
   {stories.map(story => (
    <div className='story' key={story.id}>
     <h1 className='story-title' >
      <a href={story.url}>{story.title}</a>
     </h1>
     <div className='story-details'>
      <span>{story.points || 0} points</span>
      <Link href={`/story?id=${story.id}`}>
       <a>{story.comments_count || 0} comments</a>
      </Link>
     </div>
    </div>
   ))}
   <style jsx>{`
   .story-list{
    padding:0 1em;
   }
   .story{
    padding:1em 0;
   }
   .story-title{
    font-size:1rem;
    margin: 0;
    margin-bottom:0.5em;
   }
   .story-title a{
    text-decoration:none;
    color:#333;
   }
   .story-title a:hover ,
   .story-details a:hover{
    text-decoration: underline;
   }
   .story-details {
    font-size:0.8rem;
    font-weight:bold;
   }
   .story-details span{
    margin-right:1em;
   }
   .story-details a{
    color:#6600ff;
    text-decoration:none;
   }
   `}</style>
  </div>
 )
}
export default StoryList;