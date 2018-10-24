一、函数参数的解构赋值
	<script>
		function add ([x,y]){
			return x + y
		}
		console.log(sum([1,2]))
	</script>


二、函数变化
	<script>
		function show(){
			// 如果传a的话就用a的值，如果不传的话a默认的值
			a = a || '欢迎';
			b = b || 'mnr';
			console.log(a,b)
		}
		show('welocome', '牧码人')
	</script>


<template>
  <div>
    <input v-modle="file1"/>
    <input v-modle="file2"/>
    <input v-modle="file3"/>
  </div>
<template>
<script>
  export default {
    data(){
      return {
          file1: '',
          file2: ''
      }
    },
    methods: {

    },
    computed: {
    // 在computed中，在引用的时候，一定不要加()去调用
       直接把它们当用变通忏悔使用就好了

       计算属性：只要计算属性，这个function内部，所用到的任何data中
       数据发生了变化，就会重新计算这个计算属性的值
      'file3': function() {
        return this.file1 + this.file2
      }
    },
    watch:{
    //监控firstName 当其值发生改变的时候，被自动触发回调函数的执行
      'file3': function(newValue,oldValue){
        this.file3 = this.file1 + this.file2
      }
    },
    // computed 的get() set()
    file3: function(){
      get(){
        return this.file1 + this.file2;
      },
      set(value){
        // 监视当前值,value 就是当前最新的值
          const names = value.split('')
          this.file1 = names[0]
          this.file2 = names[1]
      }
    }
  }
</script>
