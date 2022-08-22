import './components/timeline-item';

const hostTimeLine = document.querySelector('#timeline');

const workLine = [
    {
        name: '1111',
        time: {
            start: 'Июнь 2022',
            end: 'Июнь 2022',
        },
        info: 'Again, we define our getter and setter methods,',
    },
    {
        name: '2222',
        time: {
            start: 'Июнь 2022',
            end: 'Июнь 2022',
        },
        info: 'Again, we define our getter and setter methods,',
    },
    {
        name: '3333',
        time: {
            start: 'Июнь 2022',
            end: 'Июнь 2022',
        },
        info: 'Again, we define our getter and setter methods,',
    },
    {
        name: '44444',
        time: {
            start: 'Июнь 2022',
            end: 'Июнь 2022',
        },
        info: 'Again, we define our getter and setter methods,',
    },
];

workLine.map((el, index) => {
    const tag = document.createElement('timeline-item');
    tag.data = el;
    hostTimeLine.append(tag);
});
