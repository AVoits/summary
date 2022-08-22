import styles from "./style.module.css";

customElements.define('tag-item',
    class extends HTMLElement {
        render(){
            const {name} = this.attributes;

            this.innerHTML = `
                <div class="${styles.item}">
                    <div>${name.value}</div>
                </div>`
        }

        connectedCallback() {
            if (!this.rendered) {
                this.render();
                this.rendered = true;
            }
        }

        static get observedAttributes() { // (3)
            return ['name'];
        }

        attributeChangedCallback(name, oldValue, newValue) { // (4)
            this.render();
        }
    });


