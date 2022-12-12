customElements.define(
    'tag-item',
    class extends HTMLElement {
        constructor() {
            super();
            this.data = ''

        }

        render() {
            this.innerHTML = html`
                <style>
                    .item {
                        background-color: var(--tertiary-container-light);
                        color: var(--on-tertiary-container-light);

                        padding: 4px 12px;
                        border-radius: 4px;
                        display: inline-block;
                    }

                </style>
                <div class="item">
                    <div>${this.data}</div>
                </div>`;
        }

        connectedCallback() {
            this.render();
        }
    }
);
