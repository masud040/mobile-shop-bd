import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-[url('https://i.ibb.co/0DsbGfR/404.gif')] bg-center bg-cover bg-no-repeat"></div>
  );
};

export default NotFound;
