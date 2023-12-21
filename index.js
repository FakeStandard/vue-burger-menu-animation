// // 新增根實體
// const { createApp } = Vue

// createApp({
//     data() { },
//     // 在根實體內註冊自訂元件
//     components: {
//         'burger': {
//             template: '#burger',
//             data() {
//                 return {
//                     isOpen: false
//                 }
//             },
//             methods: {
//                 toggle() {
//                     this.isOpen = !this.isOpen
//                 }
//             }
//         }
//     },
// }).mount('#app')


// 或是改成以下寫法也可

// 新增根實體
const app = Vue.createApp({})

// 在根實體內註冊自訂元件
app.component('burger', {
    template: '#burger',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
})

app.mount('#app')