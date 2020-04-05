import c from 'classnames';
import E from 'exenv';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState  } from 'react';
import { useInView } from 'react-intersection-observer';
import Script from 'react-load-script';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import usePrevious from '../../tools/hooks/previous';
import useStyles from './styles';


export default function Tweet({ id }) {

  const [ viewRoot, inView ] = useInView({rootMargin: '200px'});
  const tweetRoot = useRef(null);
  const [ height, setHeight ] = useState(0);
  const [ loading, setLoading ] = useState(true);
  const [ ready, setReady ] = useState(false);
  const [ should, setShould ] = useState(false);
  const [ update, setUpdate ] = useState(false);
  const [ visible, setVisible ] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const previousTheme = usePrevious(theme.palette.type);

  const onLoad = () => setReady(!!window.twttr);

  const onCreate = useCallback(() => {
    window.twttr.widgets.createTweet(id, tweetRoot.current, {
      align: 'center',
      conversation: 'none',
      dnt: true,
      theme: theme.palette.type,
    }).then(it => {
      setHeight(it ? it.clientHeight : 0);
      setLoading(false);
      setUpdate(false);
    });
  }, [id, theme.palette.type]);

  useEffect(() => {
    if (ready && update) {
      onCreate();
    }
  }, [onCreate, ready, update]);

  useEffect(() => {
    if (previousTheme !== theme.palette.type) {
      if (tweetRoot.current) {
        tweetRoot.current.innerHTML = '';
      }
      setLoading(true);
      setUpdate(true);
    }
  }, [previousTheme, theme.palette.type]);

  useEffect(() => {
    if (visible) {
      setShould(!!E.canUseDOM && id.length > 0);
    }
  }, [id, visible]);

  useEffect(() => {
    if (!visible && inView) {
      setHeight(200);
      setVisible(true);
    }
  }, [inView, visible]);

  return (
    <div className={classes.root} ref={viewRoot} style={{height}}>
      {visible && (
        <>
          {should && <Script onLoad={onLoad} url="https://platform.twitter.com/widgets.js" />}
          <div className={classes.container} ref={tweetRoot} />
          <div className={c(classes.loader, {[classes.loading]: loading})}>
            {loading && <CircularProgress color="secondary" component="span" size={60} />}
          </div>
        </>
      )}
    </div>
  );
}


Tweet.propTypes = {
  id: PropTypes.string.isRequired,
};
