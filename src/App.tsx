import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

export const App = () => (
   <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} >
        {/* <Resource name="users" list={ListGuesser} /> */}
       <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
  </Admin>
);
