import React from 'react';
import Loadable from 'react-loadable';
import AnimateLoading from 'components/hoc/LoadingComp/AnimateLoading';

export default function loadable(cmp) {
  return Loadable({
    loader: cmp,
    loading() {
      return <AnimateLoading />;
    },
  });
}
