import { Phonebook } from "./components/Phonebook/Phonebook";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "redux/store";

export const App = () => {
  return (
    <div>
        <PersistGate loading={null} persistor={persistor}>
             <Phonebook />
        </PersistGate>
      </div>
  );
};

