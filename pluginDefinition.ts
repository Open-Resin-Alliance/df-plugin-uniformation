import type { ComplexPluginDefinition } from '@/features/plugins/complexPluginContracts';
import { UNIFORMATION_PLUGIN_MANIFEST } from './pluginManifest';

export const UNIFORMATION_COMPLEX_PLUGIN_DEFINITION: ComplexPluginDefinition = {
    id: 'uniformation',
    manifest: UNIFORMATION_PLUGIN_MANIFEST,
    capabilities: {
        networkOperations: false,
        uploadWithProgress: false,
        slicerEncoder: false,
        tauriRuntimePlugin: false,
    },
};
export default UNIFORMATION_COMPLEX_PLUGIN_DEFINITION;
