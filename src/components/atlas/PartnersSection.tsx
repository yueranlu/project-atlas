import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import PartnerModal from "./PartnerModal";

// Current Sponsor Logo imports
import logoFoodHero from "@/assets/foodhero.png";
import logoBDO from "@/assets/bdo.png";
import logoOsler from "@/assets/olser.png";
import logoPlanned from "@/assets/planned.png";
import logoTriptyq from "@/assets/triptyq.png";
import logoMondou from "@/assets/mondou.png";
import logoORT from "@/assets/ort.png";

// Previous Partner Logo imports (for globe)
import logoAnthropic from "@/assets/partners/anthropic.png";
import logoGoogle from "@/assets/partners/google.png";
import logoAmazon from "@/assets/partners/amazon.png";
import logoPerplexity from "@/assets/partners/perplexity.png";
import logoInovia from "@/assets/partners/inovia.png";
import logoNationalBank from "@/assets/partners/national_bank.png";
import logoDormRoom from "@/assets/partners/dorm_room.png";
import logoWhiteStar from "@/assets/partners/white_star.png";
import logoAntler from "@/assets/partners/antler.png";
import logoLightspeed from "@/assets/partners/lightspeed.png";
import logoInvestissement from "@/assets/partners/investissement_quebec.png";
import logoAmplitude from "@/assets/partners/amplitude.png";
import logoBoreal from "@/assets/partners/boreal.png";
import logoLuge from "@/assets/partners/luge.png";
import logoBrightspark from "@/assets/partners/brightspark.png";
import logoIntact from "@/assets/partners/intact.png";
import logoRBC from "@/assets/partners/rbc.png";
import logoFramework from "@/assets/partners/framework.png";
import logoMcKinsey from "@/assets/partners/mckinsey.png";
import logoNationGraph from "@/assets/partners/nationgraph.png";
import logoGarageCapital from "@/assets/partners/GarageCapital_logo.png";

// Current sponsors (shown as cards on left side)
const sponsors = [
  { name: "FoodHero", logo: logoFoodHero, url: "https://www.foodhero.com/" },
  { name: "BDO", logo: logoBDO, url: "https://www.bdo.ca/" },
  { name: "Osler", logo: logoOsler, url: "https://www.osler.com/en/" },
  { name: "Planned", logo: logoPlanned, url: "https://planned.com/" },
  { name: "Triptyq", logo: logoTriptyq, url: "https://triptyq.vc/" },
  { name: "Mondou", logo: logoMondou, url: "https://www.mondou.com/en-CA/home" },
];

// Previous partners (shown in the 3D globe)
const partners = [
  { name: "Anthropic", logo: logoAnthropic },
  { name: "Google", logo: logoGoogle },
  { name: "Amazon", logo: logoAmazon },
  { name: "Perplexity", logo: logoPerplexity },
  { name: "Inovia Capital", logo: logoInovia },
  { name: "National Bank", logo: logoNationalBank },
  { name: "Garage Capital", logo: logoGarageCapital },
  { name: "White Star Capital", logo: logoWhiteStar },
  { name: "Antler", logo: logoAntler },
  { name: "Lightspeed", logo: logoLightspeed },
  { name: "Investissement Quebec", logo: logoInvestissement },
  { name: "Amplitude", logo: logoAmplitude },
  { name: "Boreal Ventures", logo: logoBoreal },
  { name: "Luge Capital", logo: logoLuge },
  { name: "Brightspark", logo: logoBrightspark },
  { name: "Intact", logo: logoIntact },
  { name: "RBC", logo: logoRBC },
  { name: "Framework", logo: logoFramework },
  { name: "McKinsey & Company", logo: logoMcKinsey },
  { name: "DormRoomFund", logo: logoDormRoom },
  { name: "NationGraph", logo: logoNationGraph },
];

// Fibonacci sphere
const RADIUS = 210;

function fibSphere(n: number, r: number) {
  const pts: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rr = Math.sqrt(1 - y * y);
    const th = phi * i;
    pts.push({ x: Math.cos(th) * rr * r, y: y * r, z: Math.sin(th) * rr * r });
  }
  return pts;
}
const PTS = fibSphere(partners.length, RADIUS);

