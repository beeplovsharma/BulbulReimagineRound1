import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Three = () => {
    const ref = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;

            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);

        };

        handleResize();
        window.addEventListener('resize', handleResize);
        renderer.setPixelRatio(4)
        ref.current.appendChild(renderer.domElement);
        
        // Add a directional light
        const light = new THREE.DirectionalLight(0xffffff, 40);
        light.position.set(40, 200, 150);
        scene.add(light);
        const group = new THREE.Group();

        const axesHelper = new THREE.AxesHelper(50);
        const loader = new GLTFLoader();
        loader.load('redbull.glb', function (gltf) {
            gltf.scene.position.set(13.3, -2.1, -9.2); // replace x, y, z with the desired coordinates
            // gltf.scene.scale.set(8, 6, 8); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(8, 6, 8); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        scene.add(group);
        // group.add(axesHelper);
        camera.position.z = 15;
        // camera.position.x = 0;
        // camera.position.y = 15;
        group.rotation.y = -Math.PI * 0.05
        group.rotation.x = Math.PI * 0.1
        group.scale.set(2.5, 2.5, 2.5)
        group.position.y = -5
        group.position.x = 0
        function handleScale() {

            if (window.innerWidth < 638) {
                group.scale.set(0.35 * 2.5, 0.35 * 2.5, 0.35 * 2.5)
                group.position.y = -0

            }
            else if (window.innerWidth < 768) {
                group.scale.set(0.5 * 2.5, 0.5 * 2.5, 0.5 * 2.5)
                group.position.y = -0


            }
            else {
                group.scale.set(2.5, 2.5, 2.5)
                group.position.y = -5

            }
        }
        handleScale()
        window.addEventListener('resize', handleScale);

        

        const animate = function () {
            requestAnimationFrame(animate);
            // camera.lookAt(group.position);

            renderer.render(scene, camera);

        };

        // GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(group.position, {
            scrollTrigger: {
                // trigger: "#trigger",
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleActions: "restart pause resume pause"
            },
            z: Math.PI / 8,
            y: -Math.PI / 2,
            // x: -Math.PI / 6
        });
        gsap.to(group.rotation, {
            scrollTrigger: {
                // trigger: "#trigger",
                start: "top top",
                end: "+=200%",
                scrub: true,
                toggleActions: "restart pause resume pause"
            },
            y: -Math.PI,
        });


        animate();

    }, []);

    return <div className='h-screen w-full fixed z-20 ' ref={ref} />;
};

export default Three;
