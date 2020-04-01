import c from 'classnames';
import E from 'exenv';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState  } from 'react';
import Script from 'react-load-script';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import usePrevious from '../../tools/hooks/previous';
import useStyles from './styles';


export default function Tweet({ id }) {

  const root = useRef(null);
  const [ height, setHeight ] = useState(200);
  const [ loading, setLoading ] = useState(true);
  const [ ready, setReady ] = useState(false);
  const [ should, setShould ] = useState(false);
  const [ update, setUpdate ] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const previousTheme = usePrevious(theme.palette.type);

  const onLoad = () => setReady(!!window.twttr);

  const onCreate = useCallback(() => {
    window.twttr.widgets.createTweet(id, root.current, {
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
      root.current.innerHTML = '';
      setLoading(true);
      setUpdate(true);
    }
  }, [previousTheme, theme.palette.type]);

  useEffect(() => {
    setShould(!!E.canUseDOM && id.length > 0);
  }, [id]);

  return (
    <div className={classes.root} style={{height}}>
      {should && <Script onLoad={onLoad} url="https://platform.twitter.com/widgets.js" />}
      <div className={classes.container} ref={root} />
      <div className={c(classes.loader, {[classes.loading]: loading})}>
        {loading && <CircularProgress color="secondary" component="span" size={60} />}
      </div>
    </div>
  );
}


Tweet.propTypes = {
  id: PropTypes.string.isRequired,
};
