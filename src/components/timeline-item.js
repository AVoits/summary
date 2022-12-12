customElements.define(
    'timeline-item',
    class extends HTMLElement {
        constructor() {
            super();
            this.data = {};
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const { time, name, info, className } = this.data;

            const circleStyle = `circle ${this.data.fill ?? 'fill'}`;
            const itemStyle ="item" + (className ? ` ${className}` : '');
            const template = document.createElement('template');

            template.innerHTML = html`
                <style>
                    :host {

                    }
                    
                    .item {
                        display: grid;
                        grid-template-columns: 150px 18px 1fr;
                        background-color: var(--background-light);
                        width: 600px;
                    }

                    .info {
                        padding: 16px;
                    }

                    .time {
                        text-align: right;
                        padding: 16px;
                    }

                    .name {
                        font-size: 24px;
                        font-weight: bolder;
                        margin-bottom: 8px;
                        color: var(--tertiary-light);
                    }

                    .circle {
                        width: 20px;
                        position: relative;
                        align-self: stretch;
                    }


                    .line {
                        width: 2px;
                        background-color: var(--tertiary-light);
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 9px;
                    }

                    .circle:after {
                        content: '';
                        width: 16px;
                        height: 16px;
                        border: 2px solid var(--tertiary-light);
                        background-color: var(--tertiary-container-light);
                        border-radius: 50%;
                        position: absolute;
                        top: 20px
                    }


                    .fill:after {
                        background-color: var(--tertiary-container-light);
                    }



                    .item.first .circle:after {
                        background-color: var(--background-light);
                    }

                    .item.first {
                        margin-top: 16px;
                    }

                    .item.first .circle:before {
                        content: '';
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 10px 14px 10px;
                        border-color: transparent transparent var(--tertiary-light) transparent;
                        position: absolute;
                        top: -14px;

                    }

                    .item.last .circle:before {
                        content: '';
                        width: 20px;
                        height: 4px;
                        border-bottom: 2px solid var(--tertiary-light);
                        position: absolute;
                        bottom: 0;
                    }
                </style>
                <slot></slot>
                <div class="${itemStyle}">
                    <div class="time">
                        <div>${time?.start}</div>
                        <div>${time?.end}</div>
                    </div>
                    <div class="${circleStyle}">
                        <div class="line"></div>
                    </div>
                    <div class="info">
                        <div class="name">${name}</div>
                        <div>${info}</div>
                    </div>
                </div>
            `;

            this.attachShadow({mode: 'open'}).append(template.content.cloneNode(true));
        }
    }
);
