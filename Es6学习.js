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