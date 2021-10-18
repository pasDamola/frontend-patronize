const app = Vue.createApp({
    data() {
        return {
             steps: [
                { id: 1, step: 'Verify Account', active: true},
                { id: 2, step: 'Social Handles', active: false},
                { id: 3, step: 'Business Category', active: false},
              ],
            premium: true
        }
    },
})
