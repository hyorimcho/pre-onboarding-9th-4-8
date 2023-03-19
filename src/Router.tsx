import { Navigate, Route, Routes } from 'react-router';
import Main from './pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default Router;
