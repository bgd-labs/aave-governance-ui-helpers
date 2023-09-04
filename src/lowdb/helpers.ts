require('dotenv').config();

const coreDirName = process.env.CORE_NETWORK || 'sepolia';
export const baseDirName = `src/generated-cache/${coreDirName}`;
