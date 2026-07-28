import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import { FaPlay, FaCode } from 'react-icons/fa';

import './ProjectDetail.css'
import placeholder from '../../assets/png/placeholder.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

function ProjectDetail() {

    const { id } = useParams();
    const { theme } = useContext(ThemeContext);

    const project = projectsData.find((p) => String(p.id) === String(id));

    const useStyles = makeStyles((t) => ({
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.primary,
                transform: 'scale(1.1)',
            },
        },
        icon: {
            fontSize: '1.2rem',
        },
    }));

    const classes = useStyles();

    if (!project) {
        return (
            <div className="projectDetail" style={{ backgroundColor: theme.secondary }}>
                <div className="projectDetail-header" style={{ backgroundColor: theme.primary }}>
                    <Link to="/projects">
                        <AiOutlineHome className={classes.home} />
                    </Link>
                    <h1 style={{ color: theme.secondary }}>Project Not Found</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="projectDetail" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | {project.projectName}</title>
            </Helmet>

            <div className="projectDetail-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/projects">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>{project.projectName}</h1>
            </div>

            <div className="projectDetail-container">
                <div className="projectDetail-card" style={{ backgroundColor: theme.primary400 }}>
                    <img
                        src={project.image ? project.image : placeholder}
                        alt={project.projectName}
                    />

                    <p className="projectDetail-desc" style={{ color: theme.tertiary }}>
                        {project.projectDesc}
                    </p>

                    <div className="projectDetail-tags">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                style={{ backgroundColor: theme.secondary, color: theme.tertiary }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {(project.demo || project.code) && (
                        <div className="projectDetail-btns">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.iconBtn}
                                    aria-label="Demo"
                                >
                                    <FaPlay className={classes.icon} />
                                </a>
                            )}
                            {project.code && (
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.iconBtn}
                                    aria-label="Code"
                                >
                                    <FaCode className={classes.icon} />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
