import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

const reportsDir = process.env.VITE_REPORTS_DIR
    ? `${process.env.VITE_REPORTS_DIR}`
    : path.resolve(__dirname, 'coverage');

const tmpDir = process.env.VITE_TMP_DIR ? `${process.env.VITE_TMP_DIR}` : path.resolve(__dirname, 'tmp');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig((_) => {
    return {
        plugins: [react()],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./configs/vitest-setup.ts'],
            globalSetup: './configs/vitest-globals.ts',
            coverage: {
                provider: 'v8',
                reportsDirectory: reportsDir,
                include: ['src/**/*.{js,ts,tsx}'],
                exclude: [
                    '**/node_modules/**',
                    '**/dist/**',
                    '**/.next/**',
                    '**/.out/**',
                    '**/public/**',
                    '**/tmp/**',
                    '**/generated/**',
                ],
            },
            reporters: ['junit'],
            outputFile: {
                junit: `${tmpDir}/junit.xml`,
            },
            silent: false,
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src'),
            },
        },
    };
});
