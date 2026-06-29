import { onMounted, onBeforeUnmount } from 'vue'

export function useGlassCursor(currentPage, cursorRef) {
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0
  let visible = false
  let rafId = null

  const getHero = () => document.getElementById('home-hero')

  const isOverHero = (x, y) => {
    if (currentPage.value !== 'home') return false
    const hero = getHero()
    if (!hero) return false
    const rect = hero.getBoundingClientRect()
    if (rect.height === 0 || rect.width === 0) return false
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) return false
    const header = document.querySelector('header')
    if (header) {
      const headerRect = header.getBoundingClientRect()
      if (y >= headerRect.top && y <= headerRect.bottom) return false
    }
    return true
  }

  const setVisible = (show) => {
    const cursor = cursorRef.value
    if (!cursor) return
    if (show === visible) return
    visible = show
    if (show) {
      cursorX = mouseX
      cursorY = mouseY
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
    }
    cursor.classList.toggle('active', show)
    const hero = getHero()
    if (hero) hero.style.cursor = show ? 'none' : ''
    if (!show) {
      cursor.classList.remove('hover', 'click')
      document.body.style.cursor = ''
    }
  }

  const onMouseMove = (e) => {
    const cursor = cursorRef.value
    if (!cursor) return
    mouseX = e.clientX
    mouseY = e.clientY
    const overHero = isOverHero(e.clientX, e.clientY)
    setVisible(overHero)
    document.body.style.cursor = overHero ? 'none' : ''

    if (visible) {
      const interactive = e.target.closest('#home-hero a, #home-hero button')
      cursor.classList.toggle('hover', !!interactive)
    }
  }

  const onMouseDown = () => {
    if (visible && cursorRef.value) cursorRef.value.classList.add('click')
  }

  const onMouseUp = () => {
    if (cursorRef.value) cursorRef.value.classList.remove('click')
  }

  const onMouseLeave = () => {
    setVisible(false)
    document.body.style.cursor = ''
  }

  const animate = () => {
    const cursor = cursorRef.value
    if (cursor) {
      cursorX += (mouseX - cursorX) * 0.12
      cursorY += (mouseY - cursorY) * 0.12
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
    }
    rafId = requestAnimationFrame(animate)
  }

  onMounted(() => {
    mouseX = window.innerWidth / 2
    mouseY = window.innerHeight / 2
    cursorX = mouseX
    cursorY = mouseY

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    rafId = requestAnimationFrame(animate)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mouseleave', onMouseLeave)
    if (rafId) cancelAnimationFrame(rafId)
    document.body.style.cursor = ''
    const hero = getHero()
    if (hero) hero.style.cursor = ''
  })
}
