import uniformationGktwoPrinters from './printers/gktwo-series.json';
import uniformationGk3Printers from './printers/gk3-series.json';

function resolvePresetImagePath(imageAssetPath: unknown): string | undefined {
  if (typeof imageAssetPath !== 'string' || !imageAssetPath.trim()) return undefined;
  const trimmed = imageAssetPath.trim();
  if (trimmed.startsWith('/') || trimmed.startsWith('http')) return trimmed;
  const normalized = trimmed.startsWith('./') ? trimmed.slice(2) : trimmed;
  return `/plugins/uniformation/printers/${normalized}`;
}

function mapPresets(presets: any[]) {
  return presets.map((preset) => ({
    ...preset,
    imageAssetPath: resolvePresetImagePath(preset.imageAssetPath),
  }));
}

export const UNIFORMATION_PLUGIN_MANIFEST = {
  schemaVersion: 1,
  id: 'uniformation-builtin',
  name: 'UniFormation Plugin',
  version: '0.1.0',
  description: 'UniFormation printer profiles for DragonFruit.',
  author: 'Open Resin Alliance',
  homepage: 'https://github.com/Open-Resin-Alliance/df-plugin-uniformation',
  printerPresets: [
    ...mapPresets(uniformationGktwoPrinters as any[]),
    ...mapPresets(uniformationGk3Printers as any[]),
  ],
  materialTemplates: [],
};
