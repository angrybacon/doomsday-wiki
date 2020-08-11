import { graphql, useStaticQuery } from 'gatsby';
import AccountEditOutlineIcon from 'mdi-react/AccountEditOutlineIcon';
import CalendarIcon from 'mdi-react/CalendarIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '../Card';
import Listify from '../Listify';
import Markdown from '../Markdown';
import Prettylink from '../Prettylink';
import useStyles from './styles';

export default function Articles({ top }) {

  const { articles } = useStaticQuery(graphql`{
    articles: allFile(
      filter: {sourceInstanceName: {eq: "articles"}},
      sort: {fields: fields___slug, order: DESC}
    ) {
      nodes {
        childMarkdownRemark {
          excerpt(format: PLAIN pruneLength: 150)
          frontmatter {authors banner title}
        }
        fields {date slug}
      }
    }
  }`);

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);

  const article = ({ childMarkdownRemark, fields }) => {
    const { excerpt, frontmatter } = childMarkdownRemark;
    let { authors, banner, title } = frontmatter;
    let { date, slug } = fields;
    const credit = [date, authors].filter(it => it);
    const subtitle = credit.length ? <Listify items={credit} /> : null;
    return {authors, banner, date, excerpt, slug, subtitle, title};
  };

  const cards = articles => (
    <Grid container spacing={isMobile ? 2 : 3}>
      {articles.map((it, index) => {
        const { authors, banner, date, excerpt, slug, title } = article(it);
        return (
          <Grid key={index} item title={title} xs={12}>
            <Card>
              <Prettylink href={slug} style={{textDecoration: 'none'}}>
                <CardActionArea
                  classes={{focusHighlight: classes.cardActive, root: classes.card}}
                  TouchRippleProps={{classes: {root: classes.cardRipple}}}
                >
                  <Box display="flex" justifyContent="space-between" width="100%">
                    <CardContent>
                      <Typography gutterBottom component="h6" variant="body1">
                        {title}
                      </Typography>
                      <Markdown
                        gutterBottom
                        color="textSecondary"
                        source={excerpt}
                        variant="body2"
                      />
                      <Typography color="textSecondary" component="div" variant="body2">
                        <Box alignItems="center" display="flex">
                          <CalendarIcon className={classes.icon} size={16} />
                          {date}
                        </Box>
                        <Box alignItems="center" display="flex">
                          <AccountEditOutlineIcon className={classes.icon} size={16} />
                          {authors}
                        </Box>
                      </Typography>
                    </CardContent>
                    <Box display={banner ? 'block' : 'none'} maxWidth="30%" minWidth="30%">
                      <CardMedia className={classes.cardMedia} component="img" image={banner} />
                    </Box>
                  </Box>
                </CardActionArea>
              </Prettylink>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );

  const list = articles => (
    <List disablePadding>
      {articles.map((it, index) => {
        const { slug, subtitle, title } = article(it);
        const primary = <Prettylink children={title} href={slug} />;
        return <ListItemText key={index} primary={primary} secondary={subtitle} />;
      })}
    </List>
  );

  return (
    top
      ? cards(articles.nodes.slice(0, 4))
      : (
        <>
          <Typography children="Articles" gutterBottom variant="h4" />
          {list(articles.nodes)}
        </>
      )
  );
}

Articles.propTypes = {
  top: PropTypes.bool,
};
