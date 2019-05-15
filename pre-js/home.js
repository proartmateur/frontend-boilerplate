var app = new Vue({
  el: '#app',
  data: {
  },
  mounted(){
  },
  methods: {

  },
  computed: {
    img_section_style: function(){

        return {
            '--bg-hover-color': 'url('+this.imgs[this.active]+')',
              }
    },
},
	props: {
    bg: { type: String, default: "red", required: false },
  }
})
