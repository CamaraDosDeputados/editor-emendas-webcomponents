import type { IWindow } from 'happy-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import '../src/my-element'

declare global {
  interface Window extends IWindow { }
}

describe('Botão de incremento', async () => {
  beforeEach(async () => {
    document.body.innerHTML = '<my-element name="World"></my-element>'
    await window.happyDOM.whenAsyncComplete()
    await new Promise(resolve => setTimeout(resolve, 0))
  })

  function getInsideElement(): HTMLElement | null | undefined {
    return document.body.querySelector('my-element')?.shadowRoot?.querySelector('button')
  }

  it('deve aumentar o contador a cada click', () => {
    getInsideElement()?.click()
    expect(document.body.querySelector('my-element')?.shadowRoot?.innerHTML).toContain('1')
  })

  it('deve mostrar o name passado no props', () => {
    getInsideElement()
    expect(document.body.querySelector('my-element')?.shadowRoot?.innerHTML).toContain('World')
  })

  it('deve chamar o evento de contar ao clicar no botão', () => {
    const spyClick = vi.fn()

    document.querySelector('my-element')!.addEventListener('count', spyClick)

    getInsideElement()?.click()

    expect(spyClick).toHaveBeenCalled()
  })
})