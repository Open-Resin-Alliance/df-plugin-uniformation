# df-plugin-uniformation

DragonFruit Plugin for UniFormation Printers

Profile-only complex plugin: ships printer presets targeting the `.ctb`
output format provided by the `ctb` plugin. No encoder, network, or
runtime code of its own.

## Printers

| Preset | Resolution | Pixel size (µm) | Z height |
| --- | --- | --- | --- |
| GKtwo | 7680 × 4320 | 29.7 × 29.7 | 245 mm |
| GK3 Pro | 15120 × 6230 | 14 × 19 | 240 mm |
| GK3 Ultra | 15120 × 6230 | 20 × 26 | 300 mm |

> **Format note**
>
> UniFormation firmware is reported to reject plain CTB (v1–v4) and only
> accept encrypted CTB (see [UVtools discussion #846](https://github.com/sn4k3/UVtools/discussions/846)).
> Presets therefore default to `formatVersion: "v5enc"`. This has not yet
> been verified on hardware — adjust after on-printer testing.
