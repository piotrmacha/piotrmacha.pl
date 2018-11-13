import * as React from "react";
import './Profile.scss';
import ProfileConfig from "../../configs/ProfileConfig";
import Social from "./Social/Social";

const Profile = () => {
    return (
        <div>
            <header className="Profile">
                <div className="Profile-photo">
                    <img src={ProfileConfig.photo} alt={ProfileConfig.name} />
                </div>
                <div className="Profile-info">
                    <h1>{ProfileConfig.name}</h1>
                    <div>{ProfileConfig.location}</div>
                    <div className="Profile-info-email">{ProfileConfig.email}</div>
                </div>
                <div className="Profile-social">
                    {ProfileConfig.social.map(social => <Social social={social} />)}
                </div>
            </header>
        </div>
    );
};

export default Profile;