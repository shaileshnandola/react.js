import { UserProvider } from "./context/usercontext";
import Edit from "./form/Edit";
import Form from "./form/Form";
import View from "./form/View";


function App() {
  return (
    <UserProvider>
      <Form />
      <View/>
      <Edit/>
    </UserProvider>
  );
}

export default App;
