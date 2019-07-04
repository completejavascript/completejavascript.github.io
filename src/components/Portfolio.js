import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import LazyImage from './LazyImage';
import PlaceHolder from '../res/portfolio-place-holder.png';
import ExternalLink from './ExternalLink';
import './Portfolio.css';

const DATA_URL = "/data/portfolios.json";
const NUM_PORTFOLIO_LOAD = 4

const PortfolioItem = ({ project }) => {
  const {
    title, description, linkDemo, linkImg, altImg, tags, linkWiki
  } = project;

  return (
    <div className="cell background-color-white margin-bottom-half">
      <ExternalLink href={`${linkDemo}`}>
        <LazyImage
          placeHolder={PlaceHolder}
          src={linkImg}
          width="100%"
          height="auto"
          effect="opacity"
          alt={altImg}
        />
      </ExternalLink>
      <h6 className="text-center margin-top">
        <strong><ExternalLink href={`${linkDemo}`}>
          {title}
        </ExternalLink></strong>
      </h6>
      <p className="text-description text-center 
        padding-left-half padding-right-half padding-bottom margin-bottom-3 ">
        {description}
      </p>
      <div 
        className="cell-footer flex align-items-center background-color-light-grey position-absolute bottom-zero
           padding-left padding-right padding-top-half padding-bottom-half"
      >
        <div className="tags text-description text-left">
          <small>{tags}</small>
        </div>
        <div className="how-to text-right">
          <ExternalLink href={`${linkWiki}`}><small>GitHub</small></ExternalLink>
        </div>
      </div>
    </div>
  )
}

class Portfolio extends React.Component {

  state = {
    projects: [],
    numPortfolioShow: 6
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      numPortfolioShow: prevState.numPortfolioShow + NUM_PORTFOLIO_LOAD
    }));
  }

  componentDidMount() {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          projects: [...prevState.projects, ...data.projects].reverse()
        }));
      });
  }

  render() {
    const { numPortfolioShow , projects } = this.state;
    const seeMoreExtraClass = numPortfolioShow < projects.length ? "" : "opacity-none";

    return (
      <section className="background-color-light-grey" id="portfolio">
        <div className="container-full row">
          <div className="col-xs-12 margin-top-3">
            <SectionTitle title="Porfolio" />
            <SectionDescription content="Check out my lastest work below." />
          </div>
          <div className="flex-grid flex flex-row justify-content-space-around">
            {
              projects.map((project, index) => {
                if (index < numPortfolioShow) {
                  return (
                    <React.Fragment key={`project-${index}`}>
                      <PortfolioItem project={project} />
                    </React.Fragment>
                  )
                } else {
                  return null;
                }
              })
            }
          </div>
          <div className={`text-center margin-bottom-3 margin-top ${seeMoreExtraClass}`}>
            <span id="btn-see-more" className="btn btn-primary" onClick={this.handleSeeMore}>
              <strong>See more</strong>
            </span>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;