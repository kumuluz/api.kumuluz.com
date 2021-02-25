import React from 'react'
import {useTranslation} from "gatsby-plugin-react-i18next" //Link
import { CONTACT_URL } from "../../../../static/links.js"
import "./video.scss"

const VideoComponent = () => {
    
    const {t} = useTranslation();

    return (
        <div className="video" id="video">
            <div className="row kumuluz-container">
                <div className="col-md-7">
                    <p className="video-title">{t('video.video-title')}</p>
                    <p className="video-text">{t('video.video-text')}</p>
                    <button className="video-button">
                    <span className="video-button-text"><a href={CONTACT_URL}>{t("header.button-contact")}</a></span>
                    </button>
                </div>
                <div className="col-md-5">
                    <p>videooooooo</p>
                </div>
            </div>
    </div>
    )
}

export default VideoComponent;