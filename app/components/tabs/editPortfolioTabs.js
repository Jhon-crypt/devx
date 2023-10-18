import { useState } from 'react';
import ProfileForm from '../forms/editProfileForm'
import SkillsForm from '../forms/editSkillsForm';

export default function EditPortfolioTabs() {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabContent = {
    Profile: (
        <>
            <ProfileForm />
      </>
    ),
    Skills: (
        <>
            <SkillsForm />
      </>
    ),
    Contact: (
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">About you</label>
        <textarea
          id="message"
          name="message"
          class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-3 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
        <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
          Update about
        </button>
      </div>
    ),
  };

  return (
    <div>
      <div className="flex justify-center tabs tabs-boxed">
        <a
          className={`tab ${activeTab === 'Profile' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile
        </a>
        <a
          className={`tab ${activeTab === 'Skills' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </a>
        <a
          className={`tab ${activeTab === 'Contact' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Contact')}
        >
          Contact
        </a>
      </div>
      {tabContent[activeTab]}
    </div>
  );
};
