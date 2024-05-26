import React from 'react';

const offset = (el) => {
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.scrollX || document.documentElement.scrollLeft,
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

class InternalLink extends React.Component {

  handleClick = (e) => {
    e.preventDefault();

    const targetElm = document.querySelector(this.props.href);
    const { top, left } = offset(targetElm);

    window.scroll({ top, left, behavior: 'smooth' });
  }

  render() {
    const { className, href, children } = this.props;

    return (
      <a className={className} href={href} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

export default InternalLink;