import React, { memo } from "react";
const App = memo(({ message }) => (
  <div className="text-blue-500">{message}</div>
));
export default App;
