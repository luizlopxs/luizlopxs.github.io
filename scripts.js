// Declare variables and functions in the global scope
var scene, camera, renderer, model, canvas, light;

function init() {
  // Get a reference to the canvas element
  canvas = document.getElementById("myCanvas");

  // Initialize the scene, camera, and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Add a light to the scene
  light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 0, 50);
  scene.add(light);

  // Load the 3D model 
  var loader = new THREE.GLTFLoader();
  loader.load("scene.gltf", function (gltf) {
    model = gltf.scene;
    scene.add(model);
  });
}

// Call the init function when the page is loaded
window.addEventListener("load", function() {
  init();
  render();
});

// Render the scene
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
