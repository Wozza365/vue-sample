Vue.component('input-field', {
    template: '#input-field-template',
    props: [
        'title',
        'len',
        'valid'
    ],
    data() {
        return {
            value: ''
        }
    }
});