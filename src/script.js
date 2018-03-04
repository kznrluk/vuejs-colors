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
            axios.get('http://localhost:3000/API/COLOR').then((res) =>{
                this.ripcolor.backgroundColor = res.data.color;
                this.isActive = true;
                setTimeout(() => {
                    this.style.backgroundColor = this.ripcolor.backgroundColor;
                    this.isActive = false;
                }, 700);
            });
        }
    }
});
