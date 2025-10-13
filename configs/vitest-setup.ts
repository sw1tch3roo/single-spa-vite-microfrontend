import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

Object.defineProperty(Element.prototype, 'scrollIntoView', {
    value: vi.fn(),
    writable: true,
});

const ESTIMATED_SIZE = 44;

Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    value: ESTIMATED_SIZE,
});

const { getComputedStyle } = window;

window.getComputedStyle = (elt) => getComputedStyle(elt);

vi.mock('react-dom', async () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(await vi.importActual<any>('react-dom')),
    createPortal: vi.fn((element) => {
        return element;
    }),
}));
