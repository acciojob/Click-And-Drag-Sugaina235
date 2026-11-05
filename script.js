// Your code here.
const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

cubes.forEach(cube => {
  let isDragging = false;
  let startX, startY;
  let initialX, initialY;

  // 1. When you click down on a cube
  cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    cube.style.zIndex = 1000; // Bring active cube to the front

    // Record initial mouse position relative to the viewport
    startX = e.clientX;
    startY = e.clientY;

    // Get cube's current position relative to the container
    const rect = cube.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    initialX = rect.left - containerRect.left;
    initialY = rect.top - containerRect.top;

    // Set initial absolute positioning if not already set
    cube.style.position = 'absolute';
    cube.style.left = `${initialX}px`;
    cube.style.top = `${initialY}px`;
  });

  // 2. Move the cube as the mouse moves
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Calculate how far the mouse has moved
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newX = initialX + dx;
    let newY = initialY + dy;

    // Boundary constraints: Keep the cube inside the container box
    const containerRect = container.getBoundingClientRect();
    const cubeRect = cube.getBoundingClientRect();

    const minX = 0;
    const minY = 0;
    const maxX = container.clientWidth - cube.offsetWidth;
    const maxY = container.clientHeight - cube.offsetHeight;

    if (newX < minX) newX = minX;
    if (newX > maxX) newX = maxX;
    if (newY < minY) newY = minY;
    if (newY > maxY) newY = maxY;

    // Apply the new position
    cube.style.left = `${newX}px`;
    cube.style.top = `${newY}px`;
  });

  // 3. Drop the cube when mouse click is released
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      cube.style.zIndex = ''; // Reset z-index
    }
  });
});

