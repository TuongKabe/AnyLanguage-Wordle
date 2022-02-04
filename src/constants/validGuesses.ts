import { CONFIG } from './config'

export const VALIDGUESSES = [
  'a giao',
  'a hoàn',
  'a phiến',
  'a tòng',
  'ả hoàn',
  'á khôi',
  'á phiện',
  'á quân',
  'á sừng',
  'á thánh',
  'ác cảm',
  'ác độc',
  'ác đức',
  'ác hại',
  'ác khẩu',
  'ác mộng',
  'ác nhân',
  'ác quỉ',
  'ác thú',
  'ác tính',
  'ác vàng',
  'aceton',
  'acetylen',
  'ách tắc',
  'ách vận',
  'ad hoc',
  'ai bảo',
  'ai lại',
  'ai nấy',
  'ai ngờ',
  'ai oán',
  'ải quan',
  'ải thâm',
  'ái chà',
  'ái hữu',
  'ái khanh',
  'ái lực',
  'ái ngại',
  'ái phi',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
