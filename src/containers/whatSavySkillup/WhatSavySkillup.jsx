import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatsavyskillup.css';

const WhatSavySkillup = () => {
  return (
    <div className="skillup__whatsavyskillup section__margin" id="whatsavyskillup">
      <div className="skillup__whatsavyskillup-feature">
        <Feature title="What is SkillUp" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="skillup__whatsavyskillup-heading">
        <h1 className="gradient__text">The possibilities are beyond your imaginations</h1>
        <p>Explore the library</p>
      </div>
      <div className="skillup_whatsavyskillup-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatSavySkillup
