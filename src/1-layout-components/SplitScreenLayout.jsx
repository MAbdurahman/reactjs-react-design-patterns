export default function SplitScreenLayout({ left, right }) {

   return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
         <div style={{ flex: 1, textAlign: 'center' }}>{left}</div>
         <div style={{ flex: 1, textAlign: 'center' }}>{right}</div>
      </div>
   );
}