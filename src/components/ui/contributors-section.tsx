import { useLayoutEffect, useMemo, useRef, useState, useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'motion/react';

export interface Contributor {
  username: string;
  avatarUrl: string;
  profileUrl?: string;
  testimonial?: string;
}

export interface ContributorsWallProps {
  title?: string;
  subtitle?: ReactNode;
  contributors: Contributor[];
  totalCount?: number;
  columns?: number;
  tilt?: number;
  perspective?: number;
  speed?: number;
  height?: number | string;
  className?: string;
}

interface TooltipState {
  username: string;
  testimonial?: string;
  left: number;
  top: number;
}

const GAP = 12;

// Réplète les avatars pour que cela soit aligné en grille correcte
function padToGrid(items: Contributor[], columns: number): Contributor[] {
  if (items.length === 0) return items;
  const remainder = items.length % columns;
  if (remainder === 0) return items;
  const fill = columns - remainder;
  return items.concat(
    Array.from({ length: fill }, (_, i) => items[i % items.length]),
  );
}

export default function ContributorsWall({
  title = 'Élèves Accompagnés',
  subtitle,
  contributors,
  totalCount,
  columns = 16,
  tilt = 18,
  perspective = 1100,
  speed = 24,
  height = 300,
  className,
}: ContributorsWallProps) {
  const wallRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [blockHeight, setBlockHeight] = useState(0);

  // Responsive columns
  const [currentCols, setCurrentCols] = useState(columns);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCurrentCols(Math.min(6, columns));
      else if (window.innerWidth < 1024) setCurrentCols(Math.min(10, columns));
      else setCurrentCols(columns);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  const tiles = useMemo(
    () => padToGrid(contributors, currentCols),
    [contributors, currentCols],
  );
  const count = totalCount ?? contributors.length;

  useLayoutEffect(() => {
    const block = blockRef.current;
    if (!block) return;
    const measure = () => setBlockHeight(block.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(block);
    return () => ro.disconnect();
  }, [tiles, currentCols]);

  const y = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    if (tooltip || blockHeight === 0) return;
    const wrap = blockHeight + GAP;
    let next = y.get() - (speed * delta) / 1000;
    if (next <= -wrap) next += wrap;
    y.set(next);
  });

  const handleEnter = (
    e: React.MouseEvent<HTMLElement>,
    c: Contributor
  ) => {
    const wall = wallRef.current;
    if (!wall) return;
    const tile = e.currentTarget.getBoundingClientRect();
    const box = wall.getBoundingClientRect();
    setTooltip({
      username: c.username,
      testimonial: c.testimonial,
      left: tile.left - box.left + tile.width / 2,
      top: tile.top - box.top,
    });
  };

  const planeStyle: CSSProperties = {
    transform: `rotateX(${tilt}deg)`,
    transformStyle: 'preserve-3d',
  };
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${currentCols}, minmax(0, 1fr))`,
    gap: GAP,
  };

  const renderGrid = (copy: number, ref?: React.Ref<HTMLDivElement>) => (
    <div ref={ref} className="grid w-full" style={gridStyle}>
      {tiles.map((c, i) => {
        const Tile = (c.profileUrl ? 'a' : 'div') as 'a';
        return (
          <Tile
            key={`${copy}-${c.username}-${i}`}
            {...(c.profileUrl
              ? { href: c.profileUrl, target: '_blank', rel: 'noreferrer' }
              : {})}
            aria-label={c.username}
            onMouseEnter={(e) => handleEnter(e, c)}
            className="group relative block aspect-[3/4] sm:aspect-square outline-none"
          >
            <span className="absolute inset-0 overflow-hidden rounded-[8px] sm:rounded-xl transition-transform duration-300 ease-out group-hover:z-20 group-hover:scale-[1.28] group-focus-visible:z-20 group-focus-visible:scale-[1.28] shadow-lg">
              <img
                src={c.avatarUrl}
                alt={c.username}
                loading="lazy"
                draggable={false}
                className="h-full w-full select-none object-cover grayscale brightness-75 transition duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-focus-visible:grayscale-0 group-focus-visible:brightness-100"
              />
              <span className="pointer-events-none absolute inset-0 rounded-[8px] sm:rounded-xl ring-1 ring-inset ring-white/10 transition group-hover:ring-brand-400/50" />
            </span>
          </Tile>
        );
      })}
    </div>
  );

  return (
    <div className={`w-full overflow-hidden ${className ?? ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 text-center">
        <h2 className="text-brand-400 text-sm font-display font-light tracking-wide uppercase mb-3">
          {title}
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-100 leading-tight mb-4">
          Leurs vies ont changé.
        </h3>
        <p className="mt-2 text-base sm:text-lg font-display font-light text-gray-400 mx-auto max-w-2xl">
          {subtitle ?? (
            <>
              Rejoignez plus de{' '}
              <span className="font-semibold text-gray-200">
                {count}
              </span>{' '}
              membres qui font exploser leurs résultats au quotidien.
            </>
          )}
        </p>
      </div>

      <div
        ref={wallRef}
        className="relative mx-auto mt-4 sm:mt-8 max-w-7xl overflow-hidden"
        style={{
          perspective: `${perspective}px`,
          perspectiveOrigin: '50% 50%',
          height,
        }}
        onMouseLeave={() => setTooltip(null)}
      >
        <div className="h-full" style={planeStyle}>
          <motion.div className="flex w-full flex-col" style={{ y, gap: GAP }}>
            {renderGrid(0, blockRef)}
            {renderGrid(1)}
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(130% 95% at 50% 50%, transparent 30%, #030712 82%),
              linear-gradient(to bottom, #030712 0%, transparent 16%, transparent 84%, #030712 100%),
              linear-gradient(to right, #030712 0%, transparent 12%, transparent 88%, #030712 100%)
            `,
          }}
        />

        {tooltip && (
          <div
            className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-[calc(100%+20px)] w-[90vw] max-w-[280px] sm:max-w-xs whitespace-normal rounded-xl border border-gray-800 bg-gray-900/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl transition-all duration-200"
            style={{ left: tooltip.left, top: tooltip.top }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700 hidden sm:block shrink-0">
                <img src={contributors.find(c => c.username === tooltip.username)?.avatarUrl} alt={tooltip.username} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-gray-100 font-display text-sm leading-tight">{tooltip.username}</p>
                <div className="flex text-amber-400 text-xs mt-0.5">
                  ★★★★★
                </div>
              </div>
            </div>
            
            {tooltip.testimonial && (
              <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed">
                "{tooltip.testimonial}"
              </p>
            )}
            <span className="absolute left-1/2 top-full h-3 w-3 sm:h-4 sm:w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-gray-800 bg-gray-900/95" />
          </div>
        )}
      </div>
    </div>
  );
}
