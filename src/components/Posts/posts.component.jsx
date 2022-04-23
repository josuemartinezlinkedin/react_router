import { useParams } from "react-router-dom";


const Posts = () => {
    const {id} = useParams();
    console.log(id)

  return (
    <h1>Posts page = {id} </h1>
  )
};

export default Posts;