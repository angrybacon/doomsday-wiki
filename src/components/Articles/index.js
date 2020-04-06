import { graphql, useStaticQuery } from 'gatsby';
import AccountEditOutlineIcon from 'mdi-react/AccountEditOutlineIcon';
import CalendarIcon from 'mdi-react/CalendarIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '../Card';
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
          frontmatter {authors title}
        }
        fields {date slug}
      }
    }
  }`);

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);

  const article = ({ childMarkdownRemark, fields }) => {
    let { authors, title } = childMarkdownRemark.frontmatter;
    let { date, slug } = fields;
    authors = authors ? ` by ${authors}` : '';
    return {authors, date, slug, subtitle: `${date}${authors}`, title};
  };

  const cards = articles => (
    <Grid container spacing={isMobile ? 2 : 3}>
      {articles.map((it, index) => {
        const { authors, date, slug, title } = article(it);
        return (
          <Grid item xs={12} key={index} title={title}>
            <Card>
              <Prettylink style={{textDecoration: 'none'}} href={slug}>
                <CardActionArea>
                  <CardContent>
                    <Typography children={title} component="h6" gutterBottom variant="body1" />
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
      ? cards(articles.nodes.slice(0, 3))
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
