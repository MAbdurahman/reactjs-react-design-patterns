export default function HigherOrderExample() {

   const NewComponent = printProps(SomeComponent);

   return (
      <div>
         <NewComponent
            prop1="The value of prop1"
            prop2="The value of prop2"
         />
      </div>
   );
}

export const printProps = (Component) => {
   return (props) => {
      console.log(props);
      return <Component {...props} />;
   }
}

export const SomeComponent = () => {
   return (
      <div>I am SomeComponent</div>
   )
}