'use client';
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let THREE: typeof import('three');

    async function init() {
      THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
      camera.position.z = 30;

      // Floating particles
      const count = 180;
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const speeds = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 80;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
        speeds[i] = 0.2 + Math.random() * 0.5;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        color: 0xf97316,
        size: 0.18,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // Soft connecting lines (subset)
      const lineMat = new THREE.LineBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.06 });
      for (let i = 0; i < 30; i++) {
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
          new THREE.Vector3(positions[((i + 1) % count) * 3], positions[((i + 1) % count) * 3 + 1], positions[((i + 1) % count) * 3 + 2]),
        ]);
        scene.add(new THREE.Line(lineGeo, lineMat));
      }

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += 0.003;

        const pos = geo.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
          pos[i * 3 + 1] += Math.sin(t + i * 0.3) * 0.003 * speeds[i];
          pos[i * 3]     += Math.cos(t + i * 0.5) * 0.002 * speeds[i];
        }
        geo.attributes.position.needsUpdate = true;

        points.rotation.y = t * 0.04;
        points.rotation.x = Math.sin(t * 0.5) * 0.04;

        renderer.render(scene, camera);
      }
      animate();

      const onResize = () => {
        if (!canvas) return;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    }

    const cleanup = init();
    return () => { cleanup.then(fn => fn && fn()); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}
