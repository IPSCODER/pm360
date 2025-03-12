import React,{ Suspense } from 'react';
import LoaderSpinner from '../loader/Loader.tsx';

const Loadable = (Component:any) => (props:any) => (
  <React.Fragment>
    <Suspense fallback={<LoaderSpinner/>}>
    <Component {...props} />
  </Suspense>
  </React.Fragment>
);

export default Loadable;
