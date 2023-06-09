import { Video } from './video.js';
const video = Video.create('#mi-video');
const buttons = document.querySelectorAll('.video-buttons > button');
buttons?.forEach(btn => {
    if (btn instanceof HTMLElement) {
        btn.addEventListener('click', () => {
            const moment = btn.dataset.videoMoment;
            video?.goto(Number(moment));
        });
    }
});
