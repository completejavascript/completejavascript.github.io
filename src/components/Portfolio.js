import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';

const Portfolio = () => {
  return (
    <section class="background-color-blue-grey" id="portfolio">
      <div class="container-full row">
        <div class="col-xs-12 margin-top-3">
          <SectionTitle title="Porfolio" />
          <SectionDescription content="Check out my lastest work below." />
        </div>
        <div class="flex-grid">
          {/* Fetch project from data.json */}
        </div>
        <div class="see-more-wrapper text-center margin-bottom-3">
          <span id="btn-see-more" class="btn btn-primary">See more</span>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;