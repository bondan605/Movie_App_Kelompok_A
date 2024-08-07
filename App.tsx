// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigator from "./src/navigations/BottomTabNavigation";

// export default function App(): JSX.Element {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigations/BottomTabNavigation";

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
