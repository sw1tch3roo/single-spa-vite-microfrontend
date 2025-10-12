import path from 'path';

const getScopedName = (localName: string, resourcePath: string) => {
    const relativePath = path.relative(process.cwd(), resourcePath);
    const filePath = relativePath
        .replace(/\/[^/]+$/g, '')
        .replace(/\\/g, '/')
        .replace(/\.[^/.]+$/, '')
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/src_/g, '')
        .replace(/node_modules__/g, '');

    return `${filePath}_${localName}`;
};

export const generateScopedName =
    process.env.NODE_ENV === 'development'
        ? (name, filename) => {
              return getScopedName(name, filename);
          }
        : undefined;
