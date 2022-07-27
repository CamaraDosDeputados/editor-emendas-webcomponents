import { createSpaConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
import css from "rollup-plugin-import-css";

const baseConfigSpa = createSpaConfig({
	outputDir: 'prod',
	developmentMode: process.env.ROLLUP_WATCH === 'true',
	injectServiceWorker: false,
});

const configSpa = merge(baseConfigSpa, {
	input: './src/index.ts',
	plugins: [ css() ]
});

// Configuração rollup usada para atualizar a pasta "prod"
export default [
	configSpa,
]

