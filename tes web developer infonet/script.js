const app = Vue.createApp({
    data() {
        return {
            items: [{ type: 'Age', value: '' }],
            jsonOutput: ''
        }
    },
    methods: {
        addItem() {
            this.items.unshift({ type: 'Age', value: '' });
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
        outputJson() {
            this.jsonOutput = JSON.stringify(this.items, null, 2);
        }
    }
});

app.component('b-form-input', bFormInput);
app.component('b-form-select', bFormSelect);
app.component('b-button', BButton);

app.mount('#app');
