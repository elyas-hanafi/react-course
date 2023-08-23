import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import axiosClient from './api/axiosClient';
import { getUserData } from './api/course';

export default function App() {
  const ref = useRef(null);
  useEffect(() => {
    try {
      getUserData().then((ress) => console.log(ress.data));
    } catch (error) {}
  }, []);
  return (
    <>
      <h2 ref={ref} id="h2">
        Hello
      </h2>
    </>
  );
}
