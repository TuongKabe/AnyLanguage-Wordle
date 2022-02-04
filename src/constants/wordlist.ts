import { CONFIG } from './config'

export const WORDS = [
  'ác tâm',
  'ái chà',
  'an trí',
  'an tọa',
  'án thư',
  'án từ',
  'ảo ảnh',
  'áo mưa',
  'ảo giác',
  "áp đảo",
  'ăn cắp',
  "ăn chay",
  'ăn chia',
  'ăn đứt',
  "ăn ngọn",
  'ăn lời',
  'ăn nói',
  'ăngten',
  'ăn xin',
  "ăn vận",
  "âm bản",
  "âm chủ",
  "âm cưc",
  'âm đạo',
  'âm tín',
  'âm hồn',
  "ẩn núp",
  'ẩn náu',
  "ẩn ngữ",
  'ấm sinh',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
