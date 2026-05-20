import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const [target, setTarget] = useState({ x: 0, y: 0 })
  const [current, setCurrent] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const animFrame = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window) return

    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverDetect = (e) => {
      const t = e.target
      const interactive = t.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')
      setIsHovering(!!interactive)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverDetect)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverDetect)
    }
  }, [isVisible])

  // Lerp effect — cursor lags behind
  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      setCurrent(prev => ({
        x: lerp(prev.x, target.x, 0.12),
        y: lerp(prev.y, target.y, 0.12),
      }))
      animFrame.current = requestAnimationFrame(animate)
    }

    animFrame.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame.current)
  }, [target])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: current.x,
        top: current.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="rounded-full transition-all duration-200"
        style={{
          width: isHovering ? 40 : 14,
          height: isHovering ? 40 : 14,
          background: isHovering
            ? 'rgba(232, 197, 71, 0.08)'
            : '#E8C547',
          border: isHovering ? '1.5px solid rgba(232, 197, 71, 0.5)' : 'none',
          boxShadow: isHovering
            ? '0 0 20px rgba(232, 197, 71, 0.15)'
            : '0 0 12px rgba(232, 197, 71, 0.4)',
        }}
      />
    </div>
  )
}
