import {Username} from './Username';

export default function PersonComponent() {

   return (
      <div>
         <Username render={() => <h1>John</h1>} />
         <Username render={() => <h1>Ahmed</h1>} />
      </div>
   );
}