import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import type { Page } from '../types'

/** Show the glass cursor only on desktop with a precise pointer and no reduced-motion preference. */
function canUseCustomCursor() {
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Replaces the default cursor with a glass circle on the home hero.
 * Active only on the home page, outside the header, over links/buttons.
 */
export function useGlassCursor(currentPage: Ref<Page>, cursorRef: Ref<HTMLElement | null>) {
  let active = false

  const hero = () => document.getElementById('home-hero')

  const pointerIsOnHero = (x: number, y: number) => {
    if (currentPage.value !== 'home') return false

    const heroEl = hero()
    if (!heroEl) return false

    const { left, right, top, bottom, width, height } = heroEl.getBoundingClientRect()
    if (width === 0 || height === 0) return false
    if (x < left || x > right || y < top || y > bottom) return false

    const header = document.querySelector('header')?.getBoundingClientRect()
    if (header && y >= header.top && y <= header.bottom) return false

    return true
  }

  const setActive = (show: boolean) => {
    const cursor = cursorRef.value
    if (!cursor || show === active) return

    active = show
    cursor.classList.toggle('active', show)
    hero()?.style.setProperty('cursor', show ? 'none' : '')
    document.body.style.cursor = show ? 'none' : ''

    if (!show) {
      cursor.classList.remove('hover', 'click')
    }
  }

  const onMouseMove = (event: MouseEvent) => {
    const cursor = cursorRef.value
    if (!cursor) return

    const onHero = pointerIsOnHero(event.clientX, event.clientY)
    setActive(onHero)

    if (!onHero) return

    cursor.style.left = `${event.clientX}px`
    cursor.style.top = `${event.clientY}px`

    const overLink =
      event.target instanceof Element && !!event.target.closest('#home-hero a, #home-hero button')
    cursor.classList.toggle('hover', overLink)
  }

  const onMouseDown = () => {
    if (active) cursorRef.value?.classList.add('click')
  }

  const onMouseUp = () => {
    cursorRef.value?.classList.remove('click')
  }

  const onMouseLeave = () => {
    setActive(false)
    document.body.style.cursor = ''
  }

  onMounted(() => {
    if (!canUseCustomCursor()) return

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mouseleave', onMouseLeave)
    document.body.style.cursor = ''
    hero()?.style.removeProperty('cursor')
  })
}
