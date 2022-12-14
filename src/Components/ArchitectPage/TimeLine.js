import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimeLine = (props) => {
    const items = props.data.map((item, index) => (
        <TimelineItem
            key={index}
            dateText={item.date}
            dateInnerStyle={{ background: 'linear-gradient(90deg, #E0E3EB 0%, rgba(63,81,181,1)  100%)', color: '#000' }}
            bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
            style={{ color: '#e86971' }}
        >
            <p>{item.text}</p>
        </TimelineItem>
    ));

    return (
        <Timeline lineColor={'#ddd'}>{items}</Timeline>
    )
};

export default TimeLine;
