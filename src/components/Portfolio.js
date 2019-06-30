import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import './Portfolio.css';

const DATA_URL = "/data/portfolios.json";

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
    projects: []
  }

  componentDidUpdate() {
    
  }

  componentDidMount() {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          projects: [...prevState.projects, ...data.projects]
        }));
      });
  }

  render() {
    return (
      <section className="background-color-light-grey" id="portfolio">
        <div className="container-full row">
          <div className="col-xs-12 margin-top-3">
            <SectionTitle title="Porfolio" />
            <SectionDescription content="Check out my lastest work below." />
          </div>
          <div className="flex-grid">
            {
              this.state.projects.map((project, index) => (
                <React.Fragment key={`project-${index}`} >
                  <PortfolioItem project={project} />
                </React.Fragment>
              ))
            }
          </div>
          <div className="see-more-wrapper text-center margin-bottom-3 margin-top">
            <span id="btn-see-more" className="btn btn-primary"><strong>See more</strong></span>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;