import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseActionAsync, decreaseActionAsync } from "./modules/count";
import { postAction } from "./modules/post";

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countReducer);
  const { pending, error, title, body } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch(postAction(count));
  }, []);

  useEffect(() => {
    dispatch(postAction(count));
  }, [count]);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          dispatch(increaseActionAsync());
        }}
      >
        INCREASE
      </button>
      <button
        onClick={() => {
          dispatch(decreaseActionAsync());
        }}
      >
        DECREASE
      </button>
      {pending && <h1>로딩중...</h1>}
      {error ? (
        <h1>에러발생</h1>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
}
