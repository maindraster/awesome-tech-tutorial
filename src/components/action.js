// 复制按钮
export function initCopy() {
  const btn = document.getElementById('copy-markdown')
  if (!btn) return
  // 先解绑旧逻辑（防止多次初始化）
  const newBtn = btn.cloneNode(true)
  btn.replaceWith(newBtn)

  newBtn.addEventListener('click', async () => {
    const path = newBtn.dataset.path
    if (!path) return
    try {
      const md = await fetch(path + '.md').then(r => r.text())
      await navigator.clipboard.writeText(md)

      newBtn.classList.add('copied')
      setTimeout(() => newBtn.classList.remove('copied'), 3000)
    } catch (e) {
      console.error('Copy failed:', e)
    }
  })
}

// 下拉菜单
export function initDropdown() {
  const toggle = document.getElementById('dropdown-toggle')
  const menu   = document.getElementById('dropdown-menu')
  if (!toggle || !menu) return

  // 同样先解绑
  const newToggle = toggle.cloneNode(true)
  toggle.replaceWith(newToggle)

  newToggle.addEventListener('click', e => {
    e.stopPropagation()
    menu.classList.toggle('show')
  })

  // 点外部关闭
  const close = () => menu.classList.remove('show')
  document.addEventListener('click', close)
  // 导航后记得清理，防止重复绑定
  menu.addEventListener('click', e => e.stopPropagation())
  window.addEventListener('popstate', close)
}

// 一次性调用入口
export function initButtons() {
  initCopy()
  initDropdown()
}