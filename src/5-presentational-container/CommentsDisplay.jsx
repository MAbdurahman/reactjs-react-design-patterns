export default function CommentsDisplay({list}) {

   return (
      list &&
      list.map((item) => {
         return (
            <div key={item.id}>
               <p>{item.body}</p>
            </div>
         );
      })
   );
}