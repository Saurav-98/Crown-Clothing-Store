import "./categories.styles.scss";

import categoriesMenu from "./categories-menu/CategoriesMenu";
import Directory from "./directory/Directory";
const App = () => {
  return <Directory categoriesMenu={categoriesMenu} />;
};

export default App;
