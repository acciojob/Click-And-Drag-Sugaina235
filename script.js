// Your code here.
const container=document.querySelector('.items');
const cubes=document.querySelectorAll('.item');
cubes.forEach(cube=>{
	let isDragging=false;
	let startX,startY;
	let initialX,initialY;
	cube.addEventListener('mousedown',(e)=>{
		isDragging=true;
		cube.style.zIndex=1000;
		startX=e.clientX;
		startY=e.clientY;
		const rect=cube.getBoundingClientRect();
			const containerRect=container.getBoundingClientRect();
		initialX=rect.left-containerRect.left;
		initialY=rect.top-containerRect.top;
		cube.style.position='absolute';
		cube.style.left=`${initialX}px`;
		cube.style.top=`${initialY}px`;
		
	});
	document.addEventListener('mousemove',(e)=>{
       if(!isDragging) return;
		const dx=e.clientX-startX;
		const dy=e.clientY-startY;
		let newX=initialX+dx;
		let newY=initialY+dy;
		const cubeRect=cube.getBoundingClientRect();
			const containerRect=container.getBoundingClientRect();
		const minX=0;
		const minY=0;
		const maxX=container.clientWidth-cube.offsetWidth;
			const maxY=container.clientHeight-cube.offsetHeight;
		if(newX<minX) newX=minX;
		if(newX>maxX) newX=maxX;
		if(newY<minY) newY=minY;
		if(newY>maxY) newY=maxY;
		cube.style.left=`${newX}px`;
		cube.style.top=`${newY}px`;

		
	})
	document.addEventListener('mouseup',()=>{
   if(isDragging){
	   isDragging=false;
	   cube.style.zIndex="";
   }


	});

		
	
})