import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import './Portfolio.css';

const DATA_URL = "/data/portfolios.json";
const NUM_PORTFOLIO_LOAD = 4

const PortfolioItem = ({ project }) => {
  const {
    title, description, linkDemo, linkImg, altImg, tags, linkWiki
  } = project;

  return (
    <div className="cell background-color-white margin-bottom-half">
      <a href={`${linkDemo}`}>
        <img className="image-responsive" alt={`${altImg}`} src={`${linkImg}`}
        />
      </a>
      <h6 className="text-center margin-top">
        <strong><a href={`${linkDemo}`}>{title}</a></strong>
      </h6>
      <p className="text-description text-center 
        padding-left-half padding-right-half padding-bottom margin-bottom-3 ">
        {description}
      </p>
      <div 
        className="cell-footer background-color-light-grey flex position-absolute bottom-zero
           padding-left padding-right padding-top-half padding-bottom-half"
      >
        <div className="tags text-description text-left">
          <small>{tags}</small>
        </div>
        <div className="how-to text-right">
          <a href={`${linkWiki}`}><small>GitHub</small></a>
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
          <div className="flex-grid">
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