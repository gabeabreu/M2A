import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from '../pages/Authentication';
import Companies from '../pages/Companies';
import Diagnostics from '../pages/Diagnostics';
import Questionnaires from '../pages/Questionnaires';
import Users from '../pages/Users';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authentication />} />
      <Route path='companies' element={<Companies />} />
      <Route path='questionnaires' element={<Questionnaires />} />
      <Route path='diagnostics' element={<Diagnostics />} />
      <Route path='users' element={<Users />} />
      {/* <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
