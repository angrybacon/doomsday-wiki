import E from 'exenv';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState  } from 'react';
import Script from 'react-load-script';
import { useTheme } from '@material-ui/core/styles';
import usePrevious from '../../tools/hooks/previous';


export default function Tweet({ id }) {

  const root = useRef(null);
  const [ ready, setReady ] = useState(false);
  const [ should, setShould ] = useState(false);
  const [ update, setUpdate ] = useState(false);
  const theme = useTheme();
  const previousTheme = usePrevious(theme.palette.type);

  const onLoad = () => setReady(!!window.twttr);

  const onCreate = useCallback(() => {
    window.twttr.widgets.createTweet(id, root.current, {
      align: 'center',
      conversation: 'none',
      dnt: true,
      theme: theme.palette.type,
    });
    setUpdate(false);
  }, [id, theme.palette.type]);

  useEffect(() => {
    if (ready && update) {
      onCreate();
    }
  }, [onCreate, ready, update]);

  useEffect(() => {
    if (previousTheme !== theme.palette.type) {
      root.current.innerHTML = '';
      setUpdate(true);
    }
  }, [previousTheme, theme.palette.type]);

  useEffect(() => {
    setShould(!!E.canUseDOM && id.length > 0);
  }, [id]);

  return (
    <>
      {should && <Script onLoad={onLoad} url="https://platform.twitter.com/widgets.js" />}
      <span ref={root} />
    </>
  );
}


Tweet.propTypes = {
  id: PropTypes.string.isRequired,
};
