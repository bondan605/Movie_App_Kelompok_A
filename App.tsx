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

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigator from "./src/navigations/BottomTabNavigation";

// const App = (): JSX.Element => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;



//CHANGED
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigations/BottomTabNavigation";
import SearchScreen from "./src/screens/SearchScreen";

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen name="Home" component={SearchScreen} />
        {/* Tambahkan layar lainnya di sini */}
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
