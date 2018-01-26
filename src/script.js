var colorn;

var color = new Vue({
    el: '#color',
    data: {
        message: 'here',
        isActive: false,
        anim: 'anim',
        style:{
            backgroundColor: 'lightgreen'
        },
        ripcolor:{
            backgroundColor: '#4aa3df'
        }
    },
    methods: {
        change: function () {
            axios.get('http://localhost:3000/REST/COLOR').then((res) =>{
                colorn = res.data.color
                this.ripcolor.backgroundColor = colorn;
                this.isActive = true
                setTimeout(() => {
                    this.style.backgroundColor = this.ripcolor.backgroundColor;
                    this.isActive = false;
                }, 700);
            });
        }
    }
});
