'use client';
import { useEffect, useRef } from 'react';

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;

    async function init() {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      const W = canvas.clientWidth;
      const H = canvas.clientHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
      camera.position.set(0, 0, 5);

      const RADIUS = 1.6;

      // ── WIREFRAME GLOBE ──
      const sphereGeo = new THREE.SphereGeometry(RADIUS, 32, 32);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x818cf8,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const globe = new THREE.Mesh(sphereGeo, wireMat);
      scene.add(globe);

      // ── SURFACE DOTS ──
      const dotCount = 220;
      const dotGeo = new THREE.BufferGeometry();
      const dotPos = new Float32Array(dotCount * 3);
      for (let i = 0; i < dotCount; i++) {
        // Fibonacci sphere distribution
        const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const r = RADIUS + 0.015;
        dotPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        dotPos[i * 3 + 1] = r * Math.cos(phi);
        dotPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      }
      dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
      const dotMat = new THREE.PointsMaterial({
        color: 0x34d399,
        size: 0.04,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      });
      const dots = new THREE.Points(dotGeo, dotMat);
      scene.add(dots);

      // ── CONNECTION ARCS ──
      const arcGroup = new THREE.Group();
      scene.add(arcGroup);

      function randomSurfacePoint() {
        const u = Math.random(), v = Math.random();
        const phi   = Math.acos(2 * u - 1);
        const theta = 2 * Math.PI * v;
        return new THREE.Vector3(
          RADIUS * Math.sin(phi) * Math.cos(theta),
          RADIUS * Math.cos(phi),
          RADIUS * Math.sin(phi) * Math.sin(theta),
        );
      }

      const arcMat = new THREE.LineBasicMaterial({
        color: 0xf97316,
        transparent: true,
        opacity: 0.45,
      });

      for (let i = 0; i < 18; i++) {
        const a = randomSurfacePoint();
        const b = randomSurfacePoint();
        // Midpoint lifted above sphere surface for arc effect
        const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.35);
        const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
        arcGroup.add(new THREE.Line(arcGeo, arcMat));
      }

      // ── SATURN RINGS ──
      const ringGroup = new THREE.Group();
      scene.add(ringGroup);

      const ringData = [
        { inner: 1.95, outer: 2.25, opacity: 0.18, color: 0x818cf8 },
        { inner: 2.32, outer: 2.48, opacity: 0.12, color: 0x34d399 },
        { inner: 2.55, outer: 2.65, opacity: 0.08, color: 0xf97316 },
      ];

      ringData.forEach(({ inner, outer, opacity, color }) => {
        const rGeo = new THREE.RingGeometry(inner, outer, 120);
        const rMat = new THREE.MeshBasicMaterial({
          color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity,
        });
        const ring = new THREE.Mesh(rGeo, rMat);
        ring.rotation.x = Math.PI / 2.4;
        ringGroup.add(ring);
      });

      // slight tilt on the whole scene
      scene.rotation.z = 0.18;

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += 0.003;
        globe.rotation.y = t * 0.28;
        dots.rotation.y  = t * 0.28;
        arcGroup.rotation.y = t * 0.28;
        ringGroup.rotation.y = t * 0.12;
        ringGroup.rotation.z = Math.sin(t * 0.4) * 0.03;
        renderer.render(scene, camera);
      }
      animate();

      const onResize = () => {
        if (!canvas) return;
        const w = canvas.clientWidth, h = canvas.clientHeight;
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
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
