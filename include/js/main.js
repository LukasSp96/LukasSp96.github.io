//import '../css/styles.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
	antialias: true,
	canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(30);


const geometry = new THREE.TorusGeometry( 10, 3, 35, 110 );
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
//const material = new THREE.MeshNormalMaterial();
//const material2 = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});

const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 15);

const ambientLIght = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLIght);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

//Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// animation
function animate(time) {
	
	requestAnimationFrame( animate )

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;
	//torus.rotation.x = time / 2000;
	//torus.rotation.y = time / 1000;

	controls.update();

	renderer.render( scene, camera );
}
animate()

//renderer.setAnimationLoop( animation );
//document.body.appendChild( renderer.domElement );