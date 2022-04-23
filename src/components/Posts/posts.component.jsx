import { useLocation, useParams } from "react-router-dom";


const Posts = () => {
    const {id} = useParams();
    const queryString = new URLSearchParams(useLocation().search);
    console.log(queryString.get("first"))

  return (
    <div>
    <h1>{id} posts</h1>
    <h2>First name: {queryString.get("first")}</h2>
    <h2>Last name: {queryString.get("last")}</h2>
    </div>
  )
};

export default Posts;