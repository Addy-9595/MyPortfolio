import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, bullets}) {

    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
        bulletList: {
            marginTop: '0.6rem',
            paddingLeft: '1rem',
            listStyleType: 'disc',
        },
        bulletItem: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.88rem',
            color: theme.tertiary80,
            marginBottom: '0.35rem',
            lineHeight: '1.4',
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className={`experience-card ${classes.experienceCard}`}
                style={{ height: 'auto', minHeight: '90px' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    {hovered && bullets && bullets.length > 0 && (
                        <ul className={classes.bulletList}>
                            {bullets.map((point, index) => (
                                <li key={index} className={classes.bulletItem}>{point}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
