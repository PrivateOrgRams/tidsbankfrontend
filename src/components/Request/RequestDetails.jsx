import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allRequests } from "../../modules/requests";

const RequestDetails = () => {

  const { requestId } = useParams();
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);
  const [request, setRequest] = useState();
  useEffect(() => {
    dispatch(allRequests())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return  (
    <div className="row">
    gfkjgfkgjfkjgkfj
    </div>
  )
}

export default RequestDetails
