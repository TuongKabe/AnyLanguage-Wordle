import { CONFIG } from './config'

export const VALIDGUESSES = ['a giao', 'a hoàn']

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
