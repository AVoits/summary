import styles from './style.module.css';

customElements.define(
    'timeline-item',
    class extends HTMLElement {
        constructor() {
            super();
            this.data = {};
        }

        connectedCallback() {
            const circleStyle = `${styles.circle} ${
                this.data.fill && styles.fill
            }`;

            this.innerHTML = html`
                <div class="${styles.time}">
                    <div>${this.data.time.start}</div>
                    <div>${this.data.time.end}</div>
                </div>
                <div class="${circleStyle}">
                    <div class="${styles.line}"></div>
                </div>
                <div class="${styles.info}">
                    <div class="${styles.name}">${this.data.name}</div>
                    <div>${this.data.info}</div>
                </div>
            `;
        }
    }
);
