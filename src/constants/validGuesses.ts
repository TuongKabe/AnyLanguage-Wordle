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
  'ái quần',
  'ái quốc',
  'ái tình',
  'ảm đạm',
  'ám ảnh',
  'ám chỉ',
  'ám hại',
  'ám quẻ',
  'ám sát',
  'ám thị',
  'amiđan',
  'ampere',
  'an bài',
  'an bình',
  'an giấc',
  'an khang',
  'an nhàn',
  'an ninh',
  'an phận',
  'an táng',
  'an tâm',
  'an thai',
  'an thần',
  'an tọa',
  'an trí',
  'án gian',
  'án mạng',
  'án ngữ',
  'án phí',
  'án sát',
  'án thư',
  'án treo',
  'áng chừng',
  'angorit',
  'anh ách',
  'anh ánh',
  'anh chàng',
  'anh chị',
  'anh dũng',
  'anh đào',
  'anh em',
  'anh hào',
  'anh hoa',
  'anh hùng',
  'anh linh',
  'anh minh',
  'anh quân',
  'anh tài',
  'anh thư',
  'anh trai',
  'anh túc',
  'anh vũ',
  'ảnh ảo',
  'ảnh âm',
  'ảnh ẩn',
  'ảnh thật',
  'ánh kim',
  'ánh ỏi',
  'ánh sáng',
  'anofen',
  'ao ước',
  'ảo đăng',
  'ảo giác',
  'ảo hóa',
  'ảo mộng',
  'ảo não',
  'ảo thanh',
  'ảo vọng',
  'áo bào',
  'áo bay',
  'áo bìa',
  'áo bông',
  'áo cánh',
  'áo choàng',
  'áo cối',
  'áo dài',
  'áo gai',
  'áo giáp',
  'áo gió',
  'áo hạt',
  'áo kén',
  'áo khách',
  'áo khoác',
  'áo lặn',
  'áo lót',
  'áo mưa',
  'áo nậu',
  'áo nhộng',
  'áo phao',
  'áo phông',
  'áo quan',
  'áo quần',
  'áo rộng',
  'áo tắm',
  'áo thụng',
  'áo tơi',
  'áo xống',
  'áp bức',
  'áp chảo',
  'áp chế',
  'áp dẫn',
  'áp dụng',
  'áp đảo',
  'áp đặt',
  'áp giá',
  'áp giải',
  'áp lực',
  'áp phích',
  'áp tải',
  'áp thấp',
  'apatit',
  'áp phích',
  'asphalt',
  'axeton',
  'áy náy',
  'austral',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}