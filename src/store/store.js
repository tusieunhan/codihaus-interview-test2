import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            items: [
                {
                    nameIcon: "/src/assets/icon/177.png",
                    name: "Emergency",
                    desc: "(237) 681-812-255",
                },
                {
                    nameIcon: "/src/assets/icon/188.png",
                    name: "LOCATION",
                    desc: "0123 Some Place",
                },
                {
                    nameIcon: "/src/assets/icon/178.png",
                    name: "WORK HOUR",
                    desc: "09:00 - 20:00 Everyday",
                },
            ],
            textSearch: '',
            services: [
                {
                    isActive: false,
                    pathIcon: 'src/assets/icon/Checkup.png',
                    name: 'Free Checkup',
                    content: {
                        title: 'A passion for putting patients first.1',
                        items: ['A Passion for Healing',
                            '5-Star Care',
                            'All our best',
                            'Believe in Us',
                            'A Legacy of Excellence',
                            'Always Caring'],
                        photos: ['src/assets/img/Group 186.png', 'src/assets/img/Group 187.png'],
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.'
                    },
                },
                {
                    isActive: true,
                    pathIcon: 'src/assets/icon/Heart.png',
                    name: 'Cardiogram',
                    content: {
                        title: 'Runtime vs. Compile-time Reactivity',
                        items: ['A Passion for Healing',
                            'Composition API',
                            'All our best',
                            ' Vue 3 the Options API',
                            'Believe in Us',
                            ' All property access on',
                            'Always Caring'],
                        photos: ['src/assets/img/13.png', 'src/assets/img/12.png'],
                        desc: 'The ref(), computed() and watchEffect() APIs are all part of the Composition API. If you have only been using Options API with Vue so far, youll notice that Composition API is closer to how Vues reactivity system works under the hood. In fact, in Vue 3 the Options API is implemented on top of the Composition API. All property access on the component instance (this) triggers getter/setters for reactivity tracking, and options like watch and computed'
                    },
                },
                {
                    isActive: false,
                    pathIcon: 'src/assets/icon/Testing.png',
                    name: 'Dna Testing',
                    content: {
                        title: 'Reactivity Debugging',
                        items: ['Its great that Vues reactivity',
                            '5-Star Care',
                            'update using the renderTracked',
                            'Believe in Us',
                        ],
                        photos: ['src/assets/img/14.jpg', 'src/assets/img/vuex.png'],
                        desc: 'We can debug what dependencies are used during a components render and which dependency is triggering an update using the renderTracked and renderTriggered lifecycle hooks. Both hooks will receive a debugger event which contains information on the'
                    },
                },
                {
                    isActive: false,
                    pathIcon: 'src/assets/icon/Blood.png',
                    name: 'Blood Bank',
                    content: {
                        title: 'Integration with External State Systems',
                        items: ['A Passion for Healing',
                            'The general idea of integrating',
                            'property is accessed',
                            'Believe in Us',
                            'A Legacy of Excellence',
                            'When the external'],
                        photos: ['src/assets/img/11.png', 'src/assets/img/13.png'],
                        desc: 'Immutable data structures solve this by never mutating the state objects - instead, it creates new objects that share the same, unchanged parts with old ones. There are different ways of using immutable data in JavaScript, but we recommend using Immer with Vue because it allows you to use immutable data while keeping the more ergonomic, mutable syntax.'
                    },
                },
            ],
            infoBooking: {
                name: "",
                email: "",
                gender: "",
                phone: "",
                date: "2022-02-22",
                time: "11:22",
                doctor: "",
                department: "",
                message: ""
            },
            doctors: [
                {
                    name: "Tony Stark",
                    photoUrl: "src/assets/img/3.png",
                    career: "Neurology",
                    desc: "Đen - Ai muốn nghe không (M/V)",
                    socials: [
                        {
                            typeSocial: 'facebook',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'linkedin',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'instagram',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                    ]
                },
                {
                    name: "Pepper Potts",
                    photoUrl: "src/assets/img/2.png",
                    career: "Neurology",
                    desc: "Đen - Ai muốn nghe không (M/V)",
                    socials: [
                        {
                            typeSocial: 'facebook',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'linkedin',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'instagram',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                    ]
                },
                {
                    name: "Bucky Barnes",
                    photoUrl: "src/assets/img/1.png",
                    career: "Neurology",
                    desc: "Đen - Ai muốn nghe không (M/V)",
                    socials: [
                        {
                            typeSocial: 'facebook',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'linkedin',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'instagram',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                    ]
                },
                {
                    name: "Thor Odinson",
                    photoUrl: "src/assets/img/2.png",
                    career: "Neurology",
                    desc: "Đen - Ai muốn nghe không (M/V)",
                    socials: [
                        {
                            typeSocial: 'facebook',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'linkedin',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'instagram',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                    ]
                },
                {
                    name: "Steve Rogers",
                    photoUrl: "src/assets/img/3.png",
                    career: "Neurology",
                    desc: "Đen - Ai muốn nghe không (M/V)",
                    socials: [
                        {
                            typeSocial: 'instagram',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'linkedin',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                        {
                            typeSocial: 'facebook',
                            link: "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
                        },
                    ]
                },
            ],
            news: [
                {
                    id: 1,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 2,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 3,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 4,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 5,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 56,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 555,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
                {
                    id: 434,
                    dateAndAuthor: "Monday 05, September 2021 | By TuSieuNhan",
                    title: "This Article’s Title goes Here, but not too long.",
                    countHearts: 79,
                    countViews: 999,
                    photoUrl: "src/assets/img/Rectangle 34.png"
                },
            ]

        }
    },
    mutations: {
        setTextSearch(state, payload) {
            state.textSearch = payload.text

        },
        setBooking(state, payload) {
            state.infoBooking.name = payload.name
            state.infoBooking.email = payload.email
            state.infoBooking.gender = payload.gender
            state.infoBooking.phone = payload.phone
            state.infoBooking.date = payload.date
            state.infoBooking.time = payload.time
            state.infoBooking.doctor = payload.doctor
            state.infoBooking.department = payload.department
            state.infoBooking.message = payload.message
        },
    },
    actions: {

    }
})

export default store