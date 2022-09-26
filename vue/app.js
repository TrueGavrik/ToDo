const App = {
    data() {
        return {
            placeholderString : 'введите название заметки',
            title: 'список заметок',
            inputValue: '',
            notes: ['заметка 1', 'заметка 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue= event.target.value
        },
        addNewNote(){
            if ( this.inputValue !== ''){
                    this.notes.push( this.inputValue)
        this.inputValue= ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
   
        removeNote(idx){
            this.notes.splice(idx, 1)
        }
    },

    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },

    }
}

Vue.createApp(App).mount('#app')