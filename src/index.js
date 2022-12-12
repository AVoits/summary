import './components';
import { workLine} from './const/timeLineInfo';
import {tagsArray} from "./const/tags";

const hostTimeLine = document.querySelector('#timeline');
const hostTags = document.querySelector('#tags');

workLine.map((el, index, arr) => {
    const tag = document.createElement('timeline-item');
    tag.data = el;
    if (index === 0) {
        tag.data.className = 'first';
    }
    if (index === arr.length - 1) {
        tag.data.className = 'last';
    }
    hostTimeLine.append(tag);
});

tagsArray.map((el) => {
    const item = document.createElement('tag-item');
    item.data = el;
    hostTags.append(item);
});
