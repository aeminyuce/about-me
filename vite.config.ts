import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from 'vite-svg-loader';

export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        svgLoader()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less'],
        alias: {
            '@jsconfig': path.resolve(import.meta.dirname, 'jsconfig.json'),
            '@lessconfig': path.resolve(import.meta.dirname, 'lessconfig.less'),

            '@ui': path.resolve(import.meta.dirname, 'node_modules/uilab/react/'),
            '@less': path.resolve(import.meta.dirname, 'node_modules/uilab/less/'),
            '@js': path.resolve(import.meta.dirname, 'node_modules/uilab/js/'),
            '@icon': path.resolve(import.meta.dirname, 'node_modules/uilab-icons/react/'),
            '@sprite': path.resolve(import.meta.dirname, 'node_modules/uilab-icons/sprite/'),

            '@assets': path.resolve(import.meta.dirname, 'src/assets/'),
            '@components': path.resolve(import.meta.dirname, 'src/components/'),
            '@helpers': path.resolve(import.meta.dirname, 'src/helpers/'),
            '@layouts': path.resolve(import.meta.dirname, 'src/layouts/'),
            '@models': path.resolve(import.meta.dirname, 'src/models/'),
            '@pages': path.resolve(import.meta.dirname, 'src/pages/'),
            '@services': path.resolve(import.meta.dirname, 'src/services/'),
            '@skeleton': path.resolve(import.meta.dirname, 'src/skeleton/'),
            '@stores': path.resolve(import.meta.dirname, 'src/stores/')
        }
    },
    css: {
        preprocessorOptions: {
            less: {}
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true
    },
    build: {
        outDir: 'build',
        emptyOutDir: true,
        sourcemap: mode !== 'production',

        rollupOptions: {
            input: path.resolve(import.meta.dirname, 'index.html'),
            output: {
                entryFileNames: 'js/[name].[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]'
            }
        }
    }
}));