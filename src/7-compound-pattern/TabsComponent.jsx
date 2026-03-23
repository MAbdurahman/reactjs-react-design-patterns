function TabPanel(props) {
   return null;
}

function Tab(props) {
   return null;
}

function Tabs(props) {
   return null;
}

export default function TabsComponent() {

   return (
      <Tabs>
         <header>
            <ul>
               <li>
                  <Tab id="a">
                     <button>Tab 1</button>
                  </Tab>
               </li>
            </ul>
         </header>
         <main>
            <TabPanel active="a">
               <div>
                  Tab 1 Panel
               </div>
            </TabPanel>
         </main>
      </Tabs>

   );
}