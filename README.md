## React useContext Template

Basic instructions to create a Context Provider for your NextJS App

#### Create a context folder in the root directory

./context

#### Create a contextProvider file

**contextProvider.js** with the following code:

```js
import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentCounter, setCurrentCounter] = useState(0);

  return (
    <StateContext.Provider value={{ currentCounter, setCurrentCounter }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
```

#### Go into \_app.js and wrap the main _Component_ in a _ContextProvider_ component

```js
import { ContextProvider } from "../context/contextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
```

### Import the useStateContext in your component and destructure the object values you want to use

```js
import { useStateContext } from "../context/contextProvider";

const Counter = () => {
  const { currentCounter, setCurrentCounter } = useStateContext();

  return (
    <div>
      <h2>Increment and decrement</h2>
      <h3>{currentCounter}</h3>
      <div>
        <button
          onClick={() => {
            setCurrentCounter(currentCounter + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCurrentCounter(currentCounter - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
```
