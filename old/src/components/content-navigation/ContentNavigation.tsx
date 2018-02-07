import * as React from 'react';

export default class ContentNavigation extends React.Component {

  render() {
    return (
      <div className="content-navigation">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 content-navigation-header-container">
              <div className="content-navigation__header">
                <div className="content-navigation__header-title text-medium">
                  <div className="content-navigation__header-title--text">Innehållsnavigering</div>
                  <hr className="content-navigation__header-title--line" />
                </div>
                <div className="content-navigation__header-subtitle text-small">
                  En sektion kan ha tillhörande text och innehålla&nbsp;
                    <a href="#" className="text-small">länkar</a>
                </div>
              </div>
            </div>
            <div className="col content-navigation--col-12">
              <ul className="content-navigation__list">
                <li className="content-navigation__list-item">
                  <a href="#" className="content-navigation__list-item--link text-medium">
                    Anpassa för läs- och <span className="nowrap">skrivsvårigheter
                      <i className="icon-arrow" /></span>
                  </a>
                </li>
                <li className="content-navigation__list-item">
                  <a href="#" className="content-navigation__list-item--link text-medium">
                    Anpassa för <span className="nowrap">funktionsnedsättning
                      <i className="icon-arrow" /></span>
                  </a>
                </li>
                <li className="content-navigation__list-item show-border-bottom">
                  <a href="#" className="content-navigation__list-item--link text-medium">
                    Nationella prov med nyanlända
                      <span className="nowrap">elever<i className="icon-arrow" /></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col content-navigation--col-12">
              <ul className="content-navigation__list">
                <li className="content-navigation__list-item">
                  <a href="#" className="content-navigation__list-item--link text-medium">
                    Nationella prov med digitala <span className="nowrap">verktyg
                      <i className="icon-arrow" /></span>
                  </a>
                </li>
                <li className="content-navigation__list-item">
                  <a href="#" className="content-navigation__list-item--link text-medium">
                    Organisera muntliga prov så kan det gå till exempel finns att ladda
                      <span className="nowrap">ner<i className="icon-arrow" /></span>
                  </a>
                </li>
                <li className="content-navigation__list-item">
                  <a href="#" className="content-navigation__list-item--link text-medium">
                    Beställa <span className="nowrap">prov
                      <i className="icon-arrow" /></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}