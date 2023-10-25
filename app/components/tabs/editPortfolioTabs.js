"use client"
import { useState } from 'react';
import ProfileForm from '../forms/editProfileForm'
import SkillsForm from '../forms/editSkillsForm';
import EditProjectForm from '../forms/eidtProjectForm';
import EditContactForm from '../forms/editContactForm';

export default function EditPortfolioTabs(props) {

  const [activeTab, setActiveTab] = useState('Profile');

  const tabContent = {
    Profile: (
        <>
            <ProfileForm id={props.id} />
      </>
    ),
    Skills: (
        <>
            <SkillsForm id={props.id}/>
      </>
    ),
    Projects: (
      <>
          <EditProjectForm />
      </>
    ),
    Contact: (
      <>
          <EditContactForm />
      </>
    ),
  };

  return (
    <div>
      <div className="flex justify-center tabs tabs-boxed">
        <a
          className={`tab ${activeTab === 'Profile' ? 'tab-active' : ''} tab-sm`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile
        </a>
        <a
          className={`tab ${activeTab === 'Skills' ? 'tab-active' : ''} tab-sm`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </a>
        <a
          className={`tab ${activeTab === 'Projects' ? 'tab-active' : ''} tab-sm`}
          onClick={() => setActiveTab('Projects')}
        >
          Projects
        </a>
        <a
          className={`tab ${activeTab === 'Contact' ? 'tab-active' : ''} tab-sm`}
          onClick={() => setActiveTab('Contact')}
        >
          Contact
        </a>
      </div>
      {tabContent[activeTab]}
    </div>
  );
};
