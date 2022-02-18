import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'What is BUIDL Quest?',
    paragraph: ''
  };
  return (
    
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  <span className="text-color-pink"> 👨‍👨‍👧‍👦 Step 1 </span>
                    </h4>
                  <p className="text-color-primary">
                   <a href="https://docs.google.com/spreadsheets/d/1BPShbPS0q9U7hva5pp8C986LAqsJLUwATaAoXBFFa_g/edit#gid=0">Register your team. </a> 
                  Add team members, the bounty you're working on and a description of what you want to do. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                     <span className="text-color-pink"> 🚀 Step 2 </span>                  
                  </h4>
                  <p className="text-color-primary">
                  <a href="#">Create your team token </a> using the token launcher. 
                  Your token name should correspond to your team name, just to make it easier to identify which hackathon prize your team is going for.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  <span className="text-color-pink"> 🦄 Step 2 </span>                  
                    </h4>
                  <p className="text-color-primary">
                  Start posting your micro bounties <a href="https://docs.google.com/spreadsheets/d/1BPShbPS0q9U7hva5pp8C986LAqsJLUwATaAoXBFFa_g/edit#gid=0">here </a>, award bounty hunters or hunt other bounties.
                  </p>
                  <span className="text-color-primary">
                    <a href="https://discord.gg/ZXtBRaUnnn">Join our Discord to start collaborating with teams!</a>
                  </span>
                </div>
              </div>
            </div>

          <div className={innerClasses}>
          <div className="reveal-from-right" data-reveal-delay="200">
          <SectionHeader data={sectionHeader} className="center-content"/>
          <p>
            <ol></ol>
            <ul>A way to encourage <strong>collaboration</strong> between hackers.</ul>
            <ul>A way to encourage <strong>participation for all hackers</strong>, even those that don't have ideas or a team.</ul>
            <ul>A chance for teams to delegate work by creating <strong>micro bounties</strong> for their team members.</ul>
          </p>
        </div>
        </div>
        </div>
      </div>
      
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;