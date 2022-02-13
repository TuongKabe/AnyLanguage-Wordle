import { CONFIG } from './config'

export const ORTHOGRAPHY = ['D', 'i', ' ', 'd', 'ờ', 'i']

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
