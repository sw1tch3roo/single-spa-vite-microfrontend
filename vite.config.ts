// / <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig, type PluginOption } from 'vite';

const externalDependencies = ['react', 'react-dom', 'react-router-dom', 'react-router'];

const plugins: PluginOption[] = [react()];

export default () => {
    return defineConfig({
        plugins: plugins,
        server: {
            port: 3001,
            strictPort: true,
        },
        envPrefix: 'VITE_',
        resolve: {
            alias: [{ find: '@', replacement: '/src' }],
        },
        build: {
            cssCodeSplit: true,
            assetsDir: 'assets',
            emptyOutDir: false,
            rollupOptions: {
                input: 'src/react-app.tsx',
                external: externalDependencies,
                output: {
                    entryFileNames: '[name].js',
                    assetFileNames: 'assets/[name].[ext]',
                    format: 'module',
                },
                preserveEntrySignatures: 'strict',
            },
        },
    });
};