const css = `
  .ps-wrap {
    position: relative;
    width: 100%;
    max-width: 480px;
    aspect-ratio: 1;
    margin: 0 auto;
  }
  .ps-inner {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }
  .ps-node {
    position: absolute;
    top: 50%; left: 50%;
    width: 58px; height: 58px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 14px;
    border: 1px solid hsl(0 0% 12%);
    background: hsl(0 0% 6% / 0.9);
    backdrop-filter: blur(5px);
    overflow: hidden;
    cursor: default;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 14px rgba(0,0,0,0.55);
    will-change: transform, opacity;
  }
  .ps-node:hover {
    border-color: rgba(137, 170, 204, 0.5);
    box-shadow: 0 0 20px rgba(137, 170, 204, 0.15), 0 2px 14px rgba(0,0,0,0.55);
  }
  .ps-node img {
    width: 78%; height: 78%;
    object-fit: contain;
    filter: brightness(0) invert(1) opacity(0.82);
    transition: filter 0.2s, transform 0.2s;
    pointer-events: none;
    user-select: none;
  }
  .ps-node:hover img {
    filter: brightness(0) invert(1) opacity(1);
    transform: scale(1.08);
  }
  .ps-wrap::after {
    content: '';
    position: absolute; inset: 0;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 4% / 0.72) 100%);
    pointer-events: none;
    z-index: 20;
  }
`;

const PartnerSphere = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const rotY = useRef(0);
  const rotX = useRef(0.28);
  const velY = useRef(0.0028);
  const velX = useRef(0);
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const tick = useCallback(() => {
    if (!dragging.current) {
      velY.current += (0.0028 - velY.current) * 0.012;
      velX.current *= 0.96;
    }
    rotY.current += velY.current;
    rotX.current = Math.max(-0.72, Math.min(0.72, rotX.current + velX.current));

    const inner = innerRef.current;
    if (inner) {
      inner.style.transform =
        `rotateX(${(rotX.current * 180 / Math.PI).toFixed(2)}deg) rotateY(${(rotY.current * 180 / Math.PI).toFixed(2)}deg)`;

      const cRx = Math.cos(rotX.current), sRx = Math.sin(rotX.current);
      const cRy = Math.cos(rotY.current), sRy = Math.sin(rotY.current);

      const nodes = inner.querySelectorAll<HTMLElement>(".ps-node");
      nodes.forEach((node, i) => {
        const p = PTS[i];
        const z = -p.x * sRy * cRx + p.y * sRx + p.z * cRy * cRx;
        const depth = (z + RADIUS) / (2 * RADIUS);
        const opacity = Math.max(0.07, depth * 0.82 + 0.14);
        const scale = Math.max(0.62, depth * 0.42 + 0.60);
        node.style.opacity = opacity.toFixed(3);
        node.style.transform =
          `translate(-50%,-50%) translate3d(${p.x}px,${p.y}px,${p.z}px) scale(${scale.toFixed(3)})`;
      });
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    velY.current = 0;
    velX.current = 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    velY.current = (e.clientX - lastMouse.current.x) * 0.0013;
    velX.current = (e.clientY - lastMouse.current.y) * 0.0013;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };
  const onUp = () => {
    dragging.current = false;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    velY.current = 0;
    velX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    velY.current = (e.touches[0].clientX - lastMouse.current.x) * 0.0013;
    velX.current = (e.touches[0].clientY - lastMouse.current.y) * 0.0013;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  return (
    <div
      className="ps-wrap"
      style={{ perspective: "880px", cursor: "grab" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onUp}
    >
      <div ref={innerRef} className="ps-inner">
        {partners.map((p, i) => (
          <div
            key={p.name}
            className="ps-node"
            title={p.name}
            style={{ transform: `translate(-50%,-50%) translate3d(${PTS[i].x}px,${PTS[i].y}px,${PTS[i].z}px)` }}
          >
            <img src={p.logo} alt={p.name} draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PartnersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="partners" className="py-32 px-6 bg-background">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy + name list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Our Partners</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Currently partnered with leading firms and private donors across
                Canada's innovation ecosystem
              </h3>
            </motion.div>

            {/* Current Sponsor Logos */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
            >
              {sponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 rounded-lg border border-stroke bg-white hover:border-stroke/80 transition-colors"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-w-full max-h-16 object-contain"
                  />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 border-2 border-stroke text-foreground hover:border-transparent transition-all hover:scale-105"
              >
                <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                Become a Partner
              </button>
            </motion.div>
          </div>

          {/* Right: 3D logo sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[11px] text-muted-foreground/45 text-center mb-3">
              Previous partners
            </p>
            <PartnerSphere />
          </motion.div>
        </div>
      </div>
      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PartnersSection;