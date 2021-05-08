import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../mainHeader/mainHeader';
import MainFeaturedPost from '../mainFeaturedPost/mainFeaturedPost';
import FeaturedPost from '../featuredPost/featuredPost';
import Footer from '../mainFooter/mainFooter';
import Precautions from '../Precautions2/precautions';
import I3 from '../../images/i8.JPG';
import I1 from '../../images/i9.JPG';
import I2 from '../../images/i10.JPG';
import I0 from '../../images/i11.JPG';
import C2 from '../../images/c2.jpg';
import C3 from '../../images/c3.JPG';
import C1 from '../../images/c1.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  // { title: 'Functionalities', url: '#' },
  // { title: 'Precautions', url: '#precaution' },
  // { title: 'Get in Touch', url: '#' },
];

const mainFeaturedPost = {
  title: 'We Care',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: C1,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Consult specialist of your choice',
    
    description:
      'Get in touch with the best doctors around.',
    image: C2,
    imageText: 'C2',
  },
  {
    title: 'Monitor your health regualary',
    
    description:
      'This helps patient to know at the right time what treatment he needs from doctor.',
    image: C3,
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Health+" sections={sections} />
        
        <main>
        
          <MainFeaturedPost post={mainFeaturedPost} />
          <div style={{padding: 20, color:"#15317E", fontSize: 30, textAlign: "center"}}>
            Aim
          </div>
          <div style={{paddingBottom: 30,paddingTop: 10, fontSize: 15, textAlign: "center"}}>
          Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Maintain a healthy lifestyle by doing what is right for your body.
          The objective of patient monitoring is to have a quantitative assessment of the important physiological variables of the patients during critical periods of their biological functions. For diagnostic and research purposes, it is necessary to know their actual value or trend of change.
          </div>
          <div style={{padding: 30, color:"#15317E", fontSize: 30, textAlign: "center"}}>
            Functionalities
          </div>
          <Grid container spacing={8}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <div id = "precaution" style={{padding: 30, color:"#15317E", fontSize: 30, textAlign: "center", paddingTop: 50}}>
          Precautions
          </div>
       
          <Grid container spacing={8}>
            <Grid item xs={3}> <Precautions image={I3} iptext={'COVID 19: How to Treat Coronavirus at Home'} link={'https://patient.info/news-and-features/covid-19-how-to-treat-coronavirus-at-home'}/> </Grid>
            <Grid item xs={3}> <Precautions image={I1} iptext={'How well do face masks protect against coronavirus?'} link={'https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-mask/art-20485449'}/> </Grid>
            <Grid item xs={3}> <Precautions image={I2} iptext={'Possible Side Effects of getting COVID 19 Vaccine'} link={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html'}/> </Grid>
            <Grid item xs={3}> <Precautions image={I0} iptext={'The Importance of Hand Sanitizer Placement in the Workplace'} link={'https://info.debgroup.com/blog/the-importance-of-hand-sanitizer-placement-in-the-workplace#:~:text=Using%20hand%20sanitizer%20reduces%20microbial,the%20health%20of%20its%20employees.'}/> </Grid>
          </Grid>
          <br/>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}