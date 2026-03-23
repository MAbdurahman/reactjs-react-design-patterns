import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CommentsDisplay from './CommentsDisplay.jsx';

export default function Comments() {
   const [comments, setComments] = useState([]);

   useEffect(() => {
      (async () => {
         const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
         setComments(response.data);
      })();
   }, []);

   return <CommentsDisplay list={comments} />;
}