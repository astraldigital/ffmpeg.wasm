const { devDependencies } = require('../../package.json');

/*
 * Default options for browser environment
 */
const corePath = typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
  ? new URL('@ffmpeg/core/dist/ffmpeg-core.js', import.meta.url).href
  : `https://unpkg.com/@ffmpeg/core@${devDependencies['@ffmpeg/core'].substring(1)}/dist/ffmpeg-core.js`;

export default { corePath };
