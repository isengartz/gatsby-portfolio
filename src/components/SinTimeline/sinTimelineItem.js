import React from 'react';
import styles from "./sinTimeline.module.scss";
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components'

// @todo: one day finish this shit and refactor
const ContainerItem = styled.li`
    color:#000;
    &:before {
        ${props => props.dotColor && css`
        box-shadow: 0px 0px 0px 3px ${props => props.dotColor} ;
        background: ${props => props.dotColor} !important;
        `}
        
        ${props => props.size && css`
        width: calc(${props => props.size}px + 10px);
        height: calc(${props => props.size}px + 10px);
        top: calc( (${props => props.top} - 5px) );
        `}
        ${props => props.size && props.orient === "left" && css`
        right: calc(${props => props.right} - 5px) 
        `}
        
        ${props => props.size && props.orient === "right" && css`
        left:calc(${props => props.left} - 5px) 
        `};
    }
    span {
     position: absolute;
     top: 25px;
     right: -11px;
     width: 20px;
     height: 20px;
     background: rgba(233, 33, 99, 1);
     -webkit-border-radius: 50%;
     -moz-border-radius: 50%;
     border-radius: 50%;
     -webkit-box-shadow: 0px 0px 0px 3px rgba(233, 33, 99, 0.2);
     -moz-box-shadow: 0px 0px 0px 3px rgba(233, 33, 99, 0.2);
     box-shadow: 0px 0px 0px 3px rgba(233, 33, 99, 0.2);
        ${props => props.size && props.top && props.right && props.orient === "left" && css`
        top: ${props => props.top} !important;
        right: calc(${props => props.right} + 0.5px) !important;
        `}
        
        ${props => props.size && props.top && props.left && props.orient === "right" && css`
        top: ${props => props.top} !important;
        left: ${props => props.left} !important;
        `
    }
`
const sinTimelineItem = (props) => {
    const {
        id,
        containerStyle,
        titleText,
        jobTitleText,
        descriptionText,
        dateText,
        orientation,
        icon,
        iconSize,
        iconTop,
        iconLeft,
        iconRight,
        dotBackgroundColor
    } = props

    return (
        <li id={id} style={containerStyle}
            // top={iconTop} left={iconLeft} right={iconRight} size={iconSize} orient={orientation}
            //            dotColor={dotBackgroundColor}
            className={orientation === "left" ? [styles.TimelineOrientationLeft, styles.TimelineContainer].join(" ") : [styles.TimelineOrientationRight, styles.TimelineContainer].join(" ")}>

            <span className={styles.Icon}> {icon ?? null}</span>

            <div className={styles.TimelineItem}>
                <h3>{titleText}</h3>
                <span className={styles.JobTitle}>{jobTitleText}</span>
                <p>{descriptionText}</p>
            </div>
            <div className={styles.TimelineDate}>
                <h4>{dateText}</h4>
            </div>
        </li>
    );
};

sinTimelineItem.propTypes = {
    id: PropTypes.string,
    containerStyle: PropTypes.shape({}),
    titleText: PropTypes.string,
    jobTitleText: PropTypes.string,
    descriptionText: PropTypes.string,
    dateText: PropTypes.string,
    orientation: PropTypes.oneOf(["left", "right"]).isRequired,
    icon: PropTypes.node,
    iconSize: PropTypes.number,
    iconLeft: PropTypes.string,
    iconTop: PropTypes.string,
    iconRight: PropTypes.string,
    dotBackgroundColor: PropTypes.string

}
sinTimelineItem.defaultProps = {
    id: '',
    containerStyle: null,
    titleText: '',
    jobTitleText: '',
    descriptionText: '',
    dateText: '',
    orientation: 'left',
    icon: null,
    iconLeft: null,
    iconRight: null,
    iconTop: null,
    iconSize: null,
    dotBackgroundColor: ''
}
export default sinTimelineItem;
