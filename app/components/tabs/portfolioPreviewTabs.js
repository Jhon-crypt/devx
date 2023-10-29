import { useState } from 'react';
import { Profile, Skills, Projects, Contact } from '../section/portfolio';

export default function PortfolioPreviewTabs(props) {
    const [activeTab, setActiveTab] = useState('Profile');

    const tabContent = {
        Profile: (
            <>
                <br />
                <Profile id={props.id} />
            </>
        ),
        Skills: (
            <>
                <br />
                <Skills id={props.id}/>
            </>
        ),
        Projects: (
            <>
                <br />
                <Projects id={props.id}/>
            </>
        ),
        Contact: (
            <>
                <br />
                <Contact id={props.id}/>
            </>
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
                    className={`tab ${activeTab === 'Projects' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('Projects')}
                >
                    Projects
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
